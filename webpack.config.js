const { join, resolve } = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var webpackDevServer = require('webpack-dev-server');

const baseConfig = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : false,
  watch: process.env.NODE_ENV !== 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(le|c)ss$/,
        use: [ 'style-loader', 'css-loader', 'less-loader']
      },
      // 图片资源
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: 'images/[name]-[hash:8].[ext]'
          }
        }
      },
      // 字体资源等
      {
        test: /\.(ttf|woff|woff|eot|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: 'font/[name]-[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
}

const port = 8888
const host = '0.0.0.0'

const devServerOptions = {
  inline: true,
  disableHostCheck: true,
  hot: true,
  // open: true ,
  // @NOTE 开启HMR 必须在配置中指定host
  // 否则会报错
  host: '0.0.0.0',
  stats: {
    colors: true
  },
};

webpackDevServer.addDevServerEntrypoints(baseConfig, devServerOptions);
const compiler = webpack(baseConfig);
const server = new webpackDevServer(compiler, devServerOptions);
// @UPDATED listen前两个参数 port host必须传
server.listen(port, host, () => {
  console.log(`Project is running at http://${host}:${port}/`);
});