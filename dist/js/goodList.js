import './lib/jquery-2.1.4.js';

/*公共部分：头部导航栏*/
$('#header').load("./header.html", function () {
    $(".logo_line_out").css("display", "none");
    $(".ddnewhead_area").css("display", "none");
    $(".ddnewhead_welcome").css("float", "left");


});

/*公共部分：加载尾部*/
$('#footer').load("./footer.html", function () {
    $('.footer_pic_new').css('display', 'none');
    $('.public_footer_new').css('display', 'none');

    $('.footer_copyright_none').css('display', 'none');

});


$.get('../data/goodsList.json', '', function (data) {
    $.each(data, function (i, l) {
        console.log(l);
        var newLi = `<li class="msgoods clearBoth">
        <div class="item">
            <a href="http://product.dangdang.com/1617795962.html" class="show" target="_blank"><img
                    src="${l.imgUrl}"></a>
            <div class="item_info">
                <a href="http://product.dangdang.com/1617795962.html" class="name"
                    target="_blank">${l.msg}</a>
                <p class="price">秒杀价：¥<span>${l.price}</span></p>
                <div class="progress_bar"><span style="width:${l.progress}%"><em></em></span></div>
                <p class="progress_txt">已秒杀&nbsp;${l.progress}%</p>
                <div class="link">
                    <div class="btn_area">
                        <a href="http://product.dangdang.com/1617795962.html" class="shop"
                            target="_blank">秒杀</a> </div>
                </div>
            </div>
        </div>
    </li>`
    $(".sale").append(newLi);
    })

})
