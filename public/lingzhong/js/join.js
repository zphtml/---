//选择招聘
var fw = location.href.substring(location.href.indexOf("?")+1);
if(fw == 1) {
    $("#sem").addClass("scale");
    $("#sem").siblings("li").removeClass("scale");
    $(".infor_sem").show().siblings().hide();
}else if(fw == 2) {
    $("#xsem").addClass("scale");
    $("#xsem    ").siblings("li").removeClass("scale");
    $(".infor_xsem").show().siblings().hide();
}else if(fw == 3) {
    $("#xs").addClass("scale");
    $("#xs").siblings("li").removeClass("scale");
    $(".infor_xs").show().siblings().hide();
}else if(fw == 4) {
    $("#hlw").addClass("scale");
    $("#hlw").siblings("li").removeClass("scale");
    $(".infor_hlw").show().siblings().hide();
}else if(fw == 5) {
    $("#sw").addClass("scale");
    $("#sw").siblings("li").removeClass("scale");
    $(".infor_sw").show().siblings().hide();
}else if(fw == 6) {
    $("#sj").addClass("scale");
    $("#sj").siblings("li").removeClass("scale");
    $(".lz_ul").animate({"margin-left":"-180px"},300);
    $(".infor_sj").show().siblings().hide();
}
//点击切换

$(".site div").click(function(){
    if($(this).find("a").attr("class") == "bj") {
        initMap();
        $(this).find("a").css("color","#e60012").parents().find(".right_site a").css("color","#333");
    }else {
        hinitMap();
        $(this).find("a").css("color","#e60012").parents().find(".left_site a").css("color","#333");
    }
})
//创建和初始化地图函数：北京
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件

}
//创建和初始化地图函数：杭州
function hinitMap(){
    hcreateMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件

}
//创建地图函数： //b北京
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(116.354000,40.073206);//定义一个中心点坐标
    // var point = new BMap.Point(116.348668,40.074306);
    map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
    var pt = new BMap.Point(116.353050,40.073416);
    var myIcon = new BMap.Icon("http://test.myushan.com//lingzhong/%E5%9C%B0%E7%82%B9%20%281%29.png", new BMap.Size(60,40));  //定义自己的标注
    var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
    map.addOverlay(marker2);
}
//创建地图函数： //杭州
function hcreateMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(120.11693,30.307187);//定义一个中心点坐标
    // var point = new BMap.Point(116.348668,40.074306);
    map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
    var pt = new BMap.Point(120.11713,30.307187);
    var myIcon = new BMap.Icon("http://test.myushan.com//lingzhong/%E5%9C%B0%E7%82%B9%20%281%29.png", new BMap.Size(60,40));  //定义自己的标注
    var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
    map.addOverlay(marker2);
}
//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
}


//创建InfoWindow
function createInfoWindow(i){
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
    return iw;
}
//创建一个Icon
function createIcon(json){
    var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
    return icon;
}

