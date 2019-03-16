
//require =>缓存问题

/*
* path.resolve 得到当前模块的绝对路径
* require.resolve 指定模块的绝对路径
*
* */
let
    user =require('./user.json'),
    fs=require('fs');

fs.writeFileSync('./user.json',JSON.stringify([]));
delete require.cache[require.resolve('./user.json')];
let user1=require('./user.json');
console.log(user1);
console.log(user == user1);