
//点击更换颜色
$(".lz_ul li").eq(0).css({"background":"#e60012"});
$(".lz_ul li").eq(0).find("i,p").css("color","white");

$(".lz_ul li").click(function(){
    $(this).css({"background":"#e60012"});
    $(this).find("i,p").css("color","white");
    $(this).siblings().css("background","white");
    $(this).siblings().find("i").css("color","#e60012");
    $(this).siblings().find("p").css("color","#333");
});

    var $width = parseInt($(".renci").css("width"))+50;
    var $height = parseInt($(".renci").css("height"))+50;
    function resize() {
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
    $(".lz_baner").click(function(){
        $this = $(this);
        $div = $this.find("div");
        $div.eq(1).stop();
        $div.eq(1).css({ "top": "0px", "left": "0px", "width":$width, "height": $height});
        $div.eq(0).stop().animate({ "top": "-25px", "left": "-25px", "width": $width+"px", "height": $height+"px", "opacity": "0" }, 400);
        $div.eq(1).stop().animate({ "top": "-25px", "left": "-25px", "width": $width, "height": $height, "opacity": "1" }, 400);
        var $this_1 = $(this).parents("div").siblings().find(".lz_baner");
        var $div_1 = $this_1.find("div");
        $div_1.eq(0).stop().animate({ "top": "0", "left": "0", "width": $width, "height": $height, "opacity": "1" }, 400);
        $div_1.eq(1).stop().animate({ "top": "0", "left": "0", "width": $width, "height": $height, "opacity": "0" }, 400);
    })

//轮播
    $(function() {
        $('.dowebok').slidizle({
            loop: true,
            autoPlay: true,
            timeout: 3000
        });
    });
    //点击显示轮播图
 
$("body").click(function(){
　　　　$(".slider_box").fadeOut();
    $(".lz_infor").css("border","1px solid red");
});
$(".click_open").click(function(e){
     e.stopPropagation();//阻止冒泡到body
    $(".lz_infor").css("border","none");
    switch($(this).parents("ul").find("li:first span:last").text()){
        case "哔哩哔哩":{
            $(".box1").fadeIn();
            $(".box1 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/Rewrite.jpg')"
            );
            $(".box1 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/show-by-rock!!short!!.jpg')"
            );
            $(".box1 ul li").eq(2).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/哔哩哔哩动态落地页00.gif')"
            );
        }
        break;
        case "书旗小说":{
            $(".box1 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/0122-书旗落地页-原图.jpg')"
            );
            $(".box1 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/0207-书旗落地页-原图.jpg')"
            );
            $(".box1 ul li").eq(2).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/书旗效果图.jpg')"
            );
            $(".box1").fadeIn();
        }
            break;
        case "触宝电话":{
            $(".box2 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/触宝1019.jpg')"
            );
            $(".box2 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/触宝电话_看图王.jpg')"
            );
            $(".box2").fadeIn();
        }
            break;
        case "饿了么":{
            $(".box1 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/饿了么.jpg')"
            );
            $(".box1 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/饿了么-生鲜.jpg')"
            );
            $(".box1 ul li").eq(2).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/生鲜-饿了么设计稿.jpg')"
            );
            $(".box1").fadeIn();
        }
            break;
        case "高德地图":{
            $(".box1 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/高的地图按钮位置.jpg')"
            );
            $(".box1 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/高的地图新2.jpg')"
            );
            $(".box1 ul li").eq(2).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/高的地图新3.jpg')"
            );
            $(".box1").fadeIn();
        }
            break;
        case "秀色":{
            $(".box2 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/haixiu.jpg')"
            );
            $(".box2 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/落地页.jpg')"
            );
            $(".box2").fadeIn();
        }
            break;
        case "陌陌":{
            $(".box2 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/第一屏.jpg')"
            );
            $(".box2 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/陌陌.jpg')"
            );
            $(".box2").fadeIn();
        }
            break;
        case "蜻蜓FM":{
            $(".box1 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/蜻蜓-品牌效果图.jpg')"
            );
            $(".box1 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/蜻蜓-相声小品效果图.jpg')"
            );
            $(".box1 ul li").eq(2).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/效果图.jpg')"
            );
            $(".box1").fadeIn();
        }
            break;
        case "探探":{
            $(".box1 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/lvxing.jpg')"
            );
            $(".box1 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/探探.jpg')"
            );
            $(".box1 ul li").eq(2).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/探探1.jpg')"
            );
            $(".box1").fadeIn();
        }
            break;
        case "一点资讯":{
            $(".box1 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/一点资讯段子3.jpg')"
            );
            $(".box1 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/一点资讯高考1.jpg')"
            );
            $(".box1 ul li").eq(2).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/未标题-1.jpg')"
            );
            $(".box1").fadeIn();
        }
            break;
        case "有妖气":{
            $(".box2 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/U17_十万个冷笑话.jpg')"
            );
            $(".box2 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/有妖气效果图.jpg')"
            );
            $(".box2").fadeIn();
        }
            break;
        case "育学园":{
            $(".box1 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/育学园.jpg')"
            );
            $(".box1 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/育学园腹围.jpg')"
            );
            $(".box1 ul li").eq(2).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/育学园-孕妇饮食搭配.jpg')"
            );
            $(".box1").fadeIn();
        }
            break;
        case "懂球帝":{
            $(".box3 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/懂球帝.png')"
            );
            $(".box3").fadeIn();
        }
            break;
        case "百度外卖":{
            $(".box1 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/百度订餐.gif')"
            );
            $(".box1 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/百度外卖.jpg')"
            );
            $(".box1 ul li").eq(2).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/百度外卖-水果生鲜 ok.jpg')"
            );
            $(".box1").fadeIn();
        }
            break;
        case "美团外卖":{
            $(".box2 ul li").eq(0).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/美团外卖.jpg')"
            );
            $(".box2 ul li").eq(1).css(
                "backgroundImage","url('http://test.myushan.com//lingzhong/美团折扣.jpg')"
            );
            $(".box2").fadeIn();
        }
            break;
    }
　
　

});

