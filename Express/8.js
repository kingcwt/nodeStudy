let express=require('express');
let app=express();
app.listen(3000,()=>console.log('server at 3000'));

//middleware 中间件
// _EXPRESS   中间件的功能 可以进行权限判断
// 2   可以对req,res属性的扩充
// 3    中间件要放在执行路径的上面
// 4  中间件默认情况下都匹配  可以指定匹配
app.use((req,res,next)=>{
    res.header('Content-type','text/plain;utf8');
    next();
});
app.use('/water',(req,res,next)=>{
    console.log('过滤石头');
    res.store='too big';
    next('错误？');
});
app.use('/water',(req,res,next)=>{  //中间件的功能 可以进行权限判断
    console.log('过滤沙子');
    res.sand='to small';
    next();
});
app.get('/water',(req,res)=>{
    console.log(res.store,res.sand);
    res.end('water');
});
app.get('/footer',(req,res)=>{
    console.log(res.store,res.sand);
    res.end(req.store,req.sand)
});
app.use((err,req,res,next)=>{
    console.log(err,'xxxxxxxxxxxx');
});