const user = require('../services');
let express = require('express');
let router = express.Router();
let USE = require('../mongoose/mongo');


router.get('/login', (req, res, next) => {
    let eleObj = JSON.parse(user.Decrypt(req.headers.authtoken));
    let a = USE.Users.findOne({username: eleObj.username}, (err, data) => {
        if (err) throw err;
        else {
            console.log(data, '------');
            if (data == null) {
                res.json({code: 0, msg: '用户不存在'});
            } else {
                let pwd = data.password;
                console.log(eleObj);
                console.log(eleObj.pwd,'@@@@@@@');
                eleObj.pwd === pwd ? res.json({code: 1, msg: '登陆成功'}) : res.json({code: 0, msg: '用户信息不正确'})
            }
        }
    });

});

module.exports = router;