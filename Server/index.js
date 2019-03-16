let
    express=require('express'),
    app=express(),
    session=require('express-session'),
    bodyParser=require('body-parser'),
    ejs=require('ejs'),
    user=require('./routes/user');
    port=3000;
    require('./mongoose/index');
app.listen(port,()=>{console.log(`Server at ${port}`)});
app.use("*",(req,res,next)=>{
    res.header('Access-Control-Allow-Origin',req.get('origin'));
    res.header('Access-Control-Allow-Credentials','true');
    res.header('Access-Control-Allow-Headers','Accept,AuthToken,Authorization,Content-Type,If-None-Match,cross-origin');
    res.header('Content-Type','application/json;charset=utf-8');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    resave:true,
    saveUninitialized:false,
    secret:'kingcwt',
    cookie:{
        maxAge:1000*60*3
    }
}));
app.use('/user',user);



app.get('*',(req,res)=>{
    res.end('404');
});


