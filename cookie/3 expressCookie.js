let
    express = require('express'),
    app = express(),
    cookieParser=require('cookie-parser');
app.listen(3000, () => console.log(`Server at 3000`));



app.use(cookieParser());
/*  多两个方法属性 */

app.get('/',(req,res)=>{
    //req.cookies 指的是用户提交过来的的cookie对象
    let
        isVisited=req.cookies.isVisisted;
    if(isVisited){
        res.send('欢迎老朋友');
    }else{
        /*key  value   */
        res.cookie('isVisisted','1',{maxAge:20*1000});
        res.send('欢迎新朋友')
    }
});

app.get('/baidu',(req,res)=>{
    let info=req.cookies.anyang;
    if(info){
        res.send('ok');
    }else{
        res.cookie('anyang','welcome',{maxAge:20*1000,path:'/baidu'});
        res.send('ye!')
    }

});