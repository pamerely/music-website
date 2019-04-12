const express = require('express');
const router = express.Router();

const md5 = require('md5')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false});

const ObjectId = require('mongodb').ObjectId;
const db = require('./db')

// 获取推荐歌曲数据
var getDiscList = require('./controll/getDescList.js');
router.get('/api/getDiscList', getDiscList)

// 获取歌词数据
var lyric = require('./controll/lyric.js');
router.get('/api/lyric', lyric)

// 注册
var phoneNum = (req, res)=>{
   
    db.find('music','user',{phone:req.body.phone},res,function(a){
      
		if (a.length==0) {

			res.send('ok');
		}else{
            res.send('exist')
        }
	})
}
router.post('/api/phoneNum', urlencodedParser, phoneNum)

var register = (req, res)=>{
    let userInfo = req.body;
    userInfo.password = md5(userInfo.password)
    db.insert('music','user',userInfo,res,function(a){
        res.send('ok')
    })
    
}
router.post('/api/register', urlencodedParser, register)

// 登录
var login = (req, res)=>{
    let userInfo = req.body;
    userInfo.password = md5(userInfo.password);
    db.find('music', 'user', userInfo, res, function(a){
        if(a.length!==0){
          
      
            res.send({code:0, user:a[0].user})
        }else{
            res.send('error')
        }
    })
}
router.post('/api/login', urlencodedParser, login)

module.exports = router;