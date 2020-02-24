module.exports={
    mode:"development",
    // 开发环境 development
    devtool:'cheap-module-eval-source-map',
    entry:__dirname+'/index.js',//入口文件
    output:{
        path:__dirname+'/dist',//打包后的文件位置
        filename:'bundle.js'//打包后的文件
    },
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "env","react","stage-0"
                        ]
                    }}],
                exclude:/node_modules/
            }]
    }
   
}