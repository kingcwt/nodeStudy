let express=require('express');
let app=express();
app.listen(3000,()=>console.log('server at 3000'));
app.get('/user',(req,res)=>{
    console.log(req.query.id);
    console.log(req.url);
    console.log(req.path);
    console.log(req.headers);
    console.log(req.method);
});