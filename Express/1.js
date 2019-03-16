let http = require('http');
let url = require('url');
//当访问 /sigin 返回登录    /signup 返回注册  /返回404
http.createServer(function (req, res) {
    //根据不同的路径返回不同的内容
    let {pathname, query} = url.parse(req.url, true);
    if (pathname === '/sigin') {
        res.setHeader('Content-type','application/json;charset=utf8');

        res.end('登录');
         return;
    }
    if (pathname === '/signup') {
        res.setHeader('Content-type','application/json;charset=utf8');
        return res.end('注册')
    }
    res.end('404');

}).listen(3000);