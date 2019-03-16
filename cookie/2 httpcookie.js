// let express = require('express');
// let app = express();
// app.listen(3000, () => console.log(`Server at 3000`));

let
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    queryString = require('querystring');


http.createServer((req, res) => {
    let
        {pathname, query} = url.parse(req.url, true);

    if (pathname == '/write') {
        let
            ts = new Date(Date.now() + 20 * 1000).toGMTString();
        console.log(ts);
        res.setHeader('set-Cookie', 'name=zfpx;Expires=' + ts);
        res.end('over')
    } else if (pathname == '/read') {
        console.log(req.headers['cookie']);
        let
            cookie = req.headers.cookie,
            cookieObj = queryString.parse(cookie);
        console.log(cookieObj);

        res.end('read');
    }


    if (pathname == '/buy1') {
        let ts = new Date(Date.now() + 20 * 1000).toGMTString();
        res.setHeader('set-Cookie', ['name' + Math.random() + '=phone' + Math.random() + ";Path=/buy1",'name' + Math.random() + '=phone' + Math.random() + ";Path=/buy11"] );
        let cookie=req.headers.cookie;
        console.log(cookie);
        res.end(cookie)
    } else if (pathname == '/cart') {
        let cookie = req.headers.cookie;
        res.end(cookie);
    }else if (pathname == '/buy2') {
        res.setHeader('set-Cookie', 'name' + Math.random() + '=phone' + Math.random() + ";Path=/buy1" );
        let cookie = req.headers.cookie;
        console.log(cookie,'---@');
        res.end(cookie);
    }


}).listen(3000, () => console.log(3000));
