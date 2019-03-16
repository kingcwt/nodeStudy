let express = require('express');
let app = express();
app.listen(3000, () => console.log('server at 3000'));


app.get('/json', (req, res, next) => {
    res.json({name: 'cwt崔文涛', age: '18'});
});
app.get('/', (req, res, next) => {
    res.sendFile('./index.html', {root: __dirname});
});
app.get('/status', (req, res, next) => {
    res.sendStatus(200);
});

app.use((req, res, next) => {
    res.mySend = data => {
        if (typeof data === 'object') {
            res.setHeader('Content-type', 'application/json;utf8');
            return res.end(JSON.stringify(data));
        } else if (typeof data === 'string') {
            res.setHeader('Content-type', 'text/plain;utf8');
            return res.end(data);
        } else if (typeof data === 'number') {
            res.setHeader('Content-type', 'text/plain;utf8');
            res.statusCode = data;
            return res.end(require('_http_server').STATUS_CODES[data]);
        }
    };
    next()
});
app.get('/num',(req,res,next)=>{
   res.mySend(200)
});