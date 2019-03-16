let express = require('express');

let router = express.Router();

router.get('/post', (req, res, next) => {
    res.send('发表')
});

router.get('/delete', (req, res, next) => {
    res.send('删除')
});

module.exports=router;
