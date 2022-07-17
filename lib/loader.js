//const Compiler = require("easescript/lib/core/Compiler");
const Compiler = require("../../easescript2/lib/core/Compiler");
const loaderUtils = require('loader-utils');
const {FSWatcher} = require('chokidar');
const babel = require('@babel/core');
const process = require('process');
const taskQueues = [];
const compiler = new Compiler({
    diagnose:true,
    debug:true,
    autoLoadDescribeFile:true,
    parser:{
        locations:true
    }
});
const watcher = new FSWatcher({persistent: true});
var serverBuilder = null;
watcher.on('change',(file)=>{
    const compilation = compiler.createCompilation(file);
    if(compilation && serverBuilder){
        compilation.clear();
        try{
            compilation.build(serverBuilder,(error)=>{
                if( error ){
                    console.error( error instanceof Error ? error : error.toString() );
                }else{
                    recursion(compilation, (dep)=>{
                        watcher.add( dep.file );
                    });
                }
            },true);
        }catch(e){
            console.error( e );
        }
    }
});

process.on('exit', (code) => {
    watcher.close();
});

function next(context){
    progress.processing = false;
    if( taskQueues.length > 0 ){
        progress.apply(context, taskQueues.shift());
    }
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

function getHotContent(compilation, options){
    const deps = [];
    compilation.getDependencies().forEach( (depModule)=>{
        if( depModule.compilation !== compilation && !depModule.isDeclaratorModule && !compilation.isServerPolicy(depModule) ){
            const file = compilation.compiler.normalizeModuleFile(depModule);
            if( !deps.includes(file) ){
                deps.push(`'${file}'`);
            }
        }
    });
    const hotCallback =`function(dependencyId){
        if( document ){   
            var moduleClass = __webpack_require__(dependencyId);    
            var event = document.createEvent('Event');
            event.initEvent('DEVELOPMENT_HOT_UPDATE', true, true);
            event.moduleClass = moduleClass.default || moduleClass;
            event.data = module.hot.data;
            document.dispatchEvent(event);
        }
    }`;
    const params = [];
    params.push(`[${deps.join(',')}]`);
    params.push(hotCallback);
    return `if(module.hot){
            module.hot.accept(${params.join(',')});
            module.hot.dispose(data=>{
                if(document){
                    var moduleClass = __webpack_require__(module.id);
                    var event = document.createEvent('Event');
                    event.initEvent('DEVELOPMENT_HOT_DISPOSE', true, true);
                    event.moduleClass = moduleClass.default || moduleClass;
                    document.dispatchEvent(event);
                    data.data = event.data;
                }
            });
        }`;
}

function recursion(compilation, callback){
    callback( compilation );
    compilation.getDependencies().forEach( (depModule)=>{
        if( depModule.compilation !== compilation ){
            recursion(depModule.compilation, callback);
        }
    });
}


function progress(file, options, callback, context ){
    progress.processing = true;
    compiler.build(file,[options.client.builder, options.client.options], (error,compilation,clientBuilder)=>{
        const errors = errorHandle(this, compilation);
        if( error ){
            errors.push( error.toString() );
        }
        if( errors && errors.length > 0 ){
            callback( new Error( errors.join("\r\n") ) );
            next( context );
        }else{
           
            const done =( error )=>{
                if( error ){
                    callback( error );
                }else{
                    const resourceFile = compiler.normalizePath(this.resource);
                    var content = clientBuilder.getGeneratedCodeByFile(resourceFile);
                    if( content ){
                        const query = this.resourceQuery;
                        const isStyle = query && query.includes('type=style');
                        if( this.mode ==="development" && options.hot && !compilation.isDescriptionType && !isStyle ){
                            content = `/*${Math.random()}*/\r\n${content}\r\n${getHotContent(compilation, options)}`;
                        }
                        callback(null, content, clientBuilder.getGeneratedSourceMapByFile(resourceFile) );
                    }else{
                        callback( new Error(`'${resourceFile}' is not exists.` ) );
                    }
                }
                next(context);
            }
            if(options.server && options.server.builder){
                const task = [];
                const serverCompilations = compilation.getServerCompilations();
                const dependency=depCompilation=>{
                    watcher.add( depCompilation.file )
                }
                serverBuilder = getBuilder(options.server);
                serverCompilations.forEach( compilation=>{
                    if( !compilation.isValid() ){
                        compilation.clear();
                    }
                    const errors = errorHandle(context,compilation);
                    if( errors.length < 1 ){
                        if( !compilation.completed(serverBuilder.name) ){
                            task.push( new Promise((resolve) => {
                                try{
                                    compilation.build(serverBuilder,(error)=>{
                                        if( !error && options.server.options && options.server.options.watch ){
                                            recursion(compilation, dependency);
                                        }
                                        resolve(error);
                                    },true);
                                }catch(e){
                                    resolve( e );
                                }
                            }));
                        }
                    }else{
                        task.push( new Promise((resolve) => {
                            resolve( new Error( errors.join("\r\n") ) );
                        }));
                    }
                });
                Promise.all(task).then( (items)=>{
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
    const options = loaderUtils.getOptions(this);
    const file = this.resourcePath;
    taskQueues.push( [file, options, callback, this] );
    next(this);
}

Loader.pitch = function(remainingRequest){};

Loader.watcher = watcher;

module.exports=Loader;