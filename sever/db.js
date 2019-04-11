/*
* @Author: asus
* @Date:   2018-10-28 15:24:36
* @Last Modified by:   asus
* @Last Modified time: 2018-11-11 12:28:50
*/
var MongoClient = require('mongodb').MongoClient;//获取数据库对应的模块
var url = "mongodb://localhost:27017/";//数据库地址
// 链接数据库
function connect(callback){
	MongoClient.connect(url,(err,db)=>{
		if (err) return;
		callback(db);
	})
	
}
// 增
module.exports.insert=(dbname,collection,obj,res,callback)=>{
	connect((db)=>{
		if (obj instanceof Array) {

			obj=[obj];
		}else if(obj instanceof Object){
			obj=obj;
		}
		db.db(dbname).collection(collection).insertOne(obj,(err,res1)=>{
				if (err) return ;
				callback(res1)	
			})
	})

}
// 删
module.exports.del = (dbname,collection,obj,res,callback)=>{
	connect((db)=>{
			db.db(dbname).collection(collection).deleteOne(obj,(err,res1)=>{
				if (err) return ;
				callback(res1)
			})
		 
	})
}
// 改
module.exports.update=(dbname,collection,wherestr,updatestr,res,callback)=>{
	connect((db)=>{
			db.db(dbname).collection(collection).updateMany(wherestr,updatestr,(err,res1)=>{
				if (err) return ;
				callback(res1)
			})
		
	})
}
// 查
module.exports.find=(dbname,collection,wherestr,res,callback,mysort1,m1,n1)=>{
	var l = arguments.length;
	connect((db)=>{
		var mysort={};
		var m=0;
		var n=0;
		if (l==5) {

		}else if(l==6){
			mysort=mysort1;
		}else if(l==7){
			mysort=mysort1;
			m=m1;
		}else if(l==8){
			mysort=mysort1;
			m=m1;
			n=n1;
		}
		db.db(dbname).collection(collection).find(wherestr).sort(mysort).skip(m).limit(n).toArray((err,result)=>{
			if (err) return;
			callback(result)		
			
			
		})
	})
}

