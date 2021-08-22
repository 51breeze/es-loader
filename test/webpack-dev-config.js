
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');
const htmlWebpackPlugin = require('html-webpack-plugin');


const {spawn} = require('child_process');
const chokidar = require('chokidar');
const workspace = path.resolve( "./test" )
const globals = path.resolve( "./lib/globals" )
const loader = require.resolve("./lib/loader")

const host = "localhost";
const port = 8083;

const config = {
  //mode:"production", //development
  mode:"development", //development
  devtool:"(none)",
  target:"web",
  entry:"./test/Test.es",
  output: {
    path:path.resolve( "./build" ),
    filename:`./[name].js`,
    chunkFilename:`./[name].js`,
    publicPath:"/",
  },
  resolve:{
    extensions:[".js", ".json",".css",".less",'.es'],
    // alias:{
    //   "@system":path.resolve(easescript_root, "javascript/system"),
    //   "@es":path.resolve(easescript_root,"es"),
    //   "@src":project_config.workspace,
    //   "@style":path.resolve(easescript_root,"style")
    // },
    modules:[
      process.cwd(),
      path.join(process.cwd(),"test"),
      //path.resolve(easescript_root, "javascript"),
      path.resolve(process.cwd(), "node_modules"),
    ]
  },
  devServer: {
    contentBase:path.resolve( "./build" ),
    hot:false,
    host:host,
    port:port,
    open:false,
    //proxy:runConfig.proxy
  },
  watch:false,
  watchOptions:{
     // ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /(\.es)$/,
        include:[
          workspace,
          globals
        ],
        use: [
          {
            loader:loader,
            options:{
                mode:"development",
            },
          }
        ]
      },
    ]
  },
  plugins: [
      new htmlWebpackPlugin({
        "template": path.join(workspace,"index.html"),
      })
  ],
  optimization:{
    removeEmptyChunks:true,
    usedExports:true,
    moduleIds: 'natural',
  }
};




//webpackDevServer.addDevServerEntrypoints(config, config.devServer);
const compiler = webpack( config );
//const server = new webpackDevServer(compiler, config.devServer);
//server.listen(port,host);




compiler.run(()=>{

});


// const rebuildSuffix = new RegExp( `\\.(es)$`,"i");  
// const done=( stats, project_config)=>{

//   if( started === false )
//   {
//       started = true;
//       server.listen( port , host, () => {

//           //运行应用服务
//           Task.runServer(server.app, project_config);

//           //在没有匹配到服务的情况下，始终输出index.html内容
//           if( !INSTALL_OPTIONS.server_render )
//           {
//               server.app.use(function(req, res, next){
//                   var content = stats.compilation.assets[ "index.html" ] ? stats.compilation.assets[ "index.html" ].source() : null;
//                   res.status( content ? 200 : 404 );
//                   res.send( content || ("Not found "+req.path) );
//               });
//           }
//           console.log(`\nDevServer listening on ${host}:${port}\n`);

//       });
//   }

//   Task.after( project_config );
//   es.outputDoneInfo( project_config );
// }

// //监听入口文件是否有变化
// const onChange = (filename)=>{

//   // if( !rebuildSuffix.test(filename)  )
//   // {
//   //     return;
//   // }

//   // const oldModules = {};
//   // bootstrap.forEach( module=> {
//   //     oldModules[module.fullclassname]=module;
//   // });

//   // const newModules = {};
//   // const modules = es.getBootstrap( project_config );
//   // modules.forEach( module=> {
//   //     newModules[module.fullclassname]=module;
//   // });

//   // const addModules = modules.filter( module=> !oldModules[ module.fullclassname ] );
//   // const delModules = bootstrap.filter( module=> !newModules[ module.fullclassname ] );

//   // if( addModules.length > 0 || delModules.length > 0 )
//   // {
//   //     bootstrapChanged = true;
//   //     bootstrap.splice.apply(bootstrap, [0, bootstrap.length].concat(modules) );
//   //     createBootstrap(project_config, bootstrap );
//   // }

// }

// // var watchConfig = chokidar.watch(app_config_file, {
// //   ignored: /(^|[\/\\])\../,
// //   persistent: true
// // });

// var watchProject = chokidar.watch(workspace, {
//   ignored: /(^|[\/\\])\../,
//   persistent: true
// });

// var bootstrapChanged = true;
// var started = false;
// var watching = false;
// watchProject.on("add",onChange);
// watchProject.on("change",onChange);
// watchProject.on("unlink",onChange);

// process.on("SIGINT", ()=>{
//     server.close( ()=>{
//         console.log(`\nDevServer disconnected on ${host}:${port}\n`);
//     });
//     watchProject.close();
//     watchConfig.close();
// });

// process.on("exit", ()=>{
//     server.close( ()=>{
//         console.log(`\nDevServer disconnected on ${host}:${port}\n`);
//     });
//     watchProject.close();
//     watchConfig.close();
// });

// compiler.hooks.done.tap("devServer", (stats)=>{

// });

