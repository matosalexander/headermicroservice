var express = require('express');
var userAgent=require('useragent');
var app = express();

var port=process.env.port || 8080;

var object={};

app.get('/', function (req, res) {
    var lang=req.headers['accept-language'].split(",");
    var ip=req.headers['x-forwarded-for'];
    var soft=userAgent.parse(req.headers['user-agent']);
    
    object.ip=ip;
    object.language=lang[0];
    object.software=soft.os.family;
    
    res.json(object);
});

app.listen(port, function () {
  console.log("Example app listening on port " + port +"!" )
});