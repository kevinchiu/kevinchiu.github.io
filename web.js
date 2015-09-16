var express = require('express'),
    http = require('http'),
    directory = __dirname;
var port = 3000;

express()
    .use(express.static(directory))
    .use(redirectUnmatched)
    .listen(port);

function redirectUnmatched(req, res) {
  res.redirect("http://www.kevinchiu.org/");
}
