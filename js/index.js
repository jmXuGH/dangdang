import './lib/jquery-2.1.4.js';
/* 引入swiper */
import './lib/swiper.js';

/*渲染轮播图左侧菜单 */
import fenlei from './modules/index_mod/fenlei.js'
fenlei();



/*渲染图书 . 电子书 . 网络文学商品及动态数据 */
import bookList from './modules/index_mod/bookList.js'
bookList();



/* 控制fiexd显示与隐藏 */
// console.log($(".miaosha_box").offset().top);
// console.log($(document.documentElement).scrollTop());
$(document).scroll(function() {
    if ($(document.documentElement).scrollTop() < $(".miaosha_box").offset().top) {
        $(".fixed_search").css("display", "none");
    } else {
        $(".fixed_search").css("display", "block");

    }
})



/*渲染秒杀商品 */


$(function() {
    /*公共部分：头部导航栏*/
    $('#header').load("./header.html", function() {});

    /*公共部分：加载尾部*/
    $('#footer').load("./footer.html", function() {
        // $('.footer_pic_new').css('display','none');
        // $('.public_footer_new').css('display','none');

        $('.footer_copyright_none').css('display', 'none');

    });
    /*执行广告大图动画*/
    setTimeout(function() {
        $('.ad_bar_top').animate({ height: 200 }, 'slow')
    }, 3000)

    // 轮播图分页器hover效果
    $(".swiper-pagination-bullet").hover(function() {
        $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
    }, function() {
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
        renderBullet: function(index, className) {
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
    function() {
        $('.swiper-container1 .swiper-button-prev').stop().animate({ left: 0 }, 'normal')
        $('.swiper-container1 .swiper-button-next').stop().animate({ right: 0 }, 'normal')
    },
    function() {
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
mySwiper2.el.onmouseenter = function() {
        $('.swiper-container2 .swiper-button-prev').stop().animate({ left: 0 }, 'normal')
        $('.swiper-container2 .swiper-button-next').stop().animate({ right: 0 }, 'normal')
    }
    //鼠标覆盖停止自动切换与隐藏前进后退按钮
mySwiper2.el.onmouseleave = function() {
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
        clickable: true
    }
})

//鼠标覆盖停止自动切换与隐藏前进后退按钮
mySwiper3.el.onmouseenter = function() {
        $('.swiper-container3 .swiper-button-prev').stop().animate({ left: 0 }, 'normal')
        $('.swiper-container3 .swiper-button-next').stop().animate({ right: 0 }, 'normal')
    }
    //鼠标覆盖停止自动切换与隐藏前进后退按钮
mySwiper3.el.onmouseleave = function() {
    $('.swiper-container3 .swiper-button-prev').stop().animate({ left: -33 }, 'normal')
    $('.swiper-container3 .swiper-button-next').stop().animate({ right: -33 }, 'normal')
}



/* 秒杀倒计时 */


//获取指定日期的下个秒杀时间点

// function GetNextDate(time) {

//     //获取当前时间年月日

//     var y = time.getFullYear();

//     var m = time.getMonth() + 1;

//     var d = time.getDate();

//     var h = time.getHours()

//     var futureHour = '0:00:00';
//     switch (true) {
//         case 0 <= h && h < 11:
//             futureHour = '11:00:00';
//             $('.list_3 a').removeClass('now');
//             $('.list_1 a').addClass('now');
//             break;
//         case 11 <= h && h < 16:
//             futureHour = '16:00:00';
//             $('.list_1 a').removeClass('now');
//             $('.list_2 a').addClass('now');
//             break;
//         case 16 <= h && h < 24:
//             futureHour = '0:00:00';
//             d++;
//             $('.list_2 a').removeClass('now');
//             $('.list_3 a').addClass('now');
//             break;
//     }
//     var t = y + "-" + m + "-" + d + " " + futureHour;

//     var tDate = new Date(Date.parse(t.replace(/-/g, "/")));
//     // tDate = + tDate + 24 * 60 * 60 * 1000;

//     tDate = new Date(tDate);
//     return tDate;

// }

// /* 倒计时函数 */
// (function() {
//     let timer = null;
//     clearInterval(timer);
//     timer = setInterval(function() {
//         let now = new Date();
//         let future = GetNextDate(now);
//         let res = future - now;
//         let h = res / 1000 / 60 / 60
//         h = Math.floor(h);
//         h < 10 ? h = '0' + h : h;
//         let m = res / 1000 / 60 - h * 60
//         m = Math.floor(m);
//         m < 10 ? m = '0' + m : m;
//         let s = res / 1000 - m * 60 - h * 60 * 60
//         s = Math.floor(s);
//         s < 10 ? s = '0' + s : s;
//         $('.h').text(h)
//         $('.m').text(m)
//         $('.s').text(s)

//     }, 1000)
// })()
/* 秒杀倒计时 */
import cutdown from './modules/cutdown.js'
// console.log(cutdown());
let timer = null;
clearInterval(timer);
timer = setInterval(function() {
    let obj = cutdown();
    $('.h').text(obj.h)
    $('.m').text(obj.m)
    $('.s').text(obj.s)
}, 1000)


/* 渲染秒杀商品 */

$.get('../data/msList.json', '', function(data) {
    // console.log(data);
    $.each(data, function(i, l) {
        var good_con = `<div class="goods_con">
        <a class="pic" href="./goodsList.html">
            <img src="../image/${l.imgSrc}" alt="">
        </a>
        <div class="line">
            <div class="ms_prog_bar" style="width:${l.progress*100}%;"></div>
            <div class="ms_num_bg"></div>
        </div>
        <div class="per_num">已秒杀<b>${l.progress*100}</b>%</div>
        <div class="name">
            <a href="">${l.msg}</a>
        </div>
        <div class="price_box">
            <span>秒杀价：¥</span>
            <span class="charge">${l.price}</span>
            <span class="del">${l.del}</span>
        </div>
    </div>`
        $(".left_goods_box").append(good_con)
    })
})

/* 完成厂商周轮播图 */

var mySwipercs = new Swiper('.swiper-cs', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    loop: true, // 循环模式选项
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fade: {
        crossFade: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})