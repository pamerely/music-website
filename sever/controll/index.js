const ObjectId = require('mongodb').ObjectId;
const request = require('request');
var session = require('express-session')


module.exports.cache = (req, res)=>{
    if (req.session.login) {
        res.send('{user:req.session.name}')
	
	}else{
        res.send('login')

	}
}

module.exports.phoneNum = (req, res)=>{
    db.find('music','userInfo',{phoneNum:req.body.phone},res,function(a){
		if (a.length==0) {
			res.send('ok');
		}
	})
}

module.exports.register = (req, res)=>{
    db.insert('product','myblog',{user:req.body.user,password:req.body.password},res,function(){});
	res.render('login');
}





