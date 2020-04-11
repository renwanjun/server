/**
 * 消息条目模型
 * 保存在线留言板消息条目
 */
const redis=require('redis')
const db=redis.createClient()

class Entry{
    constructor(obj){
        Object.assign(this,obj)
    }
    save(cb){
        const entryJSON=JSON.stringify(this); // 将保存的信息转换成JSON字符串
        db.lpush('entries',entryJSON,(err)=>{ // 将JSON字符串保存到Redis列表中
            if(err)return cb(err)
            cb()
        })
    }
    static getRange(from,to,cb){
        db.lrange('entries',from,to,(err,items)=>{
            if(err) return cb(err)
            let entries=[]
            items.forEach(item=>{
                entries.push(JSON.parse(item))
            });
            cb(null,entries)
        })
    }
}
module.exports=Entry