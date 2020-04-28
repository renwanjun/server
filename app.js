const env=process.env.NODE_ENV
const port=process.env.port || 3000
console.log(env)
const app=require('./src/server')
// app.listen(port,()=>{
//     console.log('服务运行在3000端口')
// })
module.exports=app