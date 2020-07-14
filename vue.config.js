const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    // 基本路径
    publicPath: "/",
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // webpack配置
    chainWebpack: config => {
        
     },
    configureWebpack: config => { 
        config.plugins.push(
            new CompressionWebpackPlugin({
                test: /\.js$|\.html$|\.css$/,
                threshold: 4096
            })
        )
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        contentBase:'./',
        https:false,
        proxy:{
            "/api":{
                target:'https://api.sssyao.cn',
                changeOrigin:true,
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {
        "presets": ["@vue/babel-preset-jsx"],
        "UglifyJSPlugin":["@uglifyjs-webpack-plugin"]
    }
}