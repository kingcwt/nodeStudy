let express = require('express');

let router = express.Router();

let path=require('path');
var multer = require('multer');
var upload = multer()
router.get('/login', (req, res, next) => {
    res.send('登陆')
});

router.get('/reg', (req, res, next) => {

    // res.sendFile(path.resolve('./views/reg.html'));  //运行文件 文件 route 以route 为路径
    // res.sendFile(path.join(__dirname+'./views/reg.html'));
});

router.post('/reg',upload.array(),(req,res,next)=>{
    req.accepts('text/html');
    // console.log(req.headers['content-type']);
    console.log(req.body);
    return;
    res.render('log.html',{...req.body,arr:[1,2,3,4,5],html:'<h2>run free</h2>'});
    // res.send(req.body);
});

module.exports=router;


/*
*   let str='';
   req.on('data',chunk=>{
       str+=chunk;
   });
    req.on('end',()=>{
        // require('querystring').parse(str);       _EXPRESS
        console.log(str);
        let obj={};
        str.replace(/([^&=]+)=([^&=]+)/g,function () {
            obj[arguments[_EXPRESS]]=arguments[2]
        });
        console.log(obj);
    })
*
*
*
*
*
* */

// console.log(path.resolve('./views/reg.html'));
