let express = require('express');
let app = express();
app.listen(3000, () => console.log('server at 3000'));

app.get('/',(req,res)=>{
   res.redirect('https://www.baidu.com')
});