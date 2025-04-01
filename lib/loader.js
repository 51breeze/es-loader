const Compiler = require("easescript/lib/core/Compiler");
const Diagnostic = require("easescript/lib/core/Diagnostic");
const process = require('process');
const path = require("path");
const qs = require('querystring')
const compiler = new Compiler();

function getPlugin(config={}, context={}){
    const load = ()=>{
        if(config.plugin && typeof config.plugin==='function'){
            return config.plugin;
        }else if(typeof config.name ==="string"){
            return require(config.name)
        }else{
            throw new Error('Plugin name invalid')
        }
    }
    let plugin = load();
    if(typeof plugin ==='object' && plugin.default){
        plugin = plugin.default;
    }
    return plugin(config.options);
}

function errorHandle(context, compilation){
    if(!Array.isArray(compilation.errors))return;
    let has = false;
    compilation.errors.forEach( error=>{
        if(error.kind === Diagnostic.ERROR){
            context.emitError(new Error( error.toString()));
        }else{
            context.emitWarning( new Error( error.toString()));
        }
    });
    return has;
}

var builder = null;
var plugins = null;
var dependencies = new WeakSet();
var fsWatcher = null;
async function initialize(options , context){
    if( builder !== null ){
        return;
    }

    await compiler.initialize();
    builder = getPlugin(options.builder, context);
    if(!builder){
        throw new Error('[es-loader] builder is not found.')
    }

    let webpack = builder.options.webpack || (builder.options.webpack ={});
    webpack.enable = true;
    
    const inlineStyleLoader = webpack.inlineStyleLoader || (webpack.inlineStyleLoader = []);
    {
        ["style-loader","css-loader"].forEach(name=>{
            if(!inlineStyleLoader.includes(name)){
                inlineStyleLoader.push(name);
            }
        })
    }
    
    if( Array.isArray(options.plugins) && options.plugins.length > 0 ){
        plugins = options.plugins.map( plugin=>getPlugin(plugin, context) );
        const build=(compilation, chnaged=false)=>{
            if(!compilation || compilation.isDescriptionType){
                return;
            }
            compilation.ready().then(()=>{
                let _plugins = plugins.filter(plugin=>compiler.isPluginInContext(plugin,compilation));
                if(_plugins.length>0){
                    if(errorHandle(context, compilation)){
                        return;
                    }
                    try{
                        _plugins.forEach( plugin=>{
                            if( !dependencies.has(compilation) ){
                                dependencies.add(compilation);
                                if( fsWatcher ){
                                    fsWatcher.add( compilation.file );
                                }
                            }
                            if(chnaged){
                                plugin.build(compilation);
                            }else{
                                plugin.run(compilation);
                            }
                        });
                    }catch(e){
                        context.emitError(e);
                    }
                }
            });
        }

        if(options.watch){
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

function addHotServerDeps(compilation, context){
    const deps = compilation.getCompilationsOfDependency();
    let has = false; 
    deps.forEach( dep=>{
        if(dep.file && dependencies.has(dep) ){
            has = true;
            context.addDependency( path.normalize(dep.file) );
            addHotServerDeps(dep);
        }
    });
    return has;
};

const allowPreprocessLangs =['less', 'sass','scss','styl','stylus'];

async function Loader(content){

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
    let sourcemap = null;

    if(compilation){
        const query = this.resourceQuery ? qs.parse( this.resourceQuery.slice(1) ) : {};
        if(query.callhook != null && query.action){
            try{
                return callback(null, await builder.callHook(compilation, query));
            }catch(e){
                return callback(e);
            }
        }

        if(!this.resourceQuery && errorHandle(this, compilation)){
            return;
        }
        
        let buildGraph = null;
        if(query.id && query.type == null){
            buildGraph = await builder.build(compilation, query.id);
        }else{
            buildGraph = await builder.build(compilation);
        }

        if(!buildGraph){
            callback( new Error( `Build error no result. on the "${file}"` ) );
            return;
        }

        sourcemap = buildGraph.sourcemap;
        content = buildGraph.code;
        
        if(!content){
            callback( new Error(`Code is empty. on the "${file}"`));
            return;
        }

        if(query.type === 'style' || query.type === 'embedAssets'){
            let asset = buildGraph.findAsset(asset=>asset.id == query.index);
            if(!asset){
                callback( new Error( `Not found style by "${query.index}". on the "${file}"` ) );
                return;
            }
            content = asset.code;
            sourcemap = asset.sourcemap;
            if(query.type === 'embedAssets'){
                callback(null, `export default ${JSON.stringify(content)}`);
                return;
            }

            if(query.type === 'style' && options.compileStyle!==false){
                const compileStyle = getVueCompileStyle(options);
                if(compileStyle){
                    const lang = query.lang;
                    const scopePrefix = builder.options?.vue?.scopePrefix || "";
                    const scopeId = query.scoped ? (scopePrefix + query.scoped) : '';
                    const result = compileStyle({
                        source:content,
                        filename:file,
                        scoped:!!scopeId,
                        inMap:sourcemap,
                        id:scopeId,
                        preprocessLang:allowPreprocessLangs.includes(lang) ? lang :  undefined,
                        isProd:isProduction
                    });
                    if(result.errors && result.errors.length>0){
                        callback(new Error(result.errors.map( err=>{
                            return err.message + '\n' + err.stack;
                        }).join("\n")));
                        return;
                    }
                    content =result.code;
                    sourcemap = result.map;
                }
            }

        }else if(options.hot && plugins && !compilation.isDescriptionType){
            if(addHotServerDeps(compilation)){
                content += `\n/*Service hot by ${Math.random()}*/`;
            }
        }
    }

    callback(null, content, sourcemap); 
}

Loader.pitch = function(){};

module.exports=Loader;