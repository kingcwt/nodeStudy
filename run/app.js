let express=require('express'),
    app=express(),
    session=require('express-session'),
    bodyParser=require('body-parser'),
    ejs=require('ejs');
app.listen(3000,()=>console.log(`server at 3000`));

app.set('views',__dirname);
app.set('views engine','html');
app.engine('html',ejs.__express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(session({
    resave:true,
    saveUninitialized:false,
    secret:'ojbk',
    cookie:{
        maxAge:1000*60*3
    }
}));

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});

app.post('/login',(req,res)=>{

    if(req.body.username==='admin'&&req.body.pwd==='admin123'){
        req.session.userName=req.body.username;
        res.redirect('/');
    }else{
        res.json({code:0,msg:'账号或密码错误'})
    }
});

app.get('/',(req,res)=>{
    if(req.session.userName){
        res.render('home.html',{username:req.session.userName})
    }else{
        res.redirect('/login')
    }
});

app.get('/loginout',(req,res)=>{
    console.log(req.session,'xx');
    req.session.userName=null;
    res.redirect('/login')
});






