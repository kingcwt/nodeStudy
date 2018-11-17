// let express = require('express');
// let app = express();
// app.listen(3000, () => console.log(`Server at 3000`));

let
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    queryString = require('querystring'),
    SESSION_KEY = SESSION_KEY,
    sessions = {};


http.createServer((req, res) => {
    let
        {pathname, query} = url.parse(req.url, true);

    if (pathname == '/') {
        let
            sessionId = req.headers[SESSION_KEY.toLocaleLowerCase()];
        if (sessionId) {
            let sessionObj=sessions[sessionId];
            sessionObj.balance=sessionObj.balance-10;

        } else {
            let
                sid = Date().now() + '' + Math.random(),
                sessionObj = {balance: 100};
            sessions[sid] = sessionObj;
            res.setHeader('set-Cookie',SESSION_KEY+'='+sid);
            res.end('卡上余额' + sessionObj.balance)
        }


    } else if (pathname == '/read') {

        res.end('read');
    }


}).listen(3000, () => console.log(3000));
