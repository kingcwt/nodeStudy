let express = require('./express');
let app = express();
let port = 3000;
let http=require('http');
http.createServer(app.start).listen(3000,()=>console.log(`Server at : 3000`));
// app.listen(port, () => console.log(`Server at:${port}`));

app.use((req,res,next)=>{
    res.setHeader('Content-type','text/plain;charset=utf8');
    next();
});

// app.get('/', (req, res) => {
//     res.redirect('https://www.baidu.com');
//
// });

app.get('/index', (req, res) => {
    res.end('崔文涛')
});


// app.all('*', (req, res) => {
//     res.end('404  ojbk!')
// });




