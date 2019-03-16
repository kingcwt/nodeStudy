let express = require('express'),
    app = express(),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    ejs = require('ejs');
const crypto = require('crypto');

app.listen(3000, () => console.log(`server at 3000`));
app.set('views', __dirname);
app.set('views engine', 'html');
app.engine('html', ejs.__express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: 'ojbk',
    cookie: {
        maxAge: 1000 * 60 * 3
    }
}));

app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('origin'));
    // res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', "true");
    res.header("Access-Control-Allow-Headers", "Accept, AuthToken,Authorization, Content-Type, If-None-Match,cross-origin");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/login', (req, res) => {
    let AuthToken = req.headers.authtoken;

    function aesDecrypt(encrypted, key) {
        const decipher = crypto.createDecipher('aes192', key);
        var decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }

    let pwd = JSON.parse(aesDecrypt(AuthToken, 'king')).pwd;

    res.json({code: '1', msg: sec.pwd});
    return;
    if (req.body.username === 'admin' && req.body.pwd === 'admin123') {
        req.session.userName = req.body.username;
        res.json({code: 1, msg: '登陆成功'});
    } else {
        res.json({code: 0, msg: '账号或密码错误'})
    }
});

app.get('/home', (req, res) => {
    if (req.session.userName) {
    } else {
        res.redirect('/')
    }
});
app.get('/loginout', (req, res) => {
    console.log(req.session, 'xx');
    req.session.userName = null;
    res.redirect('/login')
});






