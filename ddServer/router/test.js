const User = require('../db/model/userModel')
var sql = 'select * from user where uname = ?'
var params = ['a']
User.mysqlUse(sql,params)

