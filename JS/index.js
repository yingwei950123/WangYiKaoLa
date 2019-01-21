/**
 * Created by Administrator on 2019/1/12.
 */
//顶部导航
$('#tel').mouseenter(function () {
    $('.erweima').show();
});
$('#tel').mouseleave(function () {
    $('.erweima').hide();
});
$('.more').mouseenter(function () {
    $(this).css('background-color','#fff').find('.list').show();
    $(this).find('.arr').css({
        transform: 'rotateZ(180deg)',
        transition: '0.5s'
    })
    // alert(1)
});
$('.more').mouseleave(function () {
    $(this).css('background-color','#000').find('.list').hide();
    $(this).find('.arr').css({
        transform: 'rotateZ(0deg)',
        transition: '0.5s'
    })
});
$('.more .list .erweima').mouseenter(function () {
    $(this).find('img').show();
});
$('.more .list .erweima').mouseleave(function () {
    $(this).find('img').hide();
});


//搜索框顶部固定
var sTOP = $('.search').offset().top;
$(window).scroll(function () {
    if ($('html,body').scrollTop() >= sTOP){
        $('.search').addClass('searchFixed');
        $('.searchTips').hide();
        $('.rightCar').hide();
        $('.leftLogo a').css({
            'background-size':'40%',
            height:40
        });

    }else {
        $('.search').removeClass('searchFixed');
        $('.searchTips').show();
        $('.rightCar').show();
        $('.leftLogo a').css({
            'background-size':'70%',
            height:65
        });
    }

});


// 侧边栏菜单事件
$('.mNav .slide .menuList .menu').mouseenter(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).find('.yuan').hide().end().siblings().find('.yuan').show();
    $(this).find('.mouseON').show().end().siblings().find('.mouseON').hide();
    $('.mNav .slide .menuItem .item').eq($(this).index()).show().siblings().hide();
});
$('.mNav .slide').mouseleave(function () {
    $('.mNav .slide .menuList .menu').removeClass('active');
    $(this).find('.yuan').show();
    $(this).find('.mouseON').hide();
    $('.mNav .slide .menuItem .item').hide();

});


// 限购时间函数
function limitTiem(ftime) {
    //获取相关元素
    iArr = $('.limitBuy .time i ');
    // 时间差值
    var nTime = new Date();
    var fuTime = new Date(ftime);
    var timeCha = fuTime.getTime() - nTime.getTime();
    if (timeCha < 0){
        clearInterval(limetDsq);
        return;
    }
    var hour = parseInt(timeCha/1000/60/60);
    var minutes = parseInt(timeCha/1000/60%60);
    var secounds = parseInt(timeCha/1000%60);
    if (hour<10){
        iArr.eq(0).text(0).next().text(hour);
    }else {
        iArr.eq(0).text(parseInt(hour/10)).next().text(hour%10);
    }
    if (minutes<10){
        iArr.eq(2).text(0).next().text(minutes);
    }else {
        iArr.eq(2).text(parseInt(minutes/10)).next().text(minutes%10);
    }
    if (secounds<10){
        iArr.eq(0).text(0).next().text(secounds);
    }else {
        iArr.eq(4).text(parseInt(secounds/10)).next().text(secounds%10);
    }
}
limitTiem('2019/1/26 0:0:0');
var limetDsq = setInterval(function () {
    limitTiem('2019/1/26 0:0:0');
},1000);


// 热门产品事件
$('.hot .hotconR li').mouseenter(function () {
    $(this).find('img').stop().animate({'width':'40%'},500).end().find('p').eq(0).hide();
    $(this).find('.fugai').stop().show();
});
$('.hot .hotconR li').mouseleave(function () {
    $(this).find('.fugai').stop().hide();
    $(this).find('img').stop().animate({'width':'50%'},500).end().find('p').eq(0).show();

});


//主体广告轮播图事件
var mbanner = {
    index: 0,
    slideRight: slideRight,
    slideLeft: slideLeft,
    dottedsSlide: dottedsSlide
}
var mTimer = null;
// 左侧按钮
$('.mBanner .btn span').eq(0).click(function () {
    mbanner.slideLeft($('.mBanner .dotteds li'),$('.mBanner .imgBox li'));
});
// 右侧按钮
$('.mBanner .btn span').eq(1).click(function () {
    mbanner.slideRight($('.mBanner .dotteds li'),$('.mBanner .imgBox li'));
});
// 自动轮播
mTimer = setInterval(function (){
    mbanner.slideRight($('.mBanner .dotteds li'),$('.mBanner .imgBox li'));
},1500);
// 鼠标进入清除定时器
$('.mBanner ').mouseenter(function () {
    clearInterval(mTimer);
    $('.mBanner .btn').css({
        'display':'block',
        'cursor':'pointer'
    });
});
// 鼠标离开恢复定时器
$('.mBanner ').mouseleave(function () {
    mTimer = setInterval(function (){
        mbanner.slideRight($('.mBanner .dotteds li'),$('.mBanner .imgBox li'));
    },1500);
    $('.mBanner .btn').css('display','none');

});
// 小圆点事件
$('.mBanner .dotteds li').click(function () {
    mbanner.dottedsSlide($(this),$('.mBanner .imgBox li'));
});



