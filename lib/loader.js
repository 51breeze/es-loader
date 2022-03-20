//const Compiler = require("easescript/lib/core/Compiler");
const Compiler = require("../../easescript2/lib/core/Compiler");
const loaderUtils = require('loader-utils');
const {FSWatcher} = require('chokidar');

const taskQueues = [];
const compiler = new Compiler({diagnose:true,debug:true,autoLoadDescribeFile:true});

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

const instances=new Map();
function getBuilder(target){
    if( !instances.has(target.builder) ){
        const instance = new target.builder(compiler);
        if( target.options ){
            instance.config( target.options );
            if( target.options.workspace ){
                compiler.workspace = target.options.workspace;
            }
        }
        instances.set(target.builder, instance);
    }
    return instances.get(target.builder);
}


function progress(file, options, callback, context ){
    progress.processing = true;
    const clientBuilder = getBuilder(options.client);
    compiler.build(file, clientBuilder, (error,compilation)=>{
        const errors = errorHandle(this, compilation);
        if( error ){
            errors.push( error.error.toString() );
        }
        if( errors && errors.length > 0 ){
            callback( new Error( errors.join("\r\n") ) );
            next( context );
        }else{
            const filesystem  = compiler.getOutputFileSystem( clientBuilder.name );
            const done =( error )=>{
                if( error ){
                    callback( error );
                }else{
                    const resourceFile = compilation.compiler.normalizePath(this.resource)
                    if( filesystem.existsSync( resourceFile ) ){
                        const query = this.resourceQuery;
                        const content = filesystem.readFileSync( resourceFile );
                        if( this.mode ==="development" && options.hot && !compilation.isDescriptionType && !(query && query.includes('type=style'))){
                            callback(null, `/*${Math.random()}*/\r\n${content}\r\n${getHotContent(compilation, options)}`);
                        }else{
                            callback(null, content);
                        }
                    }else{
                        callback( new Error(`'${resourceFile}' is not exists.` ) );
                    }
                }
                next(context);
            }
            if(options.server && options.server.builder){
                const task = [];
                const serverCompilations = compilation.getServerCompilations();
                const serverBuilder = getBuilder(options.server);
                const dependency=depCompilation=>{
                    this.dependency( depCompilation.file );
                }
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
                                        if( !error && this.mode ==="development" ){
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