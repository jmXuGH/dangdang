// import '../../lib/jquery-2.1.4.js';

//完成头部导航条hover效果
$('.menu_box').mouseenter(function () {
    $(this).children().eq(0)[0].classList.add('hover');
    $(this).children().eq(1).css('display', 'block');
})
$('.menu_box').mouseleave(function () {
    $(this).children().eq(0)[0].classList.remove('hover');
    $(this).children().eq(1).css('display', 'none');
})


// 完成加载省份名称的加载渲染
$.get('../data/address.json', '', function (data) {

    $.each(data, function (index, item) {
        var newLi = document.createElement('li');
        newLi.innerHTML = '<a href="">' + item.province + '</a>';
        $('.address-box').append(newLi);
    })
}, 'json')

// 完成地址块的hover效果

//完成头部导航条hover效果
$('.ddnewhead_area').mouseenter(function () {
    $(this).children().eq(0)[0].classList.add('hover');
    $(this).children().eq(1).css('display', 'block');
})
$('.ddnewhead_area').mouseleave(function () {
    $(this).children().eq(0)[0].classList.remove('hover');
    $(this).children().eq(1).css('display', 'none');
})

// 输入框placeholder清空
$(".search-ipt").focus(function(){
    $(".search-placeholder").text("")
})
$(".search-ipt").blur(function(){
    $(".search-placeholder").text("一往无前")
})

