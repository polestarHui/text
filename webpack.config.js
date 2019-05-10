// 由于webpack是基于node进行侯建的，所有webpack的配置文件中，任何合法的node代码都是支持的
const path = require('path')

// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件,需要在导出的对象中,挂载一个plugins 节点
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 当以命令形式运行webpack或者webpack-dev-server的时候，工具会发现，我们并没有 要打包的文件的入口和出口文件，此时，他会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象，进行打包构建
module.exports = {
    entry: path.join(__dirname, './src/main.js'), //入口文件
    output: { //指定输出文件
        path: path.join(__dirname, './dist'), //输出路径
        filename: 'bundle.js' //指定输出文件的名称
    },
    plugins: [ //所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件的路径
            filename: 'index.html' //设置生成的内存页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: { //配置所有第三方loader模块的
        rules: [ //第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //处理css文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //处理less文件的loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, //处理scss文件的loader
            { test: /\.jpg|png|gif|bmp|jpeg$/, use: 'url-loader?limit=11783&name=[hash:8]-[name].[ext]' }, //处理图片路径的loader
            // limit给定的值是图片的大小，单位是byte，如果我们引用的图片，大于或等于给定的limit值，则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64的字符串
            { test: /\.ttf|eot|svg|woff|woff2$/, use: 'url-loader' }, //处理字体文件的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, //配置babel来转换高级的ES语法
            {test:/\.vue$/,use:'vue-loader'},//处理 .vue 文件的loader
        ]
    },
    resolve:{
        alias:{//修改vue被导入时候报的路径
            "vue$":"vue/dist/vue.js"
        }
    }
}