
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const webpackbar = require("webpackbar");
const webpackDevServer = require('webpack-dev-server');
const htmlWebpackPlugin = require('html-webpack-plugin');
const workspace = path.resolve( "./test/src" )
const build = path.resolve( "./test/build" )
const loader = require.resolve("../lib/loader")
const host = "localhost";
const port = 8083;
const buildSyntax=[
  {
    name:'es-php',
    options:{
      output:build,
      workspace
    }
  },
  {
    name:'es-javascript',
    options:{
      module:2,
      importPath:1,
      output:build,
      workspace
    }
  }
].map( item=>{
   const builder = require(item.name);
   builder.config(item.options);
   return builder;
});

const config = {
  mode:"development",
  devtool:"(none)",
  target:"web",
  entry:"Index.es",
  output: {
    path:path.resolve( build ),
    filename:`./[name].js`,
    chunkFilename:`./[name].js`,
    publicPath:"/",
  },
  resolve:{
    extensions:[".js", ".json",".css",".less",'.es'],
    modules:[
      workspace,
      path.resolve('./node_modules')
    ]
  },
  devServer: {
    contentBase:path.resolve( build ),
    hot:true,
    host:host,
    port:port,
    open:false,
    noInfo:true,
  },
  watch:false,
  watchOptions:{
      ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /(\.es)$/,
        use: [
          {
            loader:loader,
            options:{
                mode:"development",
                hot:true,
                client:{
                  builder:buildSyntax[1],
                },
                server:{
                  builder:buildSyntax[0],
                },
            },
          }
        ]
      },
    ]
  },
  plugins: [
      new htmlWebpackPlugin({
        "template": path.join(workspace,"./index.html"),
      }),
      new webpackbar()
  ],
  optimization:{
    removeEmptyChunks:true,
    usedExports:true,
    moduleIds: 'natural',
  }
};

webpackDevServer.addDevServerEntrypoints(config, config.devServer);
const compiler = webpack( config );
const server = new webpackDevServer(compiler, config.devServer);
server.listen(port,host);