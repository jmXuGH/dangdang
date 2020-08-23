import './lib/jquery-2.1.4.js';
import './lib/jquery.cookie.js';
/*公共部分：加载尾部*/
$('#footer').load("./footer.html", function () {
    $('.footer_pic_new').css('display', 'none');
    $('.public_footer_new').css('display', 'none');

    $('.footer_copyright_none').css('display', 'none');

});

$(".head_a").click(function () {
    alert("此功能暂未使用");
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
    $.get('../data/tpyzm.json', '', function (data) {
        rad = randomInt(0, 4);
        while (pre === rad) { rad = randomInt(0, 4); }
        trueCode = data[rad].code;
        var imgScr = data[rad].imgScr;
        $(".yzm_pc").prop("src", imgScr)
        pre = rad;
    })
}
szBg();

$(".turn").click(function () {
    szBg();
})

$(".yzm_pc").click(function () {
    szBg();
})

var timer2 = null
$(".hqBtn").click(function () {
    clearInterval(timer2);
    var m = 70;
    var t = "";
    var mail = $("#email").val();
    getemyzm(mail);
    timer2 = setInterval(function () {
        if (m > 60) {
            var nm = m - 60;
            t = "1分" + nm + "秒后获取";
        } else {
            t = m + "秒后再获取";
        }
        console.log(m);
        console.log(t);
        $(".hqBtn").text(t);
        if (m < 0) {
            $(".hqBtn").text("获取短信验证码");
            $(".hqBtn").attr("disabled", false);

            return;
        } else {

            $(".hqBtn").attr("disabled", true);
            console.log($("#btn").attr("disabled"));
        }
        m--;
    }, 1000)
})
var url = "http://47.94.232.14:6789";

function getemyzm(mail) {
    $.get(url + '/user/getMailCode', 'mail=' + mail, function (data) {
        console.log(data);
        alert(data.msg)
    })
}


$("#yzm").keyup(function () {
    // console.log($("#yzm").val().toLowerCase());
    if ($("#yzm").val().toLowerCase() === trueCode) {
        $("#yzm").attr("isTrue", true);
        $(".pin_i").css("display", "inline-block");
        var email = $("#email").val();
        var pass = $("#pass").val();
        var repass = $("#repass").val();
        var code = $("#yzm").val();
        if (email && pass && repass && code) {
            getemyzm(email);
            setTimeout(function () {
                $(".yzm_pc").css("display", "none");
                $(".turn").css("display", "none");
                $(".hqBtn").css("display", "inline-block");
                $("#yzm").css("display", "none");
                $("#emyzm").css("display", "inline-block");
                $(".pin_i").css("display", "none");
                clearInterval(timer2);
                var m = 70;
                var t = "";
                timer2 = setInterval(function () {
                    if (m > 60) {
                        var nm = m - 60;
                        t = "1分" + nm + "秒后获取";
                    } else {
                        t = m + "秒后再获取";
                    }
                    $(".hqBtn").text(t);
                    if (m <= 0) {
                        $(".hqBtn").text("获取短信验证码");
                        $(".hqBtn").attr("disabled", false);
                        return;
                    } else {
                        $(".hqBtn").attr("disabled", true);
                    }
                    m--;
                }, 1000)
            }, 2000)
        }
    } else {
        $(".pin_i").css("display", "none");
        $("#yzm").attr("isTrue", false);
    }
})


// 点击按钮完成注册
$(".reg_btn").click(function () {
    var email = $("#email").val();
    var pass = $("#pass").val();
    var repass = $("#repass").val();
    var code = $("#emyzm").val();
    var check = $(".check")[0].checked;
    var mailReg = /^\w{2,18}@[0-9a-z]{1,10}(\.[a-z]{2,3}){1,2}$/
    if (!mailReg.test(email)) {
        alert("邮箱格式不符合");
    }
    if (!email || !pass || !repass || !code || !check) {
        alert("所有表单均为必填项");
        return;
    }

    if (pass !== repass) {
        alert("两次密码不同");
        return;
    }
    if ($(".yzm_box").attr("isTrue")) {
        $.get(url + '/user/reg', 'mail=' + email + "&ps=" + pass + "&vcode=" + code, function (data) {
            // console.log(data);
            // console.log(data.msg);
            if (data.msg == "用户已存在") {
                alert(data.msg);
                return;
            }
            $.cookie('regUser', email, { expires: 1 });
            alert(data.msg);
            open("./login.html")
        })


    } else {
        alert("图片验证码内容填写错误")
    }

})