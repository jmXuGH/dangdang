'use strict';
var mysql = require('mysql');
// 数据库配置
module.exports = {
    /**
     * 数据库配置
     */
    config: {
        host: '47.94.232.14',
        port: 3306,
        database: 'dangdang',
        user: 'dangdang',
        password: '123456'
    },
    conn: null,
    /**
     * 创建连接池并连接
     * @param callback
     */
    openConn: function (callback) {
        var me = this;
        me.conn = mysql.createConnection(me.config);
    },
    /**
     * 释放连接池
     * @param conn
     */
    closeConn: function () {
        var me = this;
        me.conn.end(function (err) {
            if(!err) return
            console.log(err);
        });
    },
    /**
     * 执行连接
     * @param config
     */
    mysqlUse: function (sql,params) {
        const me = this;
        me.openConn();

        return new Promise((resolve,reject)=>{


        me.conn.query(sql, params, function (err, res) {
            if (err) {
                reject(err);
            } else{
				
                resolve(res);
               // callback(res);
            }
            // 关闭数据库连接
            
        });
		me.closeConn();
    });
	
    }
};
