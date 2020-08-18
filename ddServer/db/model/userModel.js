var mysqlHandler = require('../connect');

module.exports = {
mysqlUse(sql,params){
    var a = {}
    mysqlHandler.exec({
        sql,
        params,
        callback(r) {
            console.log(r)
            return r
        }
    })
}
}