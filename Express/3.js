let express=require('express');
let app=express();
app.listen(3000,()=>console.log('server at 3000'));
app.get('/sigin',(req,res)=>{
    res.setHeader('Content-type', 'application/json;charset=utf-8');
    res.end('xx')
});
app.post('/sinup',(req,res)=>{
    res.setHeader('Content-type', 'application/json;charset=utf-8');
    res.end('post')
});
app.get('*',(req,res)=>{
   res.end('404');
});