let express=require('express');
let app=express();
app.listen(3000,()=>console.log('server at 3000'));
//app.param()   //拦截功能

app.param('id',(req,res,next)=>{
    req.params.id=`你的学号是${req.params.id}`;
    next();//调用next就可以向下匹配 如果在这里
});
app.param('name',(req,res,next)=>{
    req.params.name=`你的名字是${req.params.name}`;
    next();//调用next就可以向下匹配 如果在这里
});
app.get('/user/:id/:name',(req,res)=>{
    res.header('Content-type','text/plain;utf8');
    res.end(`${req.params.id}${req.params.name}`)
});
