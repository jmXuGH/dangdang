var mysql = require('mysql');
var dbConfig = require('./config');

module.exports = {
    query : function(sql,param,callback){
        //每次使用的时候要创建链接，数据操作完之后要关闭连接    
        var connection = mysql.createConnection(dbConfig);
        connection.connect(function(err){
            if(err){
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据库操作
            connection.query(sql, param, function(err,results,fields){
                if(err){
                    console.log('数据库操作失败');
                    throw err;
                }
                
                //将查询出来的结果返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经为错误进行了处理，如果数据检索错误，直接会阻塞到这个文件中
                callback && callback(err,JSON.parse(JSON.stringify(results)), fields);

                //results作为数据操作 段
                //停止连接数据库，必须要在查询数据库之后，不然一调用这个方法，就直接停止连接，数据操作就会失败
                connection.end(function(err){
                    if(err){
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                })
            })
        })
    }
}