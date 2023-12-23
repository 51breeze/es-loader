const Compiler = require("easescript/lib/core/Compiler");
const process = require('process');
const path = require("path");
const compiler = new Compiler();

process.on('exit', (code) => {
    compiler.dispose();
});

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
    builder = compiler.applyPlugin(options.builder);

    if( Array.isArray(options.plugins) && options.plugins.length > 0 ){
        plugins = options.plugins.map( plugin=>compiler.applyPlugin(plugin) );
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
        compiler.on('onCreatedCompilation', build);
    }
}

const qs = require('querystring')
function normalizePath(compilation, file, resource, query={}){
    return query.vue == void 0 ? compiler.normalizePath(resource) : compiler.normalizePath(file)
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

async function Loader( content ){

    const callback = this.async();
    const options = this.getOptions();
    const file = this.resourcePath;

    if(builder===null){
        Object.assign(compiler.options, options);
        await initialize(options, this);
    }

    if(!builder){
        throw new Error('es-loader builder is not configured')
    }

    const compilation = await compiler.ready(file);
    if( compilation ){
        
        const query = this.resourceQuery ? qs.parse( this.resourceQuery.slice(1) ) : {};
        if(query.callhook != null && query.action){
            try{
                return callback(null, await builder.callHook(query.action,compilation,query));
            }catch(e){
                return callback(e);
            }
        }

        builder.build(compilation,(error)=>{

            const errors = errorHandle(this, compilation);
            if( error ){
                errors.push( error.toString() );
            }

            if( errors && errors.length > 0 ){
                callback( new Error( errors.join("\r\n") ) );
            }else{
                
                const resourceFile = normalizePath(compilation,file, this.resource, query);
                let content = builder.getGeneratedCodeByFile(resourceFile);
                if( content ){
                    
                    const opts = builder.options;
                    if( (opts.format ==='vue-raw' || opts.format ==='vue-template' || opts.format ==='vue-jsx') ){
                        try{
                            const vueLoader = getVueLoader(options);
                            if( query.vue !== void 0 && query.type ){
                                vueLoader.call(this, content)
                                return;
                            }else if( /^<(template|script|style)>/.test(content) ){
                                content = vueLoader.call(this, content)
                                if( !query.type && content){
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
                        callback(null, content, builder.getGeneratedSourceMapByFile(resourceFile) );
                    }else{
                        callback(null, content, builder.getGeneratedSourceMapByFile(resourceFile) );
                    }

                }else{
                    callback( new Error(`'${resourceFile}' is not exists.` ) );
                }
            }
        })
        
    }else{
        callback(null, content);
    }
}

Loader.pitch = function(){};

module.exports=Loader;