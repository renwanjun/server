const express=require('express')
const bodyParser=require('body-parser') // 解析请求各种形式的内容
const read=require('node-readability')

const app=express()

const Article=require('./db').Article // 加载数据库模块

const articles=[{title:'Example'}]

const url='http://ww.manning.com/cantelon2/'
read(url,(err,result)=>{
    Article.create({
        title:result.title,content:result.content
    },(err,article)=>{

    })
})

const port=process.env.port || 3000
app.set('port',port)
app.set('vies')
// app.use加载项目所需的中间件
app.use(bodyParser.json()) // 支持编码为json的请求消息体
app.use(bodyParser.urlencoded({extended:true})) // 支持编码为表单的请求消息体
app.use('/css/bootstrap.css',express.static('node_moudles/bootstrap/dist/css/bootstrap.css')) // 要加载bootstrap的css，使用express.static将文件注册到恰当的URL上

// 获取所有文章
app.get('/articles',(req,res,next)=>{
    Article.all((err,articles)=>{
        if(err)return next(err)
        
        res.format({
            html:()=>{
                res.render('articles.ejs',{
                    articles:articles
                })
            },
            json:()=>{
                res.send(articles)
            }
        })

        // res.send(articles)
    })
    // res.send('OK')
})
app.get('/articles/:id',(req,res,next)=>{
    const id=req.params.id
    Article.get(id,(err,article)=>{
        if(err)return next(err)
        res.send(article)
    })
})
// 新建一篇文章
app.post('/articles',(req,res,next)=>{
    const url=req.body.url
    read(url,(err,result)=>{
        if(err||!result)res.status(500).send('Error downloading article')
        Article.create({
            title:result.title,content:result.content
        },(err,article)=>{
            if(err)return next(err)
            // res.send(JSON.stringfy(result))
        })
    })
    // const id=req.params.id
    // const article={
    //     title:req.body.title
    // }
    // articles.push(article)
    // res.send(article)
})
// 删除一篇文章
app.delete('/articles/:id',(req,res,next)=>{
    const id=req.params.id
    Article.delete(id,(err)=>{
        if(err)return next(err)
        res.send({message:'Deleted'})
    })
    // delete articles[id]
    // res.send({message:'Deleted'})
})
// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })
app.listen(app.get('port'),()=>[
    console.log(`Express web app available at localhost:${port}`)
])
module.exports=app