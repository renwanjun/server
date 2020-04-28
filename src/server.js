var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); 
var logger = require('morgan');

// 自定义校验API
var validate=require('./middleware/validate')

// 路由映射
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var entries = require('./routes/entries');

var app = express();


// view engine setup 模版引擎 模版文件夹位置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 设置程序输出json格式更易读
app.set('json spaces', 2)

// 日志
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 开启扩展的消息体解析器
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 静态文件路径 js css image

// app.use('/', entries.list);
// 指定程序路由
// app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/',entries.list)
app.get('/post', entries.form);
app.post('/post', validate.required('entry[title]'),validate.lengthAbove('entry[title]',4),entries.submit)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler 错误处理中间件函数有四个参数：err,req,res,next
// 当express遇到错误会自动切换只去调用错误处理中间件
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
