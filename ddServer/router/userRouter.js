const express = require('express')
const router = express.Router()
const db = require('../db/model/mysqlUse')
const maileCode = require('../utils/maile')
// const headArr = require('./headUrl')
let codes = {}

router.get('/reg', (req, res) => {
    //获取数据
    //数据处理
    //返沪数据
    let { ps, mail, vcode } = req.query
    console.log(ps, mail, vcode);
    if (!ps || !vcode || !mail) return res.send({ err: -1, msg: '参数错误' })
    if (!codes[mail]) return res.send({ err: -4, msg: '验证码超时' })
    if (codes[mail] != vcode) { return res.send({ err: -4, msg: '验证码错误请重试' }) }
    // let index = Math.floor(Math.random() * 5)
    // let headUrl = headArr.headUrl[index]
    let params = [mail, ps]
    let qSql = 'select * from user where us = ?'
    db.mysqlUse(qSql, params)
        .then((data) => {
            if (!data[0]) {
                let sql = 'insert into user (us,ps) values (?,?)'

                db.mysqlUse(sql, params)
                    .then((data) => {
                        res.status(200).json({ "status": true, "msg ": "", "data": data });
                    })
                    .catch((e) => {
                        console.log(e);
                        res.status(200).json({ "status": false, "msg": e, "data": [] });
                    })
            }else{

                res.status(200).json({ "status": true, "msg": "用户已存在", "data": data });

            }
        })


})

router.get('/login', (req, res) => {
    let { username, password } = req.query
    // console.log(username, password);

    if (!username || !password) return res.send({ err: -1, msg: '参数错误' })
    //es6 键值写法
    //console.log(us,ps);
    let sql = 'select * from user where us = ? and ps = ?'
    let params = [username, password]
    db.mysqlUse(sql, params)
        .then((data) => {
            // console.log(data);
            res.status(200).json({ "status": true, "msg": "", "data": data });
        })
        .catch((e) => {
            console.log(e);

            res.status(200).json({ "status": false, "msg": e, "data": [] });
        })
})

//邮件验证码

router.get('/getMailCode', (req, res) => {
    let { mail } = req.query
    // console.log(mail);
    if (!mail) return res.send({ err: -1, msg: '无邮箱' })
    let code = parseInt(Math.random() * 10000)
    maileCode.send(mail, code)
        .then(() => {
            codes[mail] = code
            console.log(JSON.stringify(codes));

            setTimeout(() => {
                // 设置一个定时器，更新验证码
                delete codes[mail];
            }, 60000)
            res.send({ err: 0, msg: '验证码发送成功' })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '验证码发送失败' })
            // console.log(err);
        })
})


router.get('/getUserByName', (req, res) => {
    let { username } = req.query
    let par = [username]

    let sql = 'select us from user where us = ?'
    db.mysqlUse(sql, par)
        .then((data) => {

            res.status(200).json({ "status": true, "msg ": "", "data": data });
        })
        .catch((e) => {
            console.log(e);
            res.status(200).json({ "status": false, "msg": e, "data": [] });
        })
})
module.exports = router