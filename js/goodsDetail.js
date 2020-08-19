import './lib/jquery-2.1.4.js';
/*公共部分：头部导航栏*/
$('#header').load("./header.html", function () { });

/*公共部分：加载尾部*/
$('#footer').load("./footer.html", function () {
    // $('.footer_pic_new').css('display','none');
    // $('.public_footer_new').css('display','none');

    $('.footer_copyright_none').css('display', 'none');

});

var goodId = localStorage.getItem("goodsId");
if (0 < goodId && goodId < 4) {
    console.log($(".jia_gou_e")[goodId]);
    $($(".jia_gou_e")[goodId]).addClass(" choose");
    $.get('../data/goodsDetail.json', '', function (data) {
        var thisObj = data[goodId-1];
        console.log();
        console.log(thisObj);
        var tsDom = `
        <!-- 放大镜 -->
        <div class="pic_info">
            <a href="" class="img">
                <img src="${thisObj.midImg}" alt="">
                <div class="moveMask">

                </div>
            </a>
            <div class="sale_lable">
                <img src="../image/sale_picture.png" alt="">
                <p class="cuxiao_word ">暑假季 好书跨店满99减10</p>
            </div>
            <ul class="dp_slide_box">
                <li><a href=""><img src="${thisObj.smImg[0]}" alt=""></a></li>
                <li><a href=""><img src="${thisObj.smImg[1]}" alt=""></a></li>
                <li><a href=""><img src="${thisObj.smImg[2]}" alt=""></a></li>
            </ul>
        </div>
        <div class="show_info">
            <div class="sale_box">
                <div class="sale_box_left">
                    <!-- 标题 -->
                    <div class="name_info">
                        <!-- 主标题 -->
                        <h1>${thisObj.msg}</h1>
                        <h2>
                            <span class="head_title_name">${thisObj.detailMsg}</span>
                            <span class="hot"><a href="">${thisObj.linkMsg}</a></span>
                        </h2>

                    </div>
                    <!-- 标题  结束-->
                    <div class="messbox_info">
                        <span>作者：</span><span class="t1">${thisObj.writer}</span>
                        <span class="t1"><span>出版社:</span><a href="">${thisObj.publish}</a></span>
                        <span class="t1">出版时间:${thisObj.ptime}&nbsp;</span>ptime
                        <div>
                            <span class="star_box">
                                <span class="star" style="width:94.6%"></span>

                            </span>
                            <a href="javascript:void(0)" id="comm_num_down" dd_name="评论数">${thisObj.pl}</a>
                            <span>条评论</span>
                        </div>
                        <div class="price_info clearBoth">
                            <div class="price_pc float-l">
                                <div class="top">
                                    <p class="dd_p">
                                        <span>当当价</span>
                                        <a style="margin-left: 10px;" href="">降价通知</a>
                                    </p>
                                    <p class="dd_price">
                                        <span class="rmb">￥</span>
                                        <span class="num">${thisObj.price}</span>
                                        <span class="zhe">
                                        ${thisObj.dz}
                                        </span>
                                    </p>
                                </div>
                                <div class="bot">
                                    <span class="price_m">定价</span>
                                    <span class="del">¥${thisObj.dj}</span>
                                </div>
                            </div>
                            <div class="price_ph float-r">
                                <p>手机专享价</p>
                                <p class="price_box"><span class="rmb">￥</span><span class="num">${thisObj.sjj}</span></p>
                            </div>
                        </div>
                        <div class="lingquan_info clearBoth">
                            <div class="left float-l">领券</div>
                            <div class="right float-l clearBoth">
                                <ul class="clearBoth">
                                    <li><a href="">49减3</a></li>
                                    <li><a href="">99减10</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="cuxiao1_info clearBoth">
                            <div class="left float-l">促销</div>
                            <div class="rig float-l clearBoth">
                                <div class="t clearBoth">
                                    <p class="mej float-l">满额减</p>
                                    <div class="mjmsg"><span>满¥99减¥10，满¥188减¥20，满¥288减¥35</span>
                                        <a href="">详情>></a></div>
                                </div>
                                <div class="b">
                                    <i></i>
                                    <span>
                                        促销不可多选，请在购物车选择该单品能享受的促销
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="psonz clearBoth">
                            <div class="left letter03 float-l">配送至</div>
                            <div class="rig float-l clearBoth">
                                <p>中国</p>
                                <p>至</p>
                                <p class="address">浙江杭州市上城区湖滨街道</p>
                                <p class="ishuo">有货</p>
                                <p>运费8.9元起</p>
                            </div>
                        </div>
                        <div class="server clearBoth">
                            <div class="left float-l">服务</div>
                            <div class="rig float-l clearBoth">
                                <span>
                                ${thisObj.server}</span>
                            </div>
                        </div>
                        <div class="cuxiao_info choose_xilie clearBoth">
                            <div class="left1 float-l">关联商品</div>
                            <div class="rig float-l clearBoth">
                                <a class="jia_gou_e" href="">
                                    <img src="${thisObj.glsp[0].imgSrc}">
                                    <span> ${thisObj.glsp[0].name}</span>
                                </a>
                                <a class="jia_gou_e" href="">
                                    <img src="${thisObj.glsp[1].imgSrc}">
                                    <span>${thisObj.glsp[1].name}</span>
                                </a>
                                <a class="jia_gou_e" href="">
                                    <img src="${thisObj.glsp[2].imgSrc}">
                                    <span>${thisObj.glsp[2].name}</span>
                                </a>
                            </div>
                        </div>
                        <!-- <div class="jiagou">
                            <div class="addgoods">
                                <div class="l_box">
                                    1
                                </div>
                                <div class="r_box">
                                    <p>+</p>
                                    <p>-</p>
                                </div>
                            </div>
                            <div class="jiagoubtn">

                            </div>
                            <div class="buybtn">

                            </div>
                        </div> -->


                    </div>


                </div>



            </div>
        </div>


    `
$(".product_main").html(tsDom);

    })
}
