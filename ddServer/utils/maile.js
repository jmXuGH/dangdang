"use strict";
const nodemailer = require("nodemailer");

//创建邮件发送的对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",//发送方邮箱
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '863547801@qq.com',  // generated ethereal user
      pass: 'wpwubgivlrkrbbai' // generated ethereal password
    }
  });
  function send(mail,code){
 // 邮件信息
 let maileobj ={
    from: '"Foo" <863547801@qq.com>', // sender address
    to: mail, // list of receivers
    subject: "登录验证码", // Subject line
    text: `您的验证码是${code},有效期一分钟`, // plain text body
   // html: "<b>Hello world?</b>" // html body
  }
  return new Promise((resolve,reject)=>{
    transporter.sendMail(maileobj,(err,data)=>{
        if(err){
            reject()
        }else{
            resolve()
        }
        })
  })
 
  }
  module.exports = {send}