let express = require('express');
let app = express();
app.listen(3000, () => console.log(`Server at 3000`));
let fs = require('fs');
let db = './user.json';
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/users', function (req, res) {
    fs.createReadStream('./user.json').pipe(res);
});

app.get('/users/:id', function (req, res) {
    let id = req.params.id;
    let users = require('./user.json');
    let user = users.filter((item) => {
        return item.id == id;
    })[0];
    if (user) {
        res.send(user);
    } else {
        res.send({'msg': '此用户不存在'})
    }
});

app.post('/users', function (req, res) {
    res.header('Content-type', 'application/json;charset=utf8');
    // let str='';
    // req.on('data',chunk=>{
    //     str+=chunk;
    // });
    // req.on('end',()=>{
    //     console.log(str,'---');
    //     res.send(str)
    // });
    let user = req.body;
    var users = require(db);
    user.id = users[users.length - 1].id + 1;
    users.push(user);
    fs.writeFile(db,JSON.stringify(users),(err,suc)=>{
        res.send(users);
    })
});

/*put 整体覆盖*/
app.put('/users/:id', function (req, res) {
    var newUsers = req.body;
    var users = require(db);
    users.map((user) => {
        if (user.id == req.params.id) {
            return newUsers;
        } else {
            return user;
        }
    })
});

/*patch 只加不减*/
app.patch('/users:id', function (req) {
    var newUsers = req.body;
    var users = require(db);
    users.map((user) => {
        if (user.id == req.params.id) {
            for (let attr in newUsers) {
                if (newUsers.hasOwnProperty(attr)) {
                    user[attr] = newUsers[attr]
                }
            }
        } else {
            return user;
        }
    })
});

app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    var users = require(db);
    users= users.filter((item) => {
        return item.id != id;
    });
    fs.writeFile(db,JSON.stringify(users),(err,suc)=>{
        res.send({});
    })
});

