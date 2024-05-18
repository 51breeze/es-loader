const Compiler = require("easescript/lib/core/Compiler");
const process = require('process');
const path = require("path");
const qs = require('querystring')

const compiler = new Compiler();
process.on('exit', (code) => {
    compiler.dispose();
});

function getBuilderPlugin(config={}){
    const load = ()=>{
        if(config.plugin && typeof config.plugin==='function'){
            return config.plugin;
        }else if(config.name){
            return require(config.name)
        }else{
            throw new Error('Plugin name invalid')
        }
    }
    const builder = load();
    return new builder(compiler, config.options)
}

function errorHandle(context,compilation){
    return compilation.errors.filter( error=>{
        if( error.kind === 1){
            context.emitWarning( new Error( error.toString() ) );
            return false;
        }else{
            return true;
        }
    }).map( item=>item.toString() );
}

var builder = null;
var plugins = null;
var dependencies = new WeakSet();
var fsWatcher = null;
async function initialize( options , context){
    if( builder !== null ){
        return;
    }

    await compiler.initialize();
    builder = getBuilderPlugin(options.builder);
    if(!builder){
        throw new Error('[es-loader] builder is not found.')
    }

    const styleLoader = builder.options.styleLoader || (builder.options.styleLoader = []);
    {
        ["style-loader","css-loader"].forEach(name=>{
            if(!styleLoader.includes(name)){
                styleLoader.push(name);
            }
        })
    }

    let mode = null;
    if(options.builder.options){
        mode = options.builder.options.mode || options.mode;
    }
    builder.options.mode = mode || context.mode || process.env.NODE_ENV || builder.options.mode;

    if( Array.isArray(options.plugins) && options.plugins.length > 0 ){
        plugins = options.plugins.map( plugin=>getBuilderPlugin(plugin) );
        const build=(compilation, chnaged=false)=>{
            if(!compilation || compilation.isDescriptionType){
                return;
            }
            compilation.ready().then(()=>{
                try{
                    const done = (error)=>{
                        if( error ){
                            console.error( error instanceof Error ? error : error.toString() );
                        }
                    }
                    plugins.forEach( plugin=>{
                        if( compiler.isPluginInContext(plugin , compilation) ){
                            if( !dependencies.has(compilation) ){
                                dependencies.add(compilation);
                                if( fsWatcher ){
                                    fsWatcher.add( compilation.file );
                                }
                            }
                            if(chnaged){
                                plugin.build(compilation, done);
                            }else{
                                plugin.start(compilation, done)
                            }
                        }
                    });
                }catch(e){
                    console.error( e );
                }
            })
        }
        if( options.watch ){
            fsWatcher = compiler.createWatcher();
            if( fsWatcher ){
                fsWatcher.on('change',async (file)=>{
                    const compilation = await compiler.createCompilation(file);
                    if( compilation ){
                        build(compilation, true);
                    }
                });
            }
        }
        compiler.on('onParseDone', build);
    }
}

var _vueLoader = null;
function getVueLoader(options){
    if(_vueLoader)return _vueLoader;
    let vueLoader = options.vueLoader;
    if( !vueLoader ){
        vueLoader = require('vue-loader').default;
    }else if( vueLoader.default ){
        vueLoader = vueLoader.default
    }
    if( typeof vueLoader !=='function' ){
        throw new Error('Vue Loader is unavailable. please try `npm install vue-loader@^17.0.0`')
    }
    _vueLoader = vueLoader;
    return _vueLoader;
}

var _compileStyle = null;
function getVueCompileStyle(options){
    if(_compileStyle)return _compileStyle;
    let compileStyle = options.compileStyle;
    if( !compileStyle ){
        compileStyle = require('@vue/compiler-sfc').compileStyle;
    }else if( compileStyle.default ){
        compileStyle = compileStyle.default
    }
    if( typeof compileStyle !=='function' ){
        throw new Error('Vue Loader is unavailable. please try `npm install vue-loader@^17.0.0`')
    }
    _compileStyle = compileStyle;
    return _compileStyle;
}

const allowPreprocessLangs =['less', 'sass','scss','styl','stylus'];

