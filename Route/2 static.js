let express = require('express');
let app = express();
let fs = require('fs');
app.listen(3000, () => console.log('server at 3000'));

// function static(p) {
//     return (req, res, next) => {
//         let path = require('path').join(p, req.path);
//         fs.stat(path, (err, stats) => {
//             if (err) {
//                 return next();
//             }
//             if (stats.isFile()) {
//                 fs.createReadStream(path).pipe(res);
//             }
//
//         })
//     }
// }

// app.use(static('dist'));
app.use(express.static('public'));
// app.get('/index.html',(req,res)=>{
//     res.sendFile('./dist/index.html',{root:__dirname});
// });
// app.get('/index.css',(req,res)=>{
//     res.sendFile('./dist/index.css',{root:__dirname});
// });