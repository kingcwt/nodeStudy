let express=require('express');
let app=express();
let session=require('express-session');
app.listen(3000,()=>console.log(`Server at 3000`));
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'cwtzs'
}));


app.get('/',(req,res)=>{

    let sessionID=req.session.name;
    if(sessionID){
        res.send('老朋友')
    }else{
        req.session.name='true';
        res.send('新朋友')
    }


});
