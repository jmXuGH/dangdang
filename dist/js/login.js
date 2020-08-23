import './lib/jquery-2.1.4.js';
import './lib/jquery.cookie.js';
/*公共部分：加载尾部*/
$('#footer').load("./footer.html", function () {
    $('.footer_pic_new').css('display', 'none');
    $('.public_footer_new').css('display', 'none');

    $('.footer_copyright_none').css('display', 'none');

});


$(".loginMaskbtn").click(function () {
    $(this).parent().remove();
    $(".mask").remove();
})

/* 点击ipt显示提示 */

$(".username .placeholder").click(function () {
    $(this).css("display", "none")
    $("#user_mindstyle").text("请输入邮箱/昵称/手机号码").css("color", "#B0B0B0");
    $(".username .user").focus();
    $('.username').css("border-color", "#e6e6e6");
    $(".username i").css("background-position", "10px -110px");
})

$(".username .user").blur(function () {
    if ($(this).val()) {
        $("#user_mindstyle").text("");
    } else {
        $(".username .placeholder").css("display", "block");
        $("#user_mindstyle").text("");
    }
})
$(".username .user").keyup(function () {
    if ($(this).val()) {
        $(".username .text_del").css("display", "block");
    } else {
        $(".username .text_del").css("display", "none");
    }
})

/* 点击隐藏提示 */
$(".password .placeholder").click(function () {
    $(this).css("display", "none")
    $("#login_password_error").css("color", "#B0B0B0");
    $("#login_password_error").text("请填写长度为6-20个字符的密码");
    $(".password .pass").focus();
    $(".password i").css("background-position", "10px -150px");
    $('.password').css("border-color", "#e6e6e6");

})

/* 密码框失去焦点触发提示隐藏 */
$(".password .pass").blur(function () {
    if ($(this).val()) {
        $("#login_password_error").text("");
    } else {
        $(".password .placeholder").css("display", "block");
        $("#login_password_error").text("");
    }
})



$(".password .pass").keyup(function () {
    if ($(this).val()) {
        $(".password .text_del").css("display", "block");
    } else {
        $(".password .text_del").css("display", "none");
    }
})

$(".username .text_del").click(function () {
    $(".username .user").val("");
    $(".username .placeholder").css("display", "block");
    $(this).css("display", "none")
})

$(".password .text_del").click(function () {
    $(".password .pass").val("");
    $(".password .placeholder").css("display", "block");

    $(this).css("display", "none");
})
/* 验证图片旋转 */
var current = 0;
var trueNum = 0;
$(".Rotate-background").click(function () {
    current -= 76;
    console.log();
    var thisDomPosition = $(".Rotate-background").index(this) * (-76);
    current < -228 ? current = 0 : current;
    $(this).css("background-position", thisDomPosition + "px " + current + "px")
    trueNum++;
    trueNum > 3 ? trueNum = 0 : trueNum;
    $(this).attr("trueNum", trueNum);
})

// 生成区间随机整数
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
/* 图片验证 */
var pre = 0;
var rad = 0;
var trueCode = '';
function szBg() {
    $.get('../data/rotate.json', '', function (data) {
        rad = randomInt(0, 4);
        while (pre === rad) { rad = randomInt(0, 4); }
        trueCode = data[rad].code;
        var imgScr = data[rad].imgScr;
        $(".Rotate-background").css("background-image", 'url(' + imgScr + ')')
        pre = rad;
    })
}
szBg();

$(".Rotate-refresh").click(function () {
    szBg();
})


// 获取刚注册用户名
if ($.cookie('regUser') !== "null") {
    $(".username .user").val($.cookie('regUser'))

}

var us = $(".username .user").val();
console.log(us);
if (us) {
    $(".username .placeholder").css("display", "none");
}
$("#submitLoginBtn").click(function () {
    var url = "http://47.94.232.14:6789";
    us = $(".username .user").val();
    var ps = $(".password .pass").val();
    var strCode = ''
    $.each($('.Rotate-background'), function (i, l) {
        strCode += $(l).attr("truenum")
    })
    if (strCode != trueCode) { alert("图片验证错误"); return false; }
    var mailReg = /^\w{2,18}@[0-9a-z]{1,10}(\.[a-z]{2,3}){1,2}$/
    if (!mailReg.test(us)) {
        alert("邮箱格式不符合");
    }
    if (us && ps) {
        $.get(url + '/user/login', 'username=' + us + '&password=' + ps, function (data) {
            // console.log();

            if (data.data[0]) {
                alert("登陆成功");
                $.cookie('loginUser', us, { expires: 1 });
                $.cookie('regUser', null);
                window.open("./index.html")
            } else {
                alert("账号不存在或密码错误");
            }
        }, 'json')
    } else {

        /* 空值提示 */
        $('.password').css("border-color", "#f44700");
        $('.username').css("border-color", "#f44700");
        $(".username i").css("background-position", "-14px -110px");
        $(".password i").css("background-position", "-14px -150px");
        $("#login_password_error").text("请输入你的密码").css("color", "#f44700");
        $("#user_mindstyle").text("请输入邮箱/昵称/手机号码").css("color", "#f44700");
        
    }
})
