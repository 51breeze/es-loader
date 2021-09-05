const Compiler = require("easescript/lib/core/Compiler");
const loaderUtils = require('loader-utils');
const {FSWatcher} = require('chokidar');
const path = require('path');
//const lessLoader = require('less-loader');

const taskQueues = [];
const compiler = new Compiler();
const builder = require('es-javascript');
const Constant = require("es-javascript/core/Constant");
builder.config({
    "build":Constant.BUILD_ORIGIN_FILE,
    "module":Constant.BUILD_REFS_MODULE_COMMONJS,
    "output":{
        "mode":Constant.BUILD_OUTPUT_MEMORY_FILE,
    }
});

const watcher = new FSWatcher({persistent: true});
watcher.on('change',(file)=>{
    const compilation = compiler.getCompilation(file);
    if(compilation){
        compilation.clear();
    }
});

function progress(file, options, callback, context ){
    progress.processing = true;
    compiler.make(file, builder, (errors)=>{
        if( errors && errors.length > 0 ){
            errors = errors.map( item=>item.error && item.error.toString() )
            callback( new ReferenceError( errors.join("\r\n") ) ); 
        }else{
            const filesystem  = compiler.getOutputFileSystem( builder.name );
            const compilation = compiler.getCompilation(file);
            const serverModules = compilation.getModulesByPolicy(2);
            const done =()=>{
                var content = filesystem.readFileSync(file);
                if( content ){
                    if( options.hot ){
                        const system = compilation.getGlobalTypeById("System");
                        const deps = [];
                        compilation.modules.forEach( (module)=>{
                            deps.push(`'${module.getName()}'`);
                        })
                        //content+=`\nif(module.hot){\nmodule.hot.accept();\nvar System = require('${system.file.replace(/\\/g,'/')}');\nSystem.dispatchEvent('DEVELOPMENT_HOT_UPDATE', [${deps.join(',')}]);\n}`;
                    }
                    callback(null, content);
                }else{
                    callback( new ReferenceError("No content by "+file ) ); 
                }
                progress.processing = false;
                if( taskQueues.length > 0 ){
                    progress.apply(context, taskQueues.shift() );
                }
            }

            if( options.server ){
                const buildServer = (error)=>{
                    if( error ){
                        callback( error ); 
                    }else if( serverModules.length > 0 ){
                        const moduleClass = serverModules.shift();
                        try{
                            const serverBuilder = options.server.builder;
                            serverBuilder.start(moduleClass.compilation, buildServer, Object.assign({build:Constant.BUILD_ALL_FILE},options.server.options));
                        }catch(e){
                            buildServer(e);
                        }
                    }else{
                        done();
                    }
                }
                serverModules.forEach( depModule=>{
                    this.dependency( depModule.file );
                    watcher.add( depModule.file );
                });
                buildServer();
            }else{
                done();
            }
        }
    },true);
}

function Loader(content, map, meta){
    const callback = this.async();
    try{
        const options =  loaderUtils.getOptions(this);
        const file = this.resourcePath;
        taskQueues.push( [file, options, callback, this] );
        if( !progress.processing ){
            progress.apply(this, taskQueues.shift() );
        }
    }catch(e){
        callback( e );
    }
}

Loader.pitch = function(remainingRequest, precedingRequest, data){

};

module.exports=Loader;