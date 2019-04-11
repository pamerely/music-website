const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const router = require('./sever/router.js');
const db = require('./sever/db.js');

app.use(express.static(path.resolve(__dirname,'../dist')));

app.use(router);

app.get('*', function(req, res){
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), "utf-8")
    res.send(html)
})

// 允许跨域访问  也可以通过npm cors进行设置=
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })
// app.use('/',router)

app.listen(3000);