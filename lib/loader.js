const Compiler = require("easescript/lib/core/Compiler");
const loaderUtils = require('loader-utils');
const {FSWatcher} = require('chokidar');
const path = require('path');
//const lessLoader = require('less-loader');

const taskQueues = [];
const compiler = new Compiler({diagnose:true,autoLoadDescribeFile:true});

const watcher = new FSWatcher({persistent: true});
watcher.on('change',(file)=>{
    const compilation = compiler.getCompilation(file);
    if(compilation){
        compilation.clear();
    }
});

function next(context){
    progress.processing = false;
    if( taskQueues.length > 0 ){
        progress.apply(context, taskQueues.shift());
    }
}

function errorHander(context,compilation){
    return compilation.errors.filter( error=>{
        if( error.kind === 1){
            context.emitWarning( new Error( error.toString() ) );
            return false;
        }else{
            return true;
        }
    }).map( item=>item.toString() );
}

function getModuleFile(module){
    const file = module.file.replace(/\\/g,'/');
    return module.compilation.modules.size > 1 ? `${file}?id=${module.id}` : file;
}

const hotCallback =`function(dependencyId){
        var moduleClass = __webpack_require__(dependencyId);
        if( document ){       
            var event = document.createEvent('Event');
            event.initEvent('DEVELOPMENT_HOT_UPDATE', true, true);
            event.moduleClass = moduleClass;
            document.dispatchEvent(event);
        }
    }`;

function getHotContent(compilation){
    const deps =[]
    compilation.getDependencies().forEach( (module)=>{
        if( !module.isDeclaratorModule && !module.compilation.isServerPolicy(module) ){
            deps.push(`'${getModuleFile(module)}'`);
        }
    });
    const params = [];
    params.push(`[${deps.join(',')}]`);
    params.push(hotCallback);
    return `if(module.hot){\r\n\tmodule.hot.accept(${params.join(',')});\r\n}`;
}

function progress(file, options, callback, context ){
    progress.processing = true;
    compiler.build(file, options.client.builder, (error,compilation)=>{
        const errors = errorHander(this, compilation);
        if( error ){
            console.log( error.error )
            errors.push( error.error.toString() );
        }
        if( errors && errors.length > 0 ){
            callback( new Error( errors.join("\r\n") ) ); 
            next( context );
        }else{
            const filesystem  = compiler.getOutputFileSystem( options.client.builder.name );
            const done =( error )=>{
                if( error ){
                    callback( error );
                }else{
                    var content = filesystem.readFileSync(file);
                    if( content ){
                        if( this.mode ==="development" && options.hot ){
                            content+='\r\n'+getHotContent(compilation);
                        }
                        callback(null, content);
                    }else{
                        callback( new Error("No content by "+file ) );
                    }
                }
                next(context);
            }
            if(options.server && options.server.builder){
                const serverCompilations = new Set();
                const serverTask = [];
                const serverBuilder = options.server.builder;
                compilation.getModulesByPolicy(2).forEach( module=>{
                    serverCompilations.add(module.compilation);
                });
                serverCompilations.forEach( compilation=>{
                    if( this.mode ==="development" ){
                        this.dependency( compilation.file );
                        watcher.add( compilation.file );
                    }
                    if( !compilation.completed(serverBuilder.name) ){
                        const errors = errorHander(context,compilation);
                        if( errors.length < 1 ){
                            serverTask.push( new Promise((resolve) => {
                                serverBuilder.start(compilation,resolve);
                            }));
                        }else{
                            serverTask.push( new Promise((resolve) => {
                                resolve( new Error( errors.join("\r\n") ) );
                            }));
                        }
                    }
                });
                Promise.all(serverTask).then( (items)=>{
                    let error = null;
                    const result = items.filter( item=>!!item );
                    if( result.length > 0 ){
                        error = new Error( result.map( item=>item.toString() ).join("\r\n") );
                    }
                    done(error);
                });
            }else{
                done();
            }
        }
    },true);
}

function Loader(content, map, meta){
    const callback = this.async();
    const options =  loaderUtils.getOptions(this);
    const file = this.resourcePath;
    taskQueues.push( [file, options, callback, this] );
    next(this);
}

Loader.pitch = function(remainingRequest){};

module.exports=Loader;