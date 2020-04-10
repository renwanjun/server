function setup(format){
    const regexp=/:(\w+)/g
    return function createLogger(req,res,next){
        const str=format.replace(regexp,(match,property)=>{
            return req[property]
        })
    }
    console.log(str);
    next(); // 将控制权交给下一个中间组件
}
module.exports=setup