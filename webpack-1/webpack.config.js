// 默认webpack的配置文件的名字，叫webpack.config.js
// 他的配置用的是node写的，需要导出一个配置对象
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    target: 'web', // 表示打包后的文件在哪里用，默认就是浏览器用的
    mode: 'development', // 开发模式，可以看压缩前的代码.默认的是生产环境
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    }, // 从当前入口开始打包
    output: {
        filename: '[name].[hash:8].js',
        // 输出的路径必须是一个绝对路径
        path: path.resolve(__dirname, 'dist')
        // 打包后的目录
    },
    devServer: { // 关于webpack-dev-server的配置 

    },
    module : { // 匹配要处理的模块
        rules : [// loader的写法
            // ① 只用一个loader的话，直接写一个字符串
            // ② 用多个loader的话，需要写入一个数组
            // ③ 可以写入一个对象
            {
                // 要处理less less-loader css-loader style-loader
                // loader 默认从右向左，从下到上
                test: /\.less$/, 
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 要处理less less-loader css-loader style-loader
                // loader 默认从右向左，从下到上
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [// 插件的顺序，默认是从上到下执行的。但是一般情况插件是无序的
        // 学各种插件的用法， htmlWebpackPlugin
        new HtmlWebpackPlugin({
            template: './src/index.html', // 以public下面的HTML作为模板,
            minify: { 
                removeAttributeQuotes: true, // 去掉双引号
                collapseWhitespace: true // 去掉空行
            },
            hash: true // 增加哈西值
        }),
        new MiniCssExtractPlugin({

            filename: 'css/style.css'
        })
    ]
    // 在原有的webpack打包的过程中增加额外的功能插件
}