initMap();//创建和初始化地图
//点击切换
var bodyHeight = parseInt($("body").css("height"));
$(".lz_man").css("height",bodyHeight);
$(document).on("click",".lz-right .lz_btn",function(){
    if($(this).attr("id") == "lx_rencai") {
        $(".rencai_sj").show();
        $(".lianxi_sj").hide();
        $(".lz_left_man").animate({ "margin-top": 0}, 400);
        $(this).attr("data","true");
        $(this).siblings().attr("data","false");
    }else {
        $(".lianxi_sj").show();
        $(".rencai_sj").hide();
        $(".lz_left_man").animate({ "margin-top": "-"+bodyHeight}, 400);
        $(".lianxi_box").animate({ "margin-top": 0}, 400);
        $(this).attr("data","true");
        $(this).siblings().attr("data","false");
    }
});
//点击切换
$(document).on("click","ul.lz_ul>li",function(){
    $(this).addClass("scale").siblings("li").removeClass("scale");
    switch($(this).attr("id")){
        case"sem":{
            $(".infor_sem").show().siblings().hide();
            if( $(".infor_sem").attr("data") == "true") {
                $(".infor_sem").css("bottom","0");
                $(".infor_sem").removeClass("move_top");
            }else {
                $(".infor_sem").addClass("move_top");
                $(".infor_sem").attr("data","true");
            }
        }
            break;
        case"xsem":{
            $(".infor_xsem").show().siblings().hide();
            if( $(".infor_xsem").attr("data") == "true") {
                $(".infor_xsem").css("bottom","0");
                $(".infor_xsem").removeClass("move_top");
            }else {
                $(".infor_xsem").addClass("move_top");
                $(".infor_xsem").attr("data","true");
            }
        }
            break;
        case"xs":{
            $(".infor_xs").show().siblings().hide();
            if( $(".infor_xs").attr("data") == "true") {
                $(".infor_xs").css("bottom","0");
                $(".infor_xs").removeClass("move_top");
            }else {
                $(".infor_xs").addClass("move_top");
                $(".infor_xs").attr("data","true");
            }
        }
            break;
        case"hlw":{
            $(".infor_hlw").show().siblings().hide();
            if( $(".infor_hlw").attr("data") == "true") {
                $(".infor_hlw").css("bottom","0");
                $(".infor_hlw").removeClass("move_top");
            }else {
                $(".infor_hlw").addClass("move_top");
                $(".infor_hlw").attr("data","true");
            }
        }
            break;
        case"sw":{
            $(".infor_sw").show().siblings().hide();
            if( $(".infor_sw").attr("data") == "true") {
                $(".infor_sw").css("bottom","0");
                $(".infor_sw").removeClass("move_top");
            }else {
                $(".infor_sw").addClass("move_top");
                $(".infor_sw").attr("data","true");
            }
        }
            break;
        case"sj":{
            $(".infor_sj").show().siblings().hide();
            if( $(".infor_sj").attr("data") == "true") {
                $(".infor_sj").css("bottom","0");
                $(".infor_sj").removeClass("move_top");
            }else {
                $(".infor_sw").addClass("move_top");
                $(".infor_sw").attr("data","true");
            }
        }
            break;
    }
});
var $width = parseInt($(".renci").css("width"))+50;
var $height = parseInt($(".renci").css("height"))+50;
function resize() {
    bodyHeight =  parseInt($("body").css("height"));
    $(".lz_man").css("height",bodyHeight);
    if( $(".lz_rencai").attr("data") == "true") {
        $(".lz_left_man").animate({ "margin-top": 0}, 400);
    }else {
        $(".lz_left_man").animate({ "margin-top": "-"+bodyHeight}, 400);
        $(".lianxi_box").animate({ "margin-top": 0}, 400);
    }
    $width = parseInt($(".renci").css("width")) + 50;
    $height = parseInt($(".renci").css("height")) + 50;
    $(".rencai_box div:first,.lx_box div:first ").css({
        width: $(".renci").css("width"),
        height: $(".renci").css("height")
    })
    $(".rencai_box div:last,.lx_box div:last ").css({
        width:$width,
        height: $height
    })
};
 window.onresize = throttleV2(resize, 200, 300);
var $this = $(".lz_baner").eq(0);
var $div = $this.find("div");
$div.eq(1).stop();
$div.eq(1).css({ "top": "0px", "left": "0px", "width":$width, "height": $height});
$div.eq(0).stop().animate({ "top": "-25px", "left": "-25px", "width": $width+"px", "height": $height+"px", "opacity": "0" }, 400);
$div.eq(1).stop().animate({ "top": "-25px", "left": "-25px", "width": $width, "height": $height, "opacity": "1" }, 400);
$(".lz_btn").click(function(){
    $this = $(this).find(".lz_baner");
    $div = $this.find("div");
    $div.eq(1).stop();
    $div.eq(1).css({ "top": "0px", "left": "0px", "width":$width, "height": $height});
    $div.eq(0).stop().animate({ "top": "-25px", "left": "-25px", "width": $width+"px", "height": $height+"px", "opacity": "0" }, 400);
    $div.eq(1).stop().animate({ "top": "-25px", "left": "-25px", "width": $width, "height": $height, "opacity": "1" }, 400);
    var $this_1 = $(this).siblings().find(".lz_baner");
    var $div_1 = $this_1.find("div");
    $div_1.eq(0).stop().animate({ "top": "0", "left": "0", "width": $width, "height": $height, "opacity": "1" }, 400);
    $div_1.eq(1).stop().animate({ "top": "0", "left": "0", "width": $width, "height": $height, "opacity": "0" }, 400);
});
//点击滑动
$(".right_btn").click(function(){
    $(".lz_ul").animate({"margin-left":"-180px"},300);
})
$(".left_btn").click(function(){
    $(".lz_ul").animate({"margin-right":"-180px","margin-left":"0px"},300)
})
//点击加入
$("#sw").click(function(){
    $(".lz_ul").animate({"margin-left":"-180px"},300);
});
$("#xs,#xsem").click(function(){
    if($(".lz_ul").css("margin-left") == "-180px") {
        $(".lz_ul").animate({"margin-right":"-180px","margin-left":"0px"},300)
    }
})