function express() {
    function app() {

    }
    app.fns=[];
    app.use = function (fn){
        this.fns.push({
            path: '/',
            fn
        });
    };
    app.get =  function(path, fn) {
        this.fns.push({
            path,
            fn
        })
    };
    app.start = function(req, res){
        var i = 0;
        function next() {

            var layer = app.fns[i++];
            console.log(req.url,'---',layer.path);
            if (req.url.indexOf(layer.path) == 0) {
                layer.fn(req, res, next);
            }else{
                next();
            }
        }

        next();
    };
    return app;
}

module.exports = express;