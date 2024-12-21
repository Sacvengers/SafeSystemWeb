const webpack = require('webpack');
module.exports = {
    chainWebpack: (config) => {
        config.module.rules.delete('svg')
    },
    configureWebpack: {
        resolve: {
            fallback: {
                "https": require.resolve("https-browserify"),
                "http": require.resolve("stream-http"),
                "zlib": require.resolve("browserify-zlib"),
                "path": require.resolve("path-browserify"),
                "os": require.resolve("os-browserify/browser"),
                "crypto": require.resolve("crypto-browserify"),
                "net": false,
                "tls": false,
                "fs": false,
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
                process: 'process/browser',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: "vue-svg-loader"
                }
            ]
        }
    },
    // 配置跨域
    devServer: {
        port: 8081,
        proxy: {
            "/api": {
                target: "http://51.20.84.146:8100",//需代理的后端接口
                secure: false,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/",//重写匹配的字段。把/api 转为 /
                }
            }
        },
    }
}


