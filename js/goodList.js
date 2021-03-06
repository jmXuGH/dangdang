import './lib/jquery-2.1.4.js';
import cutdown from './modules/cutdown.js'
let timer = null;
clearInterval(timer);
timer = setInterval(function () {
    let obj = cutdown();
    $('.h').text(obj.h);
    $('.m').text(obj.m);
    $('.s').text(obj.s);
}, 1000);

/*公共部分：头部导航栏*/
$('#header').load("./header.html", function () {
    $(".logo_line_out").css("display", "none");
    $(".ddnewhead_area").css("display", "none");
    $(".ddnewhead_welcome").css("float", "left");
    $(".nav_top").css("display", "none");
});

/*公共部分：加载尾部*/
$('#footer').load("./footer.html", function () {
    $('.footer_pic_new').css('display', 'none');
    $('.public_footer_new').css('display', 'none');

    $('.footer_copyright_none').css('display', 'none');

});


$.get('../data/goodsList.json', '', function (data) {
    $.each(data, function (i, l) {
        // console.log(l);
        var newLi = `<li class="msgoods clearBoth" goodId="${i}">
        <div class="item">
            <a href="./goodsDtail.html" class="show" target="_blank"><img
                    src="${l.imgUrl}"></a>
            <div class="item_info">
                <a href="./goodsDtail.html" class="name"
                    target="_blank">${l.msg}</a>
                <p class="price">秒杀价：¥<span>${l.price}</span></p>
                <div class="progress_bar"><span style="width:${l.progress}%"><em></em></span></div>
                <p class="progress_txt">已秒杀&nbsp;${l.progress}%</p>
                <div class="link">
                    <div class="btn_area">
                        <a href="./goodsDtail.html" class="shop"
                            target="_blank">秒杀</a> </div>
                </div>
            </div>
        </div>
    </li>`
        $(".sale").append(newLi);
    })
    $(".msgoods").click(function () {
        var goodsId = $(this).attr("goodId");
        localStorage.setItem("goodsId" , goodsId);
        window.open("./goodsDtail.html")
    })


})
