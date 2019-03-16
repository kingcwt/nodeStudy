// let express=require('express');
// let app=express();
// app.listen(3000,()=>console.log('server at 3000'));

//每次调用USE 方法 都会存到数组中   实现中间件原理 use
function app() {

}
app.middware=[];
app.use=function (cb) {
    this.middware.push(cb)
};
app.use(function (req,res,next) {
    console.log(1);
    next();
});
app.use(function (req,res,next) {
    console.log(2);
    next();
});
app.use(function (req,res,next) {
    console.log(3);
});
let index=0;
function next(){
    app.middware[index++](null,null,next);
}
next();

