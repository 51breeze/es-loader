
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const webpackbar = require("webpackbar");
const webpackDevServer = require('webpack-dev-server');
const htmlWebpackPlugin = require('html-webpack-plugin');
const workspace = path.resolve( "./test/src" )
const build = path.resolve( "./test/build" )
const loader = require.resolve("../lib/loader")
const {VueLoaderPlugin} = require('vue-loader')
const vueLoaderConfig = require('./vueConfig/vue-loader.conf')
const utils = require('./vueConfig/utils')

const host = "localhost";
const port = 8083;
const plugins=[
  {
    builder:require('../../es-php'),
    options:{
      output:build,
      workspace
    }
  },
  {
    builder:require('../../es-javascript'),
    options:{
      module:'es',
      webComponent:'vue',
      useAbsolutePathImport:true,
      output:build,
      workspace
    }
  }
];

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  mode:"development",
  devtool:"(none)",
  target:"web",
  entry:{
    index: path.join(workspace,"vue/Index.es")
  },
  output: {
    path:path.resolve( build ),
    filename:`./[name].js`,
    chunkFilename:`./[name].js`,
    publicPath:"/",
  },
  resolve:{
    extensions:[".js",'.es','.vue', ".json",".css",".less"],
    // modules:[
    //   workspace,
    //   path.resolve('./node_modules')
    // ]
    // alias: {
    //   'vue$': 'vue/dist/vue.esm.js',
    //   '@': resolve('src'),
    // }
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
                client:plugins[1],
                //server:plugins[0],
            },
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
      new htmlWebpackPlugin({
        "template": path.join(workspace,"./index.html"),
      }),
      new webpackbar(),
  ],
  optimization:{
    removeEmptyChunks:true,
    usedExports:true,
    moduleIds: 'natural',
    splitChunks:{
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
          'vue': {
              test: /[\\/]node_modules[\\/]vue[\\/]/i,
              priority: -10
          },
          'element-ui': {
            test: /[\\/]node_modules[\\/]element-ui[\\/]/i,
            priority: -10
          },
          'es':{
            test: /\.es$/,
            priority: -5
          },
          default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
          }
      }
    }
  }
};

webpackDevServer.addDevServerEntrypoints(config, config.devServer);
const compiler = webpack( config );
const server = new webpackDevServer(compiler, config.devServer);
server.listen(port,host,()=>{
  if( config.devServer.port ){
   console.log(`running(http://${config.devServer.host}:${config.devServer.port})`)
  }else{
    console.log(`running(http://${config.devServer.host})`)
  }
})