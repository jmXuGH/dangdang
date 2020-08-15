import './lib/jquery-2.1.4.js';
/* 引入swiper */
import './lib/swiper.js';

/*渲染轮播图左侧菜单 */
import fenlei from './modules/index_mod/fenlei.js'
fenlei();


$(function () {
    /*公共部分：头部导航栏*/
    $('#header').load("./header.html", function () { });

    /*公共部分：加载尾部*/
    $('#footer').load("./footer.html", function () {
        // $('.footer_pic_new').css('display','none');
        // $('.public_footer_new').css('display','none');

        $('.footer_copyright_none').css('display', 'none');

    });
    /*执行广告大图动画*/
    setTimeout(function () {
        $('.ad_bar_top').animate({ height: 200 }, 'slow')
    }, 3000)

    // 轮播图分页器hover效果
    $(".swiper-pagination-bullet").hover(function () {
        $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
    }, function () {
        mySwiper.autoplay.start(); //鼠标移出之后，自动轮播开启
    })


    // 轮播图前进后退按钮


})








/* 轮播图1 */
var mySwiper = new Swiper('.swiper-container1', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,

    },
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
    },
    effect: 'fade',
    fade: {
        crossFade: true,
    }
})


//鼠标覆盖停止自动切换与隐藏前进后退按钮
// mySwiper.el.onmouseenter = function () {
//     $('.swiper-container1 .swiper-button-prev').stop().animate({ left: 0 }, 'normal')
//     $('.swiper-container1 .swiper-button-next').stop().animate({ right: 0 }, 'normal')
// }
//鼠标覆盖停止自动切换与隐藏前进后退按钮
// mySwiper.el.onmouseleave = function () {
//     $('.swiper-container1 .swiper-button-prev').stop().animate({ left: -33 }, 'normal')
//     $('.swiper-container1 .swiper-button-next').stop().animate({ right: -33 }, 'normal')
// }

$(mySwiper.el).hover(
    function () {
        $('.swiper-container1 .swiper-button-prev').stop().animate({ left: 0 }, 'normal')
        $('.swiper-container1 .swiper-button-next').stop().animate({ right: 0 }, 'normal')
    },
    function () {
        $('.swiper-container1 .swiper-button-prev').stop().animate({ left: -33 }, 'normal')
        $('.swiper-container1 .swiper-button-next').stop().animate({ right: -33 }, 'normal')
    }
 );


 
/* 轮播图2 */
var mySwiper2 = new Swiper('.swiper-container2', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
    },
    effect: 'fade',
    fade: {
        crossFade: true,
    }
})

//鼠标覆盖停止自动切换与隐藏前进后退按钮
mySwiper2.el.onmouseenter = function () {
    $('.swiper-container2 .swiper-button-prev').stop().animate({ left: 0 }, 'normal')
    $('.swiper-container2 .swiper-button-next').stop().animate({ right: 0 }, 'normal')
}
//鼠标覆盖停止自动切换与隐藏前进后退按钮
mySwiper2.el.onmouseleave = function () {
    $('.swiper-container2 .swiper-button-prev').stop().animate({ left: -33 }, 'normal')
    $('.swiper-container2 .swiper-button-next').stop().animate({ right: -33 }, 'normal')
}

/* 轮播图3 */
var mySwiper3 = new Swiper('.swiper-container3', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
    },
    // effect: 'fade',
    // fade: {
    //     crossFade: true,
    // }
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
})

//鼠标覆盖停止自动切换与隐藏前进后退按钮
mySwiper3.el.onmouseenter = function () {
    $('.swiper-container3 .swiper-button-prev').stop().animate({ left: 0 }, 'normal')
    $('.swiper-container3 .swiper-button-next').stop().animate({ right: 0 }, 'normal')
}
//鼠标覆盖停止自动切换与隐藏前进后退按钮
mySwiper3.el.onmouseleave = function () {
    $('.swiper-container3 .swiper-button-prev').stop().animate({ left: -33 }, 'normal')
    $('.swiper-container3 .swiper-button-next').stop().animate({ right: -33 }, 'normal')
}

