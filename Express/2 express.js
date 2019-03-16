let express=require('express');
let port=8080;
let app=express();  //函数执行后 返回的是一个http的监听函数
// require('http').createServer(app).listen(8081,()=>console.log('22'));
app.listen(8080,()=>console.log(`Server at:start${port}`));