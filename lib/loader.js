const Compiler = require("easescript/lib/core/Compiler");
const loaderUtils = require('loader-utils');
//const lessLoader = require('less-loader');

const taskQueues = [];
const hotUpdated = {};
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

var watching = false;
function progress(file, options, callback, context ){
    progress.processing = true;
    compiler.make(file, builder, (errors)=>{
        if( errors && errors.length > 0 ){
            callback( new ReferenceError( errors[0].toString() ) ); 
        }else{
            const filesystem  = compiler.getOutputFileSystem( builder.name );
            const content = filesystem.readFileSync(file);
            if( content ){
                callback(null, content);
            }else{
                callback( new ReferenceError("Not found "+file ) ); 
            }
            progress.processing = false;
            if( taskQueues.length > 0 ){
                progress.apply(context, taskQueues.shift() );
            }
        }
    });
}

function Loader(content, map, meta){
    const callback = this.async();
    try{
        const options =  loaderUtils.getOptions(this);
        const file = this.resourcePath;
        if( watching === false && options.watch ){
            watching = true;
            this._compiler.hooks.invalid.tap('es-loader',(filename,time)=>{
                hotUpdated[filename] = true;
                const compilation = compiler.getCompilation(filename);
                if( compilation && compilation.mtime < time){
                    compiler.removeCompilation(filename);
                }
            });
        }
        taskQueues.push( [file, options, callback, this] );
        if( !progress.processing ){
            progress.apply(this, taskQueues.shift() );
        }
    }catch(e){
        callback( e );
    }
}

Loader.pitch = function(remainingRequest, precedingRequest, data){};
module.exports=Loader;