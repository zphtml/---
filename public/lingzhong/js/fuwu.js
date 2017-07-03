//判断当前进入页面
var $this = "";
var $div = "";
var bodyHeight = parseInt($("body").css("height"));
 var fw = location.href.substring(location.href.indexOf("?")+1);
if(fw == "1") {
     $this = $(".lz_baner").eq(0);
     $div = $this.find("div");
    $(".yx").animate({ "margin-top": 0}, 400);
    $(".yinxiao_box ").find(".lz_til >img").show();
    $(".yinxiao_box ").siblings("div").find(".lz_til >img").hide();
}else if(fw == "2"){
    $this = $(".lz_baner").eq(1);
    $div = $this.find("div");
    $(".yx").animate({ "margin-top": "-"+bodyHeight}, 400);
    $(".cp_box").animate({ "margin-top": 0}, 400);
    $(".xiaoguo ").find(".lz_til >img").show();
    $(".xiaoguo ").siblings("div").find(".lz_til >img").hide();
}else if(fw == "3"){
    $this = $(".lz_baner").eq(2);
    $div = $this.find("div");
    $(".move").addClass("txt_move");
    $(".yx").animate({ "margin-top": "-"+(2*bodyHeight)}, 400);
    $(".chanpin ").find(".lz_til >img").show();
    $(".chanpin ").siblings("div").find(".lz_til >img").hide();
}else {
    $this = $(".lz_baner").eq(0);
    $div = $this.find("div");
    $(".yx").animate({ "margin-top": 0}, 400);
    $(".yinxiao_box ").find(".lz_til >img").show();
    $(".yinxiao_box ").siblings("div").find(".lz_til >img").hide();
}

// 点击变色