// 热门产品轮播图事件
var hotP = {
    index: 0,
    slideRight: slideRight,
    slideLeft: slideLeft,
    dottedsSlide: dottedsSlide
}
// 自动轮播
var hotTimer = setInterval(function (){
    hotP.slideRight($('.hot .dotteds li'),$('.hot .hotconL .img li'));
},1500);
//左边按钮
$('.hot .hotconBtnL span').eq(0).click(function () {
    hotP.slideLeft($('.hot .dotteds li'),$('.hot .hotconL .img li'));
});
// 右边按钮
$('.hot .hotconBtnL span').eq(1).click(function () {
    hotP.slideRight($('.hot .dotteds li'),$('.hot .hotconL .img li'));
});
// 鼠标进入清除定时器
$('.hotconL').mouseenter(function () {
    clearInterval(hotTimer);
    $('.hot .hotconBtnL').css({
        'display':'block',
        'cursor':'pointer'
    });
});
// 鼠标离开恢复定时器
$('.hotconL').mouseleave(function () {
    hotTimer = setInterval(function (){
        hotP.slideRight($('.hot .dotteds li'),$('.hot .hotconL .img li'));
    },1500);
    $('.hot .hotconBtnL').css('display','none');

});
// 最近热卖轮播
var hotR = {
    index: 0,
    slideRight: slideRight,
    slideLeft: slideLeft,
    dottedsSlide: dottedsSlide
}
var hotArr = [];
var timerArrs =[];
var makeupArrs = $('.makeup');
var len = makeupArrs.length;
for (var i = 0; i < len;i++){
    hotArr.push({
        index: 0,
        slideRight: slideRight,
        slideLeft: slideLeft,
        dottedsSlide: dottedsSlide
    });
}

for (var j = 0; j < makeupArrs.length; j++) {
    var fu = $('.makeup').eq(j);
    function fff(j, fu) {
        timerArrs[j] = setInterval((function (j, fu) {
            return function () {
                hotArr[j].slideRight(fu.find('i'), fu.find('.mrcon > ul'));
            }
        })(j, fu), 2000)
    }
    fff(j, fu)
    fu.find('.makeupright').mouseenter(function () {
        var num = ($(this).parent().parent().index() - 4) / 2
        clearInterval(timerArrs[num])
    })
    fu.find('.makeupright').mouseleave((function (j, fu) {
        var num = ($(this).parent().parent().index() - 4) / 2
        return function () {
            timerArrs[num] = fff(j, fu)
        }
    })(j, fu))
    fu.find('i').click((function (j, fu) {
        return function () {
            hotArr[j].dottedsSlide($(this), fu.find('.mrcon > ul'))
        }
    })(j, fu))
}
// 函数封装
//图片右侧按钮函数
function slideRight(dotEle,imgELe) {
    // console.log(3)
    // console.log(this.index)
    imgELe.eq(this.index).css('z-index',9);
    this.index++
    if (this.index == imgELe.length){
        this.index = 0;
    }
    imgELe.eq(this.index).css('z-index',10).stop().fadeIn(500).siblings().stop().fadeOut(500);
    dotEle.eq(this.index).addClass('active').siblings().removeClass('active');
}
// 左侧按钮函数
function slideLeft(dotEle,imgEle) {
    imgEle.eq(this.index).css('z-index',9);
    this.index--;
    if (this.index < 0){
        this.index = imgEle.length-1;
    }
    imgEle.eq(this.index).css('z-index',10).stop().fadeIn(500).siblings().stop().fadeOut(500);
    dotEle.eq(this.index).addClass('active').siblings().removeClass('active');
}
function dottedsSlide(dotEle,imgELe) {
    imgELe.eq(this.index).css('z-index',9);
    this.index = dotEle.index();
    dotEle.addClass('active').siblings().removeClass('active');
    imgELe.eq(this.index).css('z-index',10).stop().fadeIn(500).siblings().stop().fadeOut(500);
}


// 侧边栏事件
var mainTop = $('.main').offset().top;
console.log(mainTop)
$(window).scroll(function () {
    if ($(window).scrollTop() >= mainTop-50){
        $('.leftSide').show();
        $('.rightSide').show();
    }else {
        $('.leftSide').hide();
        $('.rightSide').hide();
    }
});
// 回到顶部
$('#goTop').click(function () {
    $('html,body').animate({
        scrollTop:0
    },1000);
});
$('.rightSide .sideCon').click(function () {
    var sTop = $('.mCon').eq($(this).index()).offset().top-50;
    $('html,body').animate({
        scrollTop:sTop
    },500);
});
$('.rightSide .item').click(function () {
    var sTop = $('.makeup').eq($(this).index()).offset().top-50;
    $('html,body').animate({
        scrollTop:sTop
    },500);
});
