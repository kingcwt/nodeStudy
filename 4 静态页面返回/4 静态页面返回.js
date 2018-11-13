let url=require('url');
let path=require('path');
let fs=require('fs');
let http=require('http');
let port=3000;
let mime={
  '.js':'application/javascript',
  '.css':'text/css',
  '.html':'text/html'
};
http.createServer((req,res)=>{
    let {pathname,query}=url.parse(req.url,true);
    fs.stat('.'+pathname,function (err,status) {
        if(err){
            res.statusCode=404;
            res.end(`${pathname} not found`);
        }else if(status.isFile()){
            //是文件的情况
            let extName=pathname.match(/\.\w+$/)[0];
            res.setHeader('Content-type',mime[extName]+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else if(status.isDirectory()){
            //是文件夹的话 默认查找index.html

            res.setHeader('Content-type','text/html;charset=utf8');
            let p=path.join('.'+pathname,'./index.html');
            //评出来的要读取的内容
            fs.createReadStream(p).pipe(res);
        }
    })
}).listen(port,()=>{console.log(`Server at :${port}`)});