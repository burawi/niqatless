var fs = require('fs');
var jade = require('jade');
var txt = require('./txt.js');

var html = jade.renderFile('index.jade', txt);
fs.writeFileSync('index.html',html,'utf-8');
