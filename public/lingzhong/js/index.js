$(document).ready(function () {
  var $row = $('.row'),
    $rowh = $('.rowh')
  $page = $('.page'),
    $bannerSlide = $('.bannerslide'),
    $bannerPic = $('.banner .pic'),
    $bannerItem = $('.banner .item'),
    $video = $('.myvideo')
  $picvideo = $('.pics-video'),
    $pvpic = $('.pics-video .pic');

  var sr_width = 0,
    pt_height = 0,
    ci = 1,
    sci = 1;

  function init() {
    $rowh.css({ height: w_height });
    $bannerItem.css({ height: w_height });
    setImgMax($bannerPic, 1720, 950, w_width, w_height);
    $page.css({ height: w_height });
    setImgMax($video, 640, 950, $(".movie").width(), w_height);
    setImgMax($('.myvideo2'), 990, 440, $(".video2").width(), $(".video2").height());
    sr_width = $('.sr').width();
    $picvideo.css({ height: w_height });
    setImgMax($pvpic, 640, 950, sr_width, w_height);
    if (w_width <= 1366) {
        pt_height = 318;
    } else {
      pt_height = 410;
    }
    $('.content').css({ top: -(ci - 1) * w_height });
    $('.sl').css({ marginTop: -(sci - 1) * w_height });
    $('.sr').css({ marginTop: -(sci - 1) * w_height });
    $('.itoL .numbox').css({ marginTop: -(sci - 1) * pt_height });
    $('.itoR .tibox').css({ marginTop: -(sci - 1) * pt_height });
    if (isMobile) {
      $('.menu').removeClass('menu2 ');
    } else {
      $('.menu').addClass('menu2');
    }
  };
  init();
  $(window).resize(function () {
    init();
  });
  function wheel(event) {
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) delta = -delta;
    } else if (event.detail) {
      delta = -event.detail / 3;
    }
    if (delta) {
      mouseWheel(delta);
    }
  };

  if (window.addEventListener)
    window.addEventListener('DOMMouseScroll', wheel, false);
  window.onmousewheel = document.onmousewheel = wheel;

  /*$(document).keydown(
   function(e){keyDown(e);
   });*/

  var ispage = false,
    isbackrow = false;

  function mouseWheel(delta) {
    var dir = delta > 0 ? "up" : "down";
    var $actived = $(".row.active");
    var activeIndex = parseInt($actived.attr('index'));
    var numOfChildren = $(".row").length - 1;
    if (activeIndex == 2 && isbackrow == false) {
      ispage = true;
      isbackrow = true;
    }
    if (dir == "down" && activeIndex < numOfChildren && canRoll && ispage == false) {
      jumpRow(false);
      isbackrow = false;
    } else if (dir == "up" && activeIndex > 1 && canRoll && ispage == false) {
      jumpRow(true);
      isbackrow = false;
    }
  };

  function keyDown(e) {
    var keycode = e.which || e.keyCode;
    var $actived = $(".row.active");
    var activeIndex = parseInt($actived.attr('index'));
    var numOfChildren = $(".row").length - 1;
    if ((keycode == 65 || keycode == 38 || keycode == 87 || keycode == 33) && activeIndex > 1 && canRoll) {
      jumpRow(true);
      return false;
    } else if ((keycode == 40 || keycode == 83 || keycode == 68 || keycode == 34 && canRoll) && activeIndex < numOfChildren && canRoll) {
      jumpRow(false);
      return false;
    }
  };

  function jumpRow(up) {
    var $actived = $(".row.active");
    var activeIndex = parseInt($actived.attr('index'));
    showRow(activeIndex + (up ? -1 : 1));
  };

  var curIndex = 1,
    canRoll = true;
  // var video1 = document.getElementById("svideo1"), video2 = document.getElementById("svideo2"), video3 = document.getElementById("svideo3");
  var isplayon = true;
  var DEFAULT_VERSION = "8.0";
  var ua = navigator.userAgent.toLowerCase();
  var isIE = ua.indexOf("msie") > -1;
  var safariVersion;
  if (isIE) {
    safariVersion = ua.match(/msie ([\d.]+)/)[1];
    if (safariVersion <= DEFAULT_VERSION) {
      isplayon = false;
    }
  };
  function showRow(index) {
    if (curIndex == index) return;
    if (canRoll == false) return;
    canRoll = false;
    isover = false;
    $("#s" + curIndex).removeClass("active").addClass("disappear");
    $("#boxsider").removeClass("pagesider1 pagesider2 pagesider3");
    $("#boxsider").addClass("pagesider" + index);
    if (index == 2 && isplayon) {
      isover = true;
      // video1.play(); video2.pause(); video3.pause();
    } else if (isplayon) {
      // video1.pause(); video2.pause(); video3.pause();
    }

    if (index > 1) {
      $("#s2,#s3").css("opacity","1");
      if (!isMobile) {
        $('.logobox').show();
        $('.menu').removeClass('menu2');
        $('.menu-handler').removeClass('active');
        $('.menushow .menu-nav2 a').removeClass('show');
        $('.menu').removeClass('menushow');
        mItem = 0;
      }
      setTimeout(function () {
        $("#boxsider").addClass("pagesider");
        $('.cebian').css('height','64px');
        $('.txx1').css('display','none');
        $('.navn').css('display','block');
      }, 100);
      if( $(".move_infor").attr("data") == "true") {
        $(".move_infor").css("bottom","0");
        $(".move_infor").removeClass("move_top");
      }else {
        $(".move_infor").addClass("move_top");
        $(".move_infor").attr("data","true");
      }
      $(".icon").addClass("st-top");
    } else {
      $("#boxsider").removeClass("pagesider");
      $('.cebian').css('height','90px');
      $('.navn').css('display','none');
      $('.txx1').css('display','block');
      if (!isMobile && !$('.menu-handler').hasClass('active')) {
        $('.menu').addClass('menu2');
        setTimeout(function () {
          $('.logobox').hide();
        }, 800);
      }
    }
    /*setTimeout((function(){
     $("#boxsider").addClass("pagesider"+index);
     }),400);*/
    $("#s" + index).removeClass("disappear").addClass("active");
    ci = index;
    var t = -(index - 1) * w_height;
    /*	if(index==2){
     $('.itoL .numbox').stop().animate({'margin-top':0},600,"easeOutQuad");
     setTimeout(function(){
     $('.itoR .tibox').stop().animate({'margin-top':0},600,"easeOutQuad");
     },100);
     }*/
    if (index == 3) {
      var hnum = jQuery("#s3").innerHeight();
      t = (-w_height) - hnum;
      $('.menu-handler').removeClass('active');
      $('.menushow .menu-nav2 a').removeClass('show');
      $('.menu').removeClass('menushow');
      mItem = 0;
      if ($('.pagesider').size() != 0) {
        $('.pagesider .menu').removeClass('active');
      }

    }
    //ci = index;
    $('.content').stop().animate({ top: t }, 800, "easeInOutCirc");
    //eval("s"+index+"_run()");
    setTimeout(function () {
      canRoll = true;
    }, 1000);
    curIndex = index;
  }
  //var s1_run = s2_run = s3_run = s4_run = s5_run = s6_run = s7_run = function(){};

  /*$bannerSlide.slick({
   arrows: false,
   dots:true,
   autoplay: true,
   speed: 800,
   autoplaySpeed: 5000,
   pauseOnHover: false,
   cssEase: 'linear'
   });
   $bannerSlide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
   $('.itTx li').removeClass('show').eq(nextSlide).addClass('show');
   });*/
  $('.bannerslide .item').eq(1).addClass('isOut');
  $('.bannerslide .item').eq(0).addClass('isCurrent');
  $('.ip-controls li').eq(0).addClass('act');
  $('.bannerslide .item').each(function (i, e) {
    $(this).css({ 'z-index': $('.bannerslide .item').length - i });
  });
  var step = 0,
    aItem = $('.bannerslide .item').length,
    nstep = 0,
    ostep = 0,
    isother = true,
    batimer;
  function changsBanner() {
    $('.bannerslide .item').css({ width: 100 + "%" });
    $('.bannerslide .item').removeClass('isOut').eq(step).addClass('isOut');
    $('.ip-controls li').removeClass('act').eq(step).addClass('act');
    $('.itTx li').removeClass('show').eq(step).addClass('show');
    $('.bannerslide .isCurrent').stop(true, true).animate({ width: 0 }, 800, function () {
      $('.bannerslide .isOut').addClass('isCurrent').siblings().removeClass('isCurrent');
      $('.bannerslide .item').removeClass('isOut').eq(nstep).addClass('isOut');
      isother = true;
    });
    ostep = step;
  };
  $('.ip-controls li').click(function () {
    step = $(this).index();
    if (ostep == step) return;
    if (isother == false) return;
    isother = false;
    nstep = step >= aItem - 1 ? 0 : step + 1;
    changsBanner();
  });
  function isBannerAuto() {
    batimer = setTimeout(function () {
      if (isother == false) return;
      isother = false;
      step = step >= aItem - 1 ? 0 : step + 1;
      nstep = step <= 0 ? aItem - 1 : step - 1;
      changsBanner();
      isBannerAuto();
    }, 5000);
  };
  isBannerAuto();
  var isplay = true;
  $('.play-pause-btn').click(function () {
    if (isplay == true) {
      clearTimeout(batimer);
      isplay = false;
      $(this).addClass('act');
    } else {
      isBannerAuto();
      isplay = true;
      $(this).removeClass('act');
    }
  });

  var isover = true;
  $('#s2').mousewheel(function (event, delta) {
    var $show = $('.page.show');
    var activeIndex = parseInt($show.attr('page-index'));
    var numOfChildren = $('.page').length / 2;

    if (delta < 0 && activeIndex < numOfChildren && canRoll2) {
      jumpPage(false);
    } else if (delta > 0 && activeIndex > 1 && canRoll2) {
      jumpPage(true);
    } else if (delta < 0 && activeIndex >= numOfChildren && canRoll2) {
      ispage = false;
    } else if (delta > 0 && activeIndex <= 1 && canRoll2) {
      ispage = false;
    }
  });

  $('.mouse').click(function () {
    var $show = $('.page.show');
    var activeIndex = parseInt($show.attr('page-index'));
    var numOfChildren = $('.page').length / 2;

    if (activeIndex < numOfChildren && canRoll2 && isover) {
      jumpPage(false);    } else if (activeIndex = numOfChildren && canRoll2 && isover) {
      ispage = false;
      jumpRow(false);
    } else {
      return;
    }
  });
  $('.page-controls li').click(function () {
    var index = parseInt($(this).attr('data-num'));
    showPage(index);
  });
  $('.st-top').click(function () {
    var $show = $('.page.show');
    var activeIndex = parseInt($show.attr('page-index'));
    var numOfChildren = $('.page').length / 2;

    if (activeIndex > 1 && canRoll2 && isover) {
      jumpPage(true);
    } else if (activeIndex <= 1 && canRoll2 && isover) {
      ispage = false;
      jumpRow(true);
    }
  });
  $('.st-bottom').click(function () {
    var $show = $('.page.show');
    var activeIndex = parseInt($show.attr('page-index'));
    var numOfChildren = $('.page').length / 2;
    if (activeIndex < numOfChildren && canRoll2 && isover) {
      jumpPage(false);
    } else if (activeIndex >= numOfChildren && canRoll2 && isover) {
      ispage = false;
      jumpRow(false);
    }
  });
  function jumpPage(up) {
    var $show = $('.page.show');
    var activeIndex = parseInt($show.attr('page-index'));
    showPage(activeIndex + (up ? -1 : 1));
  };
  var curIndex2 = 1,
    canRoll2 = true;

  function showPage(index) {
    if (curIndex2 == index) return;
    if (canRoll2 == false) return;
    canRoll2 = false;
    $(".page" + curIndex2).removeClass("show").addClass("hide");
    $(".page" + index).removeClass("hide").addClass("show");

    if (index == 4) {
      changePicsVideo(true);
    } else {
      clearTimeout(timer);
      changePicsVideo(false);
    }
/*    if (index == 2 && isplayon) {
      video1.pause(); video2.play(); video3.pause();
    }
    else if (index == 3 && isplayon) {
      video1.pause(); video2.pause(); video3.play();
    }
    else if (index == 1 && isplayon) {
      video1.play(); video2.pause(); video3.pause();
    }
    else if (isplayon) {
      video1.pause(); video2.pause(); video3.pause();
    }*/
    sci = index;
    var p = -(index - 1) * w_height,
      pt = -(index - 1) * pt_height;
    $('.sl').stop().animate({ 'margin-top': p }, 800, "easeOutQuad");
    $('.itoL .numbox').stop().animate({ 'margin-top': pt }, 600, "easeOutQuad");
    setTimeout(function () {
      $('.sr').stop().animate({ 'margin-top': p }, 800, "easeOutQuad");
      $('.itoR .tibox').stop().animate({ 'margin-top': pt }, 600, "easeOutQuad");
    }, 100);
    setTimeout(function () {
      canRoll2 = true;
    }, 1000);
    curIndex2 = index;
  };

  var pvItem = 0,
    pvnum = $('.pics-video li').length,
    timer;

  $('.pics-video li').each(function (i, e) {
    $(this).css({ 'z-index': pvnum - i });
  });

  function changePicsVideo(play) {
    if (play == true) {
      $('.pics-video li').hide().eq(pvItem).show();
      timer = setTimeout(function () {
        pvItem++;
        if (pvItem > pvnum - 1) {
          pvItem = 0;
        }
        changePicsVideo(true);
      }, 100);
    } else {
      return;
    }
  };
  $('.pics-video').mouseenter(function () {
    clearTimeout(timer);
    changePicsVideo(false);
  }).mouseleave(function () {
    changePicsVideo(true);
  });

})