let express = require('express');
let app = express();
app.listen(3000, () => console.log('server at 3000'));
//判断请求一个路由的时间有多长
app.use( (req, res, next) =>{
    let t = new Date().getTime();
    let end = res.end;
    res.end= (...arg) =>{
        console.log(new Date().getTime()-t);
        end.call(res,...arg);
    };
    next();
});
app.get('/water', (req, res) => {
    for(var i=0;i<100000;i++){
    }
    res.end('water')

});
app.get('/food', (req, res) => {
    for(var i=0;i<1000000;i++){
    }
    res.end('water');
});