async function Loader( content ){

    const callback = this.async();
    const options = this.getOptions();
    const file = this.resourcePath;

    if(builder===null){
        await initialize(options, this);
    }

    const isProduction = this.mode === 'production' || process.env.NODE_ENV === 'production';
    if(!builder){
        throw new Error('es-loader builder is not configured')
    }
    
    const compilation = await compiler.ready(file);
    if( compilation ){
        
        const opts = builder.options;
        const query = this.resourceQuery ? qs.parse( this.resourceQuery.slice(1) ) : {};
        
        if(query.callhook != null && query.action){
            try{
                return callback(null, await builder.callHook(query.action, compilation, query));
            }catch(e){
                return callback(e);
            }
        }


        const isVueFormat = opts.format ==='vue-raw' || opts.format ==='vue-template' || opts.format ==='vue-jsx';
       
        builder.build(compilation,(error)=>{
            
            const errors = errorHandle(this, compilation);
            if( error ){
                errors.push( error.toString() );
            }

            if( errors && errors.length > 0 ){
                callback( new Error( errors.join("\r\n") ) );
            }else{

                const resourceFile =  compilation.file || compiler.normalizePath(file);
                let content = null;
                let sourceMap = null;
                if(!isVueFormat && query.type === 'style' || query.type === 'embedAssets'){
                    let asset = builder.getBuildAssets(resourceFile, query.index, query.type);
                    if(asset){
                        content = asset.content;
                    }
                }else{
                    let buildModule = builder.getBuildModule(resourceFile, isVueFormat || query.type ? null : query.id )
                    if(buildModule){
                        content = buildModule.content
                        sourceMap = buildModule.sourceMap
                    }
                }
               
                if( content ){

                    if(query.type === 'embedAssets'){
                        callback(null, `export default ${JSON.stringify(content)}`);
                        return;
                    }

                    if( isVueFormat ){
                        try{
                            const vueLoader = getVueLoader(options);
                            if( query.vue !== void 0 && query.type ){
                                const res = vueLoader.call(this, content);
                                return res === '' ? callback(null, '') : void 0;
                            }else if( /^<(template|script|style)>/.test(content) ){
                                content = vueLoader.call(this, content)
                                if(!query.type && content){
                                    content = content.replace(/export\s+default\s+__exports__([\s\r\n]+)?$/, 'export default script;' ); 
                                }
                            }
                        }catch(e){
                            callback( e );
                            return;
                        }
                    }
                    
                    if( options.hot && plugins && !compilation.isDescriptionType && !(query && query.type === 'style') ){

                        let hasDep = false;
                        const addServerDeps = (compilation)=>{
                            const deps = compilation.getCompilationsOfDependency();
                            deps.forEach( depComp=>{
                                if( depComp.file && dependencies.has(depComp) ){
                                    hasDep = true;
                                    this.addDependency( path.normalize(depComp.file) );
                                    addServerDeps(depComp);
                                }
                            });
                        };
                        addServerDeps(compilation);
                        if( hasDep ){
                            content += `\r\n/*Service hot by ${Math.random()}*/`;
                        }
                        callback(null, content, sourceMap);

                    }else{
                        
                        if(query && query.type === 'style' && options.compileStyle!==false){
                            const compileStyle = getVueCompileStyle(options);
                            if(compileStyle){
                                const lang = query.lang;
                                const scoped = !!query.scopeId;
                                const scopeId = scoped ? (builder.options.scopeIdPrefix + query.scopeId) : '';
                                const result = compileStyle({
                                    source:content,
                                    filename:file,
                                    scoped,
                                    inMap:sourceMap,
                                    id:scopeId,
                                    preprocessLang:allowPreprocessLangs.includes(lang) ? lang :  undefined,
                                    isProd:isProduction
                                });
                                content =result.code;
                                sourceMap = result.map;
                            }
                        }
                       
                        callback(null, content, sourceMap);
                    }

                }else{
                    callback( new Error(`'${this.resource}' is not exists.` ) );
                }
            }
        })

    }else{
        callback(null, content);
    }
}

Loader.pitch = function(){};

module.exports=Loader;