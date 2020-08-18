const express = require('express')


const app = express()

//post解析插件
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
//设置跨域访问
app.all('*', function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");//   http://www.yueyanshaosun.cn,http://www.baidu.com,www,...
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("X-Powered-By", ' 3.2.1');
  // if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
  // else next();
  next();
});
//路由
const userRouter = require('./router/userRouter')
app.use('/user', userRouter)



app.listen(3456, () => { console.log('server start:' + 'http://127.0.0.1:3000/') })