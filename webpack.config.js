const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode: 'development',
    plugins:[
        new HtmlWebpackPlugin({
  
            template: './src/index.html'
  
          }),
        new VueLoaderPlugin()
  
    ],
    module:{
        rules:[
            {test: /.css$/,use: ['style-loader', 'css-loader']},
            // use: [
	        //   { loader: 'style-loader' },
	        //   {
	        //     loader: 'css-loader',
	        //     options: {
	        //       modules: true
	        //     }
            {test: /.less$/,use: ['style-loader', 'css-loader', 'less-loader']},
            { test: /.(png|jpg|gif|bmp|jpeg)$/,use: [{ loader: 'url-loader',options: {limit: 81920 // 字节 Byte 如果在8192个字节(8KB)内  就使用base64编码
            }}]},
            {test: /.(eot|svg|ttf|woff|woff2)$/,use: [{loader: 'url-loader'}]},
            //字体图标
            { test: /.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader

        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}