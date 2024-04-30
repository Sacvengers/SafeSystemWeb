module.exports = {
    chainWebpack: (config) => {
        config.module.rules.delete('svg')
    },
    configureWebpack: {
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
        proxy: {
            "/api": {
                target: "http://47.120.32.75:8080",//需代理的后端接口
                secure: false,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/",//重写匹配的字段。把/api 转为 /
                }
            }
        },
    }
}
