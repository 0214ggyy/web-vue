#这是一个小项目

##运用vue,webpack,mui,mint-ui,

###webpack.config.js手动配置

#
or create a new repository on the command line
echo "# web-vue" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:0214ggyy/web-vue.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin git@github.com:0214ggyy/web-vue.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
#webpack.config.js手动配置
##webpack 打包高级语法降级为低级语法解析
##webpack-cli
##webpack-dev-server	自动打包  --port:端口 --open自动开启浏览器 --contentBase开启文件夹  --hot热点不用自动刷新更新数据
##html-webpack-plugin	html文件夹在网络磁盘中复制一个物理磁盘的html
##style-loader css-loader 
##url-loader  file-loader	webpack也无法解析图片或字体等文件
##npm i babel-loader@7 babel-core babel-preset-env babel-preset-stage-0 -D
##cnpm i vue-loader vue-template-compiler -D
###
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

#在.babelrc中进行配置
##
{
  "presets": ["env", "stage-0"]
}

## 传统命令 
    git add .       git commit -m "修改内容"   git push  