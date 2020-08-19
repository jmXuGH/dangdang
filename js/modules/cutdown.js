export default function() {
    /* 秒杀倒计时 */


    //获取指定日期的下个秒杀时间点

    function GetNextDate(time) {

        //获取当前时间年月日

        var y = time.getFullYear();

        var m = time.getMonth() + 1;

        var d = time.getDate();

        var h = time.getHours()

        var futureHour = '0:00:00';
        switch (true) {
            case 0 <= h && h < 11:
                futureHour = '11:00:00';
                $('.list_3 a').removeClass('now');
                $('.list_1 a').addClass('now');
                $($('.mix_miaoshaMenu li')[2]).removeClass('current');
                $($('.mix_miaoshaMenu li')[0]).addClass('current');
                break;
            case 11 <= h && h < 16:
                futureHour = '16:00:00';
                $('.list_1 a').removeClass('now');
                $('.list_2 a').addClass('now');
                $($('.mix_miaoshaMenu li')[0]).removeClass('current');
                $($('.mix_miaoshaMenu li')[1]).addClass('current');
                break;
            case 16 <= h && h < 24:
                futureHour = '0:00:00';
                d++;
                $('.list_2 a').removeClass('now');
                $('.list_3 a').addClass('now');
                $($('.mix_miaoshaMenu li')[1]).removeClass('current');
                $($('.mix_miaoshaMenu li')[2]).addClass('current');
                break;
        }
        var t = y + "-" + m + "-" + d + " " + futureHour;

        var tDate = new Date(Date.parse(t.replace(/-/g, "/")));
        // tDate = + tDate + 24 * 60 * 60 * 1000;

        tDate = new Date(tDate);
        return tDate;

    }
    /* 倒计时函数 */
    function cutdown() {
        let now = new Date();
        let future = GetNextDate(now);
        let res = future - now;
        let h = res / 1000 / 60 / 60
        h = Math.floor(h);
        h < 10 ? h = '0' + h : h;
        let m = res / 1000 / 60 - h * 60
        m = Math.floor(m);
        m < 10 ? m = '0' + m : m;
        let s = res / 1000 - m * 60 - h * 60 * 60
        s = Math.floor(s);
        s < 10 ? s = '0' + s : s;

        return { h, m, s }
    }
    return cutdown();

    // return (function() {
    //     let timer = null;
    //     clearInterval(timer);
    //     timer = setInterval(function() {


    //     }, 1000)
    // })()






}