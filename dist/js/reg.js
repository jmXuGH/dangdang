import './lib/jquery-2.1.4.js';

/*公共部分：加载尾部*/
$('#footer').load("./footer.html", function () {
    $('.footer_pic_new').css('display', 'none');
    $('.public_footer_new').css('display', 'none');

    $('.footer_copyright_none').css('display', 'none');

});