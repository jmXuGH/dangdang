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

    }, 'json');

    /* 获取覆盖在轮播图上面的数据 */
    
    $.get('../data/tabList.json', '',function (data) {
        var pre = 0;
        $('.home_first_screen').on('mouseenter', '.new_pub_nav li', function (e) {
            e.preventDefault();
            $(".menu_list_box").css('display', 'block');
            $($('.new_pub_nav li')[pre]).removeClass('on');
            $(this).addClass('on');

            pre = $(this).index();
            // console.log(data[pre].leftList);
            // console.log(data[pre]);
            if (data[pre].rightImg.isTrue) {
                $(".menu_list_right").css("display", "block");
                $(".menu_list_left").width(719);
                var nLi = "";
                $.each(data[pre].rightImg.imgSrc, function (i, l) {
                    nLi += '<li><a href=""><img src="' + l + '" alt=""></a></li>'
                })
                $(".menu_list_right .logo_box ul").html(nLi);
            } else{
                if (data[pre].rightImg.isTrue === null) {
                    $(".menu_list_box").css('display', 'none');
                    $(this).css("border-right","3px solid #ff2832")
                    $(this).mouseleave(function(){
                        $(this).css("border-right","0")
                    })
                    return;
                }
                $(".menu_list_left").width(979);
                $(".menu_list_right").css("display", "none");
            }


            var na = '';
            $.each(data[pre].leftList.titList, function (i, l) {
                na += '<a href="">' + l + '</a>'
            })
            $(".menu_list_box .new_pub_pop_guan").html(na);
            var category_box = '';
            // console.log(data[pre].leftList.list);
            $.each(data[pre].leftList.list, function (i, l) {
                var na = ''
                $.each(l.listCon, function (i, l) {
                    na += '<a href="">' + l + '</a>'
                })
                var ncategory_01 = '<div class="category_01">' + na + '</div>';
                var category = `<div class="category_box"><h4><a href="">${l.tit}</a></h4> ` + ncategory_01 + '</div>';
                category_box += category;
            })
            $(".menu_list_box .left_01").html(category_box);

        })
        $('.home_first_screen').on('mouseleave', function (e) {
            e.preventDefault();
            $($('.new_pub_nav li')[pre]).removeClass('on');
            $(".menu_list_box").css('display', 'none');
        })

    }, 'json')
    /**
     * 
     * 完成轮播图旁边的tab
     */
    var tabTag = false;
    var timer1 = null;
    function autoTurn() {
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

