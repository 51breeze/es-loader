const Compiler = require("./core/Compiler");
const Constant = require("./core/Constant");
const loaderUtils = require('loader-utils');
// const lessLoader = require('less-loader');
const taskQueues = [];
const hotUpdated = {};
const compiler = new Compiler({
    "configuration":{
        "javascript":{
            "build":Constant.BUILD_ORIGIN_FILE,
            "module":Constant.BUILD_REFS_MODULE_COMMONJS,
            "output":{
                "mode":Constant.BUILD_OUTPUT_MEMORY_FILE,
            }
        }
    }
});
var watching = false;

function progress(file, options, callback, context ){
    progress.processing = true;
    compiler.build(['javascript'], file);
    const filesystem  = compiler.getFilesystem('javascript');
    const content = filesystem.read(file);
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

function Loader(content, map, meta){
    const callback = this.async();
    try{
        const options =  loaderUtils.getOptions(this);
        const file = this.resourcePath;
        if( watching === false && options.mode ==="development" ){
            watching = true;
            this._compiler.hooks.invalid.tap('es-loader',(filename,time)=>{
                hotUpdated[filename] = true;
                const module = compiler.getModule(filename);
                if( !module || module.mtime < time){
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