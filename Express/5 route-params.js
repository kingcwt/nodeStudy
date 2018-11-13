let express=require('express');
let app=express();
app.listen(3000,()=>console.log('server at 3000'));
app.get('/user',(req,res)=>{
    res.end('select all')
});
app.get('/user/:id/:name',(req,res)=>{
    // console.log(req.params);
    /* /user/1/cwt => {id:1,name:cwt} =params
    * */
    res.end('select one'+req.params.id+req.params.name);
    let url='/user/1/3';
    let url2='/user/:id/:name';
    let arr=[];
    let newReg=url2.replace(/:[^\/]+/g,function () {
        arr.push(arguments[0].slice(1));
        return '([^\/]+)'
    });
    console.log(arr);
    let reg=new RegExp(newReg);
    let newArr=reg.exec(url);
    // console.log(reg.exec(url));
    let result={};
    arr.forEach((item,index)=>{
        result[item]=newArr[index+1];
    });
    console.log(result,'cwt');
});