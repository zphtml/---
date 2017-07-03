var bodyHeight = parseInt($("body").css("height"));
$(".lz_gybox").css("height",bodyHeight);
    $(document).on("click", ".lz-right>.lz_png", function () {
        odyHeight = $("body").css("height");
        $(this).find(".lz_til >img").show();
        $(this).siblings("div").find(".lz_til >img").hide();
        switch ($(this).attr("id")) {
            case "gy":
            {
                //$(".lz_gy").show();
                //$(".lz_gy").siblings("div").hide();
                $(".lz_gy").animate({ "margin-top": 0}, 400);
                $(this).attr("data","true");
                $(this).siblings().attr("data","false");
            }
                break;
            case"qy":
            {
                //$(".lz_qy").show();
                //$(".lz_qy").siblings("div").hide();
                $(".lz_gy").animate({ "margin-top": "-"+bodyHeight}, 400);
                $(".lz_qy").animate({ "margin-top": 0}, 400);
                $(this).attr("data","true");
                $(this).siblings().attr("data","false");
                $(".addic").addClass("ic_events");
                $(".add_txt").addClass("txt_events");
            }
                break;
            case"wh":
            {
                //$(".lz_wh").show();
                //$(".lz_wh").siblings("div").hide();
                $(".lz_gy").animate({ "margin-top": "-"+2*bodyHeight}, 400);
                $(".lz_wh ").animate({ "margin-top": 0}, 400);
                $(this).attr("data","true");
                $(this).siblings().attr("data","false");
            }
                break;
            case"hz":
            {
                $(".lz_gy").animate({ "margin-top": "-"+3*bodyHeight}, 400);
                $(".lz_hz ").animate({ "margin-top": 0}, 400);
                $(this).attr("data","true");
                $(this).siblings().attr("data","false");
            }
                break;
        }

    })
    //点击更换颜色
    $(document).on("click", ".time div", function () {
        $(this).css({
            background: "#e60012",
            border: "none"
        });
        $(this).find("i").css("color", "white");
        $(this).find("p").css("color", "white");
        $(this).siblings("div").css({
            "background": "white",
            border: "1px solid #0a0a0a"
        });
        $(this).siblings("div").find("i").css("color", "#333333");
        $(this).siblings("div").find("p").css("color", "#333333");
        switch ($(this).attr("class")) {
            case "year_2016":
            {
                $(".year-2016 span").css("color", "#e60012");
                $(".year-2016").siblings(".year-2015,.year-2014,.year-2013,.year-2012").find("span").css("color", "black");
            }
                break;
            case"year_2015":
            {
                $(".year-2015 span").css("color", "#e60012");
                $(".year-2016").siblings(".year-2016,.year-2014,.year-2013,.year-2012").find("span").css("color", "black");
            }
                break;
            case"year_2014":
            {
                $(".year-2014 span").css("color", "#e60012");
                $(".year-2016").siblings(".year-2016,.year-2015,.year-2013,.year-2012").find("span").css("color", "black");

            }
                break;
            case"year_2013":
            {
                $(".year-2013 span").css("color", "#e60012");
                $(".year-2016").siblings(".year-2016,.year-2015,.year-2014,.year-2012").find("span").css("color", "black");
            }
                break;
            case"year_2012":
            {
                $(".year-2012 span").css("color", "#e60012");
                $(".year-2016").siblings(".year-2016,.year-2015,.year-2014,.year-2013").find("span").css("color", "black");
            }
                break;
        }

    })


    var $width = parseInt($(".guanyu").css("width")) + 50;
    var $height = parseInt($(".guanyu").css("height")) + 50;
    function resize() {
        bodyHeight =  parseInt($("body").css("height"));
        $(".lz_gybox").css("height",bodyHeight);
        if( $(".guanyu  ").attr("data") == "true") {
            $(".lz_gy").animate({ "margin-top": 0}, 400);
        }else if($(".qiye ").attr("data") == "true") {
            $(".lz_gy").animate({ "margin-top": "-"+bodyHeight}, 400);
            $(".lz_qy").animate({ "margin-top": 0}, 400);
        }else if($(".wenhua ").attr("data") == "true") {
            $(".lz_gy").animate({ "margin-top": "-"+2*bodyHeight}, 400);
            $(".lz_wh ").animate({ "margin-top": 0}, 400);
        }else if($(".hezuo").attr("data") == "true"){
            $(".lz_gy").animate({ "margin-top": "-"+3*bodyHeight}, 400);
            $(".lz_hz ").animate({ "margin-top": 0}, 400);
        }

        $width = parseInt($(".guanyu").css("width")) + 50;
        $height = parseInt($(".guanyu").css("height")) + 50;
        $(".guanyu_box div:first,.qiye_box div:first,.wenhua_box div:first,.hezuo_box div:first ").css({
            width: $(".guanyu").css("width"),
            height: $(".guanyu").css("height")
        })
        $(".guanyu_box div:last,.qiye_box div:last,.wenhua_box div:last,.hezuo_box div:last ").css({
            width: $width,
            height: $height
        })
    };
 window.onresize = throttleV2(resize, 200, 300);
    var $this = $(".lz_baner").eq(0);
    var $div = $this.find("div");
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
        $div_1.eq(4).stop().animate({"top": "0", "left": "0", "width": $width, "height": $height, "opacity": "1"}, 400);
        $div_1.eq(5).stop().animate({"top": "0", "left": "0", "width": $width, "height": $height, "opacity": "0"}, 400);
    })