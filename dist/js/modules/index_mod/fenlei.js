export default function () {
    // 根据数据渲染z主页左侧菜单

    $.get('../data/nav.json', '', function (data) {

        $.each(data, function (index, item) {

            var newLi = $('<li></li>');
            $.each(item, function (i, ite) {
                var newa = ''
                i == item.length - 1 ? newa = $('<a href="">' + ite + '</a>') : newa = $('<a href="">' + ite + '</a>' + '<span>、</span>');
                newLi.append(newa);
            })
            $('.new_pub_nav').append(newLi);

        })
        $('.new_pub_nav li').on('mouseenter', function (e) {
            e.preventDefault();
            $(this).addClass('on');

        })
        $('.new_pub_nav li').on('mouseleave', function (e) {
            e.preventDefault();
            $(this).removeClass('on');

        })
    }, 'json')

    /**
     * 
     * 完成轮播图旁边的tab
     */
    var tabTag = false;
    var timer1 = null;
    function autoTurn(){
         timer1 = setInterval(function () {
            if (tabTag) {
                tab_1()
            } else {
                tab_2()
            }
        }, 3000)
    }
    autoTurn();



    $(".notice_r_mid .tab .tab_1").mouseenter(function () {
        tab_1()
    })
    $(".notice_r_mid .tab .tab_2").mouseenter(function () {
        tab_2()
    })

    function tab_1() {
        clearInterval(timer1);
        $('.notice_r_mid .tab .tab_1').addClass("on");
        $(".notice_r_mid .tab .tab_2").removeClass('on');
        $('.cxgg_content1').css('display', 'block');
        $('.cxgg_content2').css('display', 'none');
        tabTag = false;
        autoTurn();
    }
    function tab_2() {
        clearInterval(timer1);
        $('.notice_r_mid .tab .tab_2').addClass("on");
        $(".notice_r_mid .tab .tab_1").removeClass("on");
        $('.cxgg_content2').css('display', 'block');
        $('.cxgg_content1').css('display', 'none');
        tabTag = true;
        autoTurn();
    }




}

