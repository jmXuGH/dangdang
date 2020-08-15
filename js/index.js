import './lib/jquery-2.1.4.js';
$(function () {
    /*公共部分：头部导航栏*/
    $('#header').load("./header.html",function(){});

    /*公共部分：加载尾部*/
    $('#footer').load("./footer.html",function(){
        $('.footer_pic_new').css('display','none');
        $('.public_footer_new').css('display','none');
        
        $('.footer_copyright_none').css('display','none');

    });
    /*执行广告大图动画*/
    setTimeout(function () {
        $('.ad_bar_top').animate({ height: 200 }, 'slow')
    }, 3000)
})


$(document).ready(function () {


})

$('.tools').css('display', 'none');