$(".slider_box").click(function(e){//自己要阻止
　　e.stopPropagation();//阻止冒泡到body
});
    //点击切换
    $(".lz_ul li").click(function(){

        switch ($(this).attr("id")) {
            case "yy" :{
                $("#infor_yy").show();
                $("#infor_yy").siblings().hide();
                $("#infor_yy").attr("data","true");
                if( $("#infor_yy").attr("data") == "true") {
                    $("#infor_yy").find(".banner_icon_box").css("bottom","0");
                    $("#infor_yy").find(".banner_icon_box ").removeClass("move_top");
                }else {
                    $("#infor_yy").find(".banner_icon_box").addClass("move_top");
                }
            }
                break;
            case "sj" :{
                $("#infor_sj").show();
                $("#infor_sj").siblings().hide();
                $("#infor_sj").find(".banner_icon_box").addClass("move_top");

                if( $("#infor_sj").attr("data") == "true") {
                    $("#infor_sj").find(".banner_icon_box").css("bottom","0");
                    $("#infor_sj").find(".banner_icon_box ").removeClass("move_top");
                }else {
                    $("#infor_sj").find(".banner_icon_box").addClass("move_top");
                    $("#infor_sj").attr("data","true");
                }
            }
                break;
            case "zx" :{
                $("#infor_zx").show();
                $("#infor_zx").siblings().hide();
                $("#infor_zx").find(".banner_icon_box").addClass("move_top");
                if( $("#infor_zx").attr("data") == "true") {
                    $("#infor_zx").find(".banner_icon_box").css("bottom","0");
                    $("#infor_zx").find(".banner_icon_box ").removeClass("move_top");
                }else {
                    $("#infor_zx").find(".banner_icon_box").addClass("move_top");
                    $("#infor_zx").attr("data","true");
                }
            }
                break;
            case "cx" :{
                $("#infor_cx").show();
                $("#infor_cx").siblings().hide();
                $("#infor_cx").find(".banner_icon_box").addClass("move_top");

                if( $("#infor_cx").attr("data") == "true") {
                    $("#infor_cx").find(".banner_icon_box").css("bottom","0");
                    $("#infor_cx").find(".banner_icon_box ").removeClass("move_top");
                }else {
                    $("#infor_cx").find(".banner_icon_box").addClass("move_top");
                    $("#infor_cx").attr("data","true");
                }
            }
                break;
            case "cy" :{
                $("#infor_cy").show();
                $("#infor_cy").siblings().hide();
                $("#infor_cy").find(".banner_icon_box").addClass("move_top");

                if( $("#infor_cy").attr("data") == "true") {
                    $("#infor_cy").find(".banner_icon_box").css("bottom","0");
                    $("#infor_cy").find(".banner_icon_box ").removeClass("move_top");
                }else {
                    $("#infor_cy").find(".banner_icon_box").addClass("move_top");
                    $("#infor_cy").attr("data","true");
                }
            }
                break;
            case "qt" :{
                $("#infor_qt").show();
                $("#infor_qt").siblings().hide();
                $("#infor_qt").find(".banner_icon_box").addClass("move_top");

                if( $("#infor_qt").attr("data") == "true") {
                    $("#infor_qt").find(".banner_icon_box").css("bottom","0");
                    $("#infor_qt").find(".banner_icon_box ").removeClass("move_top");
                }else {
                    $("#infor_qt").find(".banner_icon_box").addClass("move_top");
                    $("#infor_qt").attr("data","true");
                }
            }
                break;
            case "fw" :{
                $("#infor_fw").show();
                $("#infor_fw").siblings().hide();
                $("#infor_fw").find(".banner_icon_box").addClass("move_top");

                if( $("#infor_fw").attr("data") == "true") {
                    $("#infor_fw").find(".banner_icon_box").css("bottom","0");
                    $("#infor_fw").find(".banner_icon_box ").removeClass("move_top");
                }else {
                    $("#infor_fw").find(".banner_icon_box").addClass("move_top");
                    $("#infor_fw").attr("data","true");
                }
            }
                break;

        }
    })
