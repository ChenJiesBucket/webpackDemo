module.exports={
    entry:{
        app:'./app.js' //注意使用相对路径
    },
    output:{
        filename:'[name].[hash:5].js'
    }
}
//直接运行webpack即可  
//或者webpack --config webpack.conf.js (自定义配置文件)