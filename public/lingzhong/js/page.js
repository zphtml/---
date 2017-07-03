var isTouch = Modernizr.touch,
  isMobile = false,//区分移动端与PC端
  mobile = false,//区分手机端与平板
  w_width =  0,
  w_height = 0,
  $mtoph = 0,
  ST = 0,
  mItem = 0;

//移动端事件和PC事件的切换	
var _mousemove;
var _click;
var _mousedown;
var _mouseup;
if (Modernizr.touch) {
  _mousemove = "touchmove";
  _click = "touchend";
  _mousedown = "touchstart";
  _mouseup = "touchend";
} else {
  _mousemove = "mousemove";
  _click = "click";
  _mousedown = "mousedown";
  _mouseup = "mouseup";
};

function pageBox() {
  w_width = $(window).width();
  w_height = $(window).height();
  if($('.mtop').size()==0){
    $mtoph = 0;
  }else{
    $mtoph = $('.mtop').height();
  }
  if (w_width <= 1024) {
    isMobile = true;
  } else if (w_width > 1024) {
    isMobile = false;
  };
  if (w_width <= 640) {
    mobile = true;
  } else if (w_width > 640) {
    mobile = false;
  };
  $('.conpanel').css({'min-height':w_height-$mtoph});
};
pageBox();
$(window).resize(function () {
  pageBox();
});
$(function () {
  $(window).scroll(function () {
    ST = $(window).scrollTop();
  });
  $('#top').click(function(){
    $('html,body').stop().animate({scrollTop:0},500,"easeInOutExpo");
  });
  function getHash() {
    var hash = location.href.split("#")[1];
    if (hash) {
      setTimeout(function () { $("html,body").animate({ scrollTop: $("#" + hash).offset().top - $mtoph }, 20,'easeInOutExpo'); }, 10);
    }
  };
  getHash();
  $(document).on('click','.abnav a',function(e){
    var phash = $(this).attr('href').split("#")[1];
    if (phash) {
      setTimeout(function () { $("html,body").animate({ scrollTop: $("#" + phash).offset().top - $mtoph }, 80, 'easeInOutExpo'); }, 10);
    }
  });
  $('.musearch .btn').mouseenter(function(){
    $(this).parent().addClass('act');
  });
  $('.musearch').mouseleave(function(){
    $(this).removeClass('act');
  });

  $(document).on('click','.menu-handler',function(e){
    if(mItem == 0){
      $(this).addClass('active');
      if(isMobile){
        $('.menu-content').stop(true,true).fadeIn(300);
      }else{
        $('.menu').addClass('menushow');
        setTimeout(function(){
          $('.menushow .menu-nav2 a').addClass('show');
        },100);
        if($('.pagesider').size()!=0){
          $('.pagesider .menu').addClass('active');
        }else{
          $('.menu').removeClass('menu2');
        }
        if($('.pagesider').size()==0&&$('.header').size()==0){
          $('.menu').removeClass('menu2');
        }
      }
      if($('.header').size()!=0){
        $('.black').stop().fadeIn(600);
        $('.black2').stop().fadeIn(600);
      }
      mItem = 1;
    }else{
      $(this).removeClass('active');
      if(isMobile){
        $('.menu-content').stop(true,true).fadeOut(300);
      }else{
        $('.menushow .menu-nav2 a').removeClass('show');
        $('.menu').removeClass('menushow');
        if($('.pagesider').size()!=0){
          $('.pagesider .menu').removeClass('active');
        }
        if($('.pagesider').size()==0&&$('.header').size()==0){
          $('.menu').addClass('menu2');
        }
      }
      if($('.header').size()!=0){
        $('.black').stop().fadeOut(600);
        $('.black2').stop().fadeOut(600);
      }
      mItem = 0;
    }
  });
  $('.black').click(function(){
    $(this).stop().fadeOut(600);
    $('.black2').stop().fadeOut(600);
    mItem = 0;
    $('.menu-handler').removeClass('active');
    if(isMobile){
      $('.menu-content').stop(true,true).fadeOut(300);
    }else{
      $('.menushow .menu-nav2 a').removeClass('show');
      $('.menu').removeClass('menushow');
    }
  });
  $('.black2').click(function(){
    $(this).stop().fadeOut(600);
    $('.black').stop().fadeOut(600);
    mItem = 0;
    $('.menu-handler').removeClass('active');
    if(isMobile){
      $('.menu-content').stop(true,true).fadeOut(300);
    }else{
      $('.menushow .menu-nav2 a').removeClass('show');
      $('.menu').removeClass('menushow');
    }
  });
  $('.menu-nav2 a').each(function(i,e) {
    $(this).css({"transition":"600ms "+(i*100)+"ms"});
  });
});
//传参
function getUrlParam(url, name) {
  var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
  var matcher = pattern.exec(url);
  var items = null;
  if (null != matcher) {
    try {
      items = decodeURIComponent(decodeURIComponent(matcher[1]));
    } catch (e) {
      try {
        items = decodeURIComponent(matcher[1]);
      } catch (e) {
        items = matcher[1];
      }
    }
  }
  return items;
};
//img 尺寸
function setImgMax(img, imgW, imgH, tW, tH) {
  var tWidth = tW || w_width;
  var tHeight = tH || w_height;
  var coe = imgH / imgW;
  var coe2 = tHeight / tWidth;
  if (coe < coe2) {
    var imgWidth = tHeight / coe;
    img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
  } else {
    var imgHeight = tWidth * coe;
    img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
  };
};