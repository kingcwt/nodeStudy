let express = require('express');
let app = express();
app.listen(3000, () => console.log('server at 3000'));
let bodyParser=require('body-parser');

function bodyParse(){
    return function (req,res,next) {
        let str='';
        req.on('data',chunk=>{
            str+=chunk;
        });

        req.on('end',()=>{
            req.body=require('querystring').parse(str);
            next();
        })

    }

}

// app.use(bodyParse());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
/*ejs 模板引擎 html后缀渲染成ejs*/
// app.engine('html',require('ejs').__express);
// /*更改ejs默认文件夹目录名字*/
// app.set('views','status');
// //更改默认后缀名字
// app.set('view engine','html');



let user=require('./routes/user');
app.use('/user',user);
let article=require('./article/article');
app.use('/article',article);

