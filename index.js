var express = require("express");

var app = new express();

app.use(express.static("./"));

app.listen(8082, function () {
    console.log("服务已启动... ...")
});