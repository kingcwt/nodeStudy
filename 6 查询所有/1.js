//server-mime
<<<<<<< HEAD
let url = require('url');
let path = require('path');
let fs = require('fs');
let http = require('http');
let mime = require('mime');
let port = 3000;
let users = [{username: 'zfpx', password: '我', id: 1}, {username: 'zfp2x', password: 'admin2', id: 2},];
http.createServer((req, res) => {
    let {pathname, query} = url.parse(req.url, true);
    let id = query.id;
    if (pathname === '/user') {
        switch (req.method) {
            case 'GET':
                if (!id) { //查询所有
                    res.setHeader('Content-type', 'application/json;charset=utf-8');
                    res.end(JSON.stringify(users));
                }
                break;
            case 'POST':
                //添加逻辑
                let str = '';
                req.on('data', function (chunk) {
                    str += chunk;  //拼接后的结果是一个字符串
                });
                req.on('end', function () {
                    let user = JSON.parse(str);  //将字符串转换成对象  但是少一个ID
                    user.id = users.length ? users[users.length - 1].id + 1 : 1;  //如果有数据 取最后一项加1 否则默认1
                    users.push(user);
                    res.end(JSON.stringify(user));
                });
                break;
            case 'DELETE':
                if (id) {
                    users = users.filter(item => item.id != id);
                    res.end(JSON.stringify({}));
                }
                break;
            case 'PUT':
                break;
        }
        return;
    }

    fs.stat('.' + pathname, function (err, status) {

        if (err) {
            res.statusCode = 404;
            res.end(`${pathname} not found`);
        } else if (status.isFile()) {
            //是文件的情况
            let extName = pathname.match(/\.\w+$/)[0];
            // res.setHeader('Content-type',mime[extName]+';charset=utf8');
            res.setHeader('Content-type', mime.getType(pathname) + ';charset=utf8');
            fs.createReadStream('.' + pathname).pipe(res);
        } else if (status.isDirectory()) {
            //是文件夹的话 默认查找index.html
            console.log(pathname);
            res.setHeader('Content-type', mime.getType(pathname) + ';charset=utf8');
            let p = path.join('.' + pathname, './index.html');
=======
let url=require('url');
let path=require('path');
let fs=require('fs');
let http=require('http');
let mime=require('mime');
let port=3000;
let  users=[{username:'zfpx',password:'我',id:1},{username:'zfp2x',password:'admin2',id:2},];
http.createServer((req,res)=>{
    let {pathname,query}=url.parse(req.url,true);
    let id=query.id;
         if(pathname==='/user'){
             switch (req.method) {
                 case 'GET':
                     if(!id){ //查询所有
                         res.setHeader('Content-type','application/json;charset=utf-8');
                         res.end(JSON.stringify(users));
                     }
                     break;
                 case 'POST':
                     //添加逻辑
                     let str='';
                     req.on('data',function (chunk) {
                        str+=chunk;  //拼接后的结果是一个字符串
                     });
                     req.on('end',function () {
                         let user=JSON.parse(str);  //将字符串转换成对象  但是少一个ID
                         user.id=users.length?users[users.length-1].id+1:1;  //如果有数据 取最后一项加1 否则默认1
                         users.push(user);
                         res.end(JSON.stringify(user));
                     });
                     break;
                 case 'DELETE':
                     break;
                 case 'PUT':
                     break;
             }
             return;
         }

    fs.stat('.'+pathname,function (err,status) {

        if(err){
            res.statusCode=404;
            res.end(`${pathname} not found`);
        }else if(status.isFile()){
            //是文件的情况
            let extName=pathname.match(/\.\w+$/)[0];
            // res.setHeader('Content-type',mime[extName]+';charset=utf8');
            res.setHeader('Content-type',mime.getType(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else if(status.isDirectory()){
            //是文件夹的话 默认查找index.html
            console.log(pathname);
            res.setHeader('Content-type',mime.getType(pathname)+';charset=utf8');
            let p=path.join('.'+pathname,'./index.html');
>>>>>>> 8cf55aac3f43c9739a4fe7196e4e5f3d34daba3b
            //评出来的要读取的内容
            fs.createReadStream(p).pipe(res);
        }
    })
<<<<<<< HEAD
}).listen(port, () => {
    console.log(`Server at :${port}`)
});
=======
}).listen(port,()=>{console.log(`Server at :${port}`)});
>>>>>>> 8cf55aac3f43c9739a4fe7196e4e5f3d34daba3b