$(" #about .centerSub").click(function(event) {
    $(this).css("background","#e60012");
    $(this).parents("div.rec").siblings('div').find(".centerSub").css("background","#333");
});
// 点击左侧更换
    var $Num = (parseInt($(".rec").css("width"))+3);
    $(".lz_fw").css("height",bodyHeight);
    $(document).on("click", ".lz-right>.lz_png", function () {
        $(this).find(".lz_til >img").show();
        $(this).siblings("div").find(".lz_til >img").hide();
        bodyHeight =  parseInt($("body").css("height"));
        $(".lz_fw").css("height",bodyHeight);
        switch ($(this).attr("id")) {
            case "yx":
            {
                $(".yx").animate({ "margin-top": 0}, 400);
                $(this).attr("data","true");
                $(this).siblings().attr("data","false");
            }
                break;
            case"xg":
            {
                $(".yx").animate({ "margin-top": "-"+bodyHeight}, 400);
                $(".cp_box").animate({ "margin-top": 0}, 400);
                $(this).attr("data","true");
                $(this).siblings().attr("data","false");
                $(".line_left1").addClass("move_left");
                $(".line_left2").addClass("move_left2");
                $(".line_right1").addClass("move_right1");
                $(".line_right2").addClass("move_right2");
                $(".com_line_left").addClass("line_opct");
                $(".com_line_right").addClass("line_opct");
                $(".linr_right_text").addClass("text_opcity");
            }
                break;
            case"cp":
            {
                $(".move").addClass("txt_move");
                $(".yx").animate({ "margin-top": "-"+(2*bodyHeight)}, 400);
                $(this).attr("data","true");
                $(this).siblings().attr("data","false");
            }
                break;
        }

    })
    var $width = parseInt($(".yinxiao").css("width")) + 50;
    var $height = parseInt($(".yinxiao").css("height")) + 50;
    function resize() {
        bodyHeight =  parseInt($("body").css("height"));
        $(".lz_fw").css("height",bodyHeight);
       if( $(".yinxiao ").attr("data") == "true") {
           $(".yx").animate({ "margin-top": 0}, 400);
       }else if($(".xiaoguo").attr("data") == "true") {
           $(".yx").animate({ "margin-top": "-"+bodyHeight}, 400);
           $(".cp_box").animate({ "margin-top": 0}, 400);
       }else if($(".chanpin").attr("data") == "true") {
           $(".yx").animate({ "margin-top": "-"+(2*bodyHeight)}, 400);
       }
        $width = parseInt($(".yinxiao").css("width")) + 50;
        $height = parseInt($(".yinxiao").css("height")) + 50;
        $(".yinxiao_box div:first,.xiaoguo_box div:first,.chanpin_box div:first").css({
            width: $(".yinxiao").css("width"),
            height: $(".yinxiao").css("height")
        })
        $(".yinxiao_box div:last,.xiaoguo_box div:last,.chanpin_box div:last ").css({
            width: $width,
            height: $height
        })
         $Num = (parseInt($(".rec").css("width"))+2);
        $(".rec1").css("left",0);
        $(".rec2").css("left",$Num);
        $(".rec3").css("left",2*$Num);
        $(".rec4").css({"top":$Num,"left":0});
        $(".rec5").css({"left":$Num,"top":$Num});
        $(".rec6").css({"left":2*$Num,"top":$Num});
        $(".rec").find(".topSub").animate({"top": "0"});
        $(".rec").find(".leftSub").animate({"left": "0"});
    };
     window.onresize = throttleV2(resize, 200, 300);
    $div.eq(1).stop();
    $div.eq(1).css({"top": "0px", "left": "0px", "width": $width, "height": $height});
    $div.eq(0).stop().animate({
        "top": "-25px",
        "left": "-25px",
        "width": $width + "px",
        "height": $height + "px",
        "opacity": "0"
    }, 400);
    $div.eq(1).stop().animate({
        "top": "-25px",
        "left": "-25px",
        "width": $width,
        "height": $height,
        "opacity": "1"
    }, 400);
    $(".lz_btn").click(function () {
        $this = $(this).find(".lz_baner");
        $div = $this.find("div");
        $div.eq(1).stop();
        $div.eq(1).css({"top": "0px", "left": "0px", "width": $width, "height": $height});
        $div.eq(0).stop().animate({
            "top": "-25px",
            "left": "-25px",
            "width": $width + "px",
            "height": $height + "px",
            "opacity": "0"
        }, 400);
        $div.eq(1).stop().animate({
            "top": "-25px",
            "left": "-25px",
            "width": $width,
            "height": $height,
            "opacity": "1"
        }, 400);
        var $this_1 = $(this).siblings().find(".lz_baner");
        var $div_1 = $this_1.find("div");
        $div_1.eq(0).stop().animate({"top": "0", "left": "0", "width": $width, "height": $height, "opacity": "1"}, 400);
        $div_1.eq(1).stop().animate({"top": "0", "left": "0", "width": $width, "height": $height, "opacity": "0"}, 400);
        $div_1.eq(2).stop().animate({"top": "0", "left": "0", "width": $width, "height": $height, "opacity": "1"}, 400);
        $div_1.eq(3).stop().animate({"top": "0", "left": "0", "width": $width, "height": $height, "opacity": "0"}, 400);
    })


    //点击变色
    $(".rec2").css("left",$Num);
    $(".rec3").css("left",2*$Num);
    $(".rec4").css("top",$Num);
    $(".rec5").css({"left":$Num,"top":$Num});
    $(".rec6").css({"left":2*$Num,"top":$Num});
    $("#rec1").find(".topSub").animate({"top": -$Num});
    $("#rec1").find(".leftSub").animate({"left": $Num});
    $("#rec1").animate({"left": -$Num});
        $(".rec").click(function () {
            switch ($(this).attr("id")) {
                case "rec1":{
                    $("#rec3").attr("data","1");
                    $("#rec4").attr("data","1");
                    $("#rec5").attr("data","1");
                    $("#rec6").attr("data","1");
                    if($(this).attr("data") == "1") {
                        $(this).find(".topSub").animate({"top": -$Num});
                        $(this).find(".leftSub").animate({"left": $Num});
                        $(this).animate({"left": -$Num});
                        $(this).siblings().find(".topSub").animate({"top": "0"});
                        $(this).siblings().find(".leftSub").animate({"left": "0"});
                        $("#rec3").animate({"left": 2*$Num});
                        $("#rec4").animate({"left": "0"});
                        $("#rec6").animate({"left": 2*$Num });
                        $(this).attr("data","0");
                    }else {
                        $(this).find(".topSub").animate({"top": "0"});
                        $(this).find(".leftSub").animate({"left": "0"});
                        $(this).animate({"left": "0"});
                        $(this).attr("data","1");
                        $("#rec3").animate({"left": 2*$Num});
                        $("#rec4").animate({"left": "0"});
                        $("#rec6").animate({"left": 2*$Num});
                        $(this).siblings("div").attr("data","1");
                        $("#rec2").attr("data","1");

                    }
                }
                    break;
                case "rec2":{
                    $("#rec1").attr("data","1");
                    $("#rec3").attr("data","1");
                    $("#rec4").attr("data","1");
                    $("#rec5").attr("data","1");
                    $("#rec6").attr("data","1");
                    if($(this).attr("data") == "1") {
                        $(this).find(".topSub").animate({"top": -$Num});
                        $(this).find(".leftSub").animate({"left": $Num});
                        $(this).next().animate({"left": 3*$Num});
                        $(this).siblings().find(".topSub").animate({"top": "0"});
                        $(this).siblings().find(".leftSub").animate({"left": "0"});
                        $("#rec1").animate({"left": "0"});
                        $("#rec4").animate({"left": "0"});
                        $("#rec6").animate({"left": 2*$Num});
                        $(this).attr("data","0");
                    }else {
                        $(this).find(".topSub").animate({"top": "0"});
                        $(this).find(".leftSub").animate({"left": "0"});
                        $(this).animate({"left": $Num});
                        $(this).attr("data","1");
                        $(this).siblings().find(".topSub").animate({"top": "0"});
                        $(this).siblings().find(".leftSub").animate({"left": "0"});
                        $("#rec1").animate({"left": "0"});
                        $("#rec3").animate({"left":  2*$Num});
                        $("#rec4").animate({"left": "0"});
                        $("#rec6").animate({"left": 2*$Num});

                    }
                }
                    break;
                case "rec3":{
                    $("#rec2").attr("data","1");
                    $("#rec1").attr("data","1");
                    $("#rec4").attr("data","1");
                    $("#rec5").attr("data","1");
                    $("#rec6").attr("data","1");
                    if($(this).attr("data") == "1") {
                        $(this).find(".topSub").animate({"top": -$Num});
                        $(this).find(".leftSub").animate({"left": -$Num});
                        $(this).animate({"left": 3*$Num});
                        $(this).siblings().find(".topSub").animate({"top": "0"});
                        $(this).siblings().find(".leftSub").animate({"left": "0"});
                        $("#rec1").animate({"left": "0"});
                        $("#rec4").animate({"left": "0"});
                        $("#rec6").animate({"left": 2*$Num});
                        $(this).attr("data","0");
                        $(this).siblings().attr("data","1");
                    }else {
                        $(this).find(".topSub").animate({"top": "0"});
                        $(this).find(".leftSub").animate({"left": "0"});
                        $(this).animate({"left": 2*$Num});
                        $(this).attr("data","1");
                        $(this).siblings().find(".topSub").animate({"top": "0"});
                        $(this).siblings().find(".leftSub").animate({"left": "0"});
                        $("#rec1").animate({"left": "0"});
                        $("#rec4").animate({"left": "0"});
                        $("#rec6").animate({"left": 2*$Num});
                        $(this).siblings().attr("data","1");

                    }
                }
                    break;
                case "rec4":{
                    $("#rec2").attr("data","1");
                    $("#rec3").attr("data","1");
                    $("#rec1").attr("data","1");
                    $("#rec5").attr("data","1");
                    $("#rec6").attr("data","1");
                    if($(this).attr("data") == "1") {
                    $(this).find(".topSub").animate({"top": $Num});
                    $(this).find(".leftSub").animate({"left": $Num});
                    $(this).animate({"left": -$Num});
                    $(this).siblings().find(".topSub").animate({"top": "0"});
                    $(this).siblings().find(".leftSub").animate({"left": "0"});
                    $("#rec1").animate({"left": "0"});
                    $("#rec3").animate({"left": 2*$Num});
                    $("#rec6").animate({"left": 2*$Num});
                        $(this).attr("data","0");
                    }else {
                        $(this).find(".topSub").animate({"top": "0"});
                        $(this).find(".leftSub").animate({"left": "0"});
                        $(this).animate({"left": "0"});
                        $(this).attr("data","1");
                        $(this).siblings().find(".topSub").animate({"top": "0"});
                        $(this).siblings().find(".leftSub").animate({"left": "0"});
                        $("#rec1").animate({"left": "0"});
                        $("#rec3").animate({"left": 2*$Num});
                        $("#rec6").animate({"left": 2*$Num});

                    }
                }
                    break;
                case "rec5":{
                    $("#rec2").attr("data","1");
                    $("#rec3").attr("data","1");
                    $("#rec4").attr("data","1");
                    $("#rec1").attr("data","1");
                    $("#rec6").attr("data","1");
                    if($(this).attr("data") == "1") {
                    $(this).find(".topSub").animate({"top": $Num});
                    $(this).find(".leftSub").animate({"left": $Num});
                    $(this).next().animate({"left": 3*$Num});
                    $(this).siblings().find(".topSub").animate({"top": "0"});
                    $(this).siblings().find(".leftSub").animate({"left": "0"});
                    $("#rec4").animate({"left": "0"});
                    $("#rec1").animate({"left": "0"});
                    $("#rec3").animate({"left": 2*$Num});
                        $(this).attr("data","0");
                    }else {
                        $(this).find(".topSub").animate({"top": "0"});
                        $(this).find(".leftSub").animate({"left": "0"});
                        $(this).animate({"left": $Num});
                        $(this).next().animate({"left": 2*$Num});
                        $(this).attr("data","1");
                        $(this).siblings().find(".topSub").animate({"top": "0"});
                        $(this).siblings().find(".leftSub").animate({"left": "0"});
                        $("#rec4").animate({"left": "0"});
                        $("#rec1").animate({"left": "0"});
                        $("#rec3").animate({"left": 2*$Num});
                        $("#rec6").animate({"left": 2*$Num});

                    }
                }
                    break;
                case "rec6":{
                    $("#rec2").attr("data","1");
                    $("#rec3").attr("data","1");
                    $("#rec4").attr("data","1");
                    $("#rec5").attr("data","1");
                    $("#rec1").attr("data","1");
                    if($(this).attr("data") == "1") {
                    $(this).find(".topSub").animate({"top": $Num});
                    $(this).find(".leftSub").animate({"left": -$Num});
                    $(this).animate({"left": 3*$Num});
                    $(this).siblings().find(".topSub").animate({"top": "0"});
                    $(this).siblings().find(".leftSub").animate({"left": "0"});
                    $("#rec1").animate({"left": "0"});
                    $("#rec4").animate({"left": "0"});
                    $("#rec3").animate({"left": 2*$Num});
                        $(this).attr("data","0");
                    }else {
                        $(this).find(".topSub").animate({"top": "0"});
                        $(this).find(".leftSub").animate({"left": "0"});
                        $(this).animate({"left": 2*$Num});
                        $(this).attr("data","1");
                        $(this).siblings().find(".topSub").animate({"top": "0"});
                        $(this).siblings().find(".leftSub").animate({"left": "0"});
                        $("#rec1").animate({"left": "0"});
                        $("#rec4").animate({"left": "0"});
                        $("#rec3").animate({"left": 2*$Num});

                    }
                    }
                    break;
            }
    })