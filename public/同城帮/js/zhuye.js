$(function(){
	//轮播图
	var num = 0;
	var	timer = setInterval(fun,1000)
		function fun(){
			num++
			if(num == 5){
				num = 0;
				$(".max").css("left",0);
			};
			var n = num;
			if(n==4){
				n=0
			};
			$(".quan>ul>li").eq(n).attr("class","color").siblings().attr("class","colorok")
			$(".max").animate({
				left:num*-1200
			},500)
		}
	$(".quan>ul>li").click(function(){
		clearInterval(timer);
		$(this).attr("class","color").siblings().attr("class","colorok")
		
		$(".max").stop().animate({left: -$(this).index()*1200},500)
		num = $(this).index();
			timer = setInterval(fun,1000)
	})
	//获取图片信息
//	$.ajax({
//		type:"get",
//		url:"shouji.json",
//		async:true,
//		success:function(data){
//			for(var n in data.result){
//				$(".mainlast>ul>li:first").after("<li><a href='##'><img src='"+ data.result[n].img_url+"'/></a></li>")
//			}
//		}
//	});
		
	
		
		//html翻页数最多为10；
		var num =1;
			function page(pageID,pagenum,pageAllNum,pagethis){
			
				var fanye = '<ul>'
								+'<li class="none"><a href="##"><<首页</a></li>'
								+'<li class="none"><a href="##">上一页</a></li>'
								+'<li><a href="##">下一页</a></li>'
								+'<li class="none"><a href="##">尾页>></a></li>'
								+'</ul>',
				 	allpage = Math.ceil(pageAllNum/pagenum),//总页数，向上取整
				 	Id  = $("#"+pageID),
					 pagethis = pagethis||"1";
				$("#"+pageID).html(fanye);
				pagethis<2?Id.find("ul>li:eq(0)").addClass("none"):Id.find("ul>li:eq(0)").removeClass("none");
				pagethis<5?Id.find("ul>li:eq(1)").addClass("none"):Id.find("ul>li:eq(1)").removeClass("none");
				pagethis<16?Id.find("ul>li:last").addClass("none"):Id.find("ul>li:last").removeClass("none");
				//循环时判断,1.系统条数大于十； 2.系统条数小于10
				var oA = "";
				var tim = pagethis<5?1:pagethis-4;
				for(var n = 0;tim<=allpage&&n<10;n++){
					oA+='<li><a  class="myIndex'+tim+'" href="##">'+tim+'</a></li>'
					tim++;
				}
				
				Id.find("ul>li:eq(1)").after(oA);
				 Id.find(".myIndex"+pagethis).css("background","orange");
			$.ajax({
			type:"get",
			url:"xinxi.json",
			async:true,
			success:function(data){
			$(".mainlast_left_shop_ul").html("")
			for(var n=0;n<5;n++){
					$(".mainlast_left_shop_ul").append("<li>"
										                   +"<div class='mainlast_left_shop_img'>"
														   +"<img src='"+data.shop_data[n].shop_ico+"' />"
														   +"</div>"
														   +"<div class='mainlast_left_shop_xinxi'>"
														   +"<div class='mainlast_left_shop_xinxi_biaoti'>"
														   +"<span>顺通电脑维修</span><span>店铺等级:</span><div></div><div></div>"
														   +"</div>"
														   +"<p>主营："+ data.shop_data[n].main+"</p>"
														   +"<span>地址:"+data.shop_data[n].addr_detail+"</span>"
													       +"</div>"
														   +"<div class='mainlast_left_shop_pinggu'>"
														   +"<p class='mainlast_left_shop_pinggup1''>先行赔付</p>"
														   +"<p class='mainlast_left_shop_pinggup2'>同城帮认证</p>"
														   +"<p class='mainlast_left_shop_pinggup3'>人气："+data.shop_data[n].shop_visit+"次浏览</p>"
														   +"</div>"
														   +"<div class='mainlast_left_shop_jinrudianou'>"
														   +"<a href='#'>进入店铺</a>"	
														   +"</div>"				
												           +"</li>")
				}
			}
		})
	}
			page("mainlast_left_shop_fanye",5,500,1)
			
			$("#mainlast_left_shop_fanye").delegate("a","click",function(){
				switch($(this).text()){
							case "下一页":{
							if(num<20){
							num++;
							page("mainlast_left_shop_fanye",5,100,num);
							}	
						}
							break;
							case "上一页":{
							num--;
							if(num>1){
								num--;
							console.log(num)
							page("mainlast_left_shop_fanye",5,100,num);	
							}
							
						}
							break;
							case "<<首页":{
							num=1
							page("mainlast_left_shop_fanye",5,100,num);		
						}
							break;
							case "尾页>>":{
							num = 20;
							page("mainlast_left_shop_fanye",5,100,num);	
						}
							break;
							default:{
							num = $(this).text()
							page("mainlast_left_shop_fanye",5,100,num);
							
							}
							break;
				}
			})

	//获取市区信息
		$.ajax({
		type:"get",
		url:"chengshixinxi.json",
		async:true,
		success:function(data){
			for(var n in data.hotcity){
				$(".box_shiqu_remen_city").append("<li><a href='##'>" + data.hotcity[n].name + "</a></li>")
			}
		}
	});

	//移动隐藏，出现
	$(".xinxi ul li").on("mouseover",function(){ 
		$(this).next("div").show();
		$(this).find("div").show();
	});
	$(".xinxi ul li").on("mouseout",function(){
		$(this).next("div").hide();
		$(this).find("div").hide();
	})
	
	$(".xinxi ul li").next("div").on("mouseover",function(){
		$(this).show();
		$(this).prev("li").find("div").show();
	});
	$(".xinxi ul li").next("div").on("mouseout",function(){
		$(this).hide();
		$(this).prev("li").find("div").hide();
	})
	//市区隐藏出现
	$(".select>p>a").on("click",function(){
		$(".box_shiqu").show();
	})
	$(".box_shiqu_guanbi").on("click",function(){
		$(".box_shiqu").hide();
		$(".box_xianqu_name").hide();
	})
	//地图显示，隐藏
	$(".mainlast_right_nav>p>a").on("click",function(){
		$(".map").show();
	});
	$(".map_kaitou>span>a").on("click",function(){
		$(".map").hide();
	})
	//滚动条隐藏
	$(window).scroll(function(){
		$(".zhiding").show();
	});
	$(".zhiding").on("click",function(){
		$(this).hide();
		console.log(12)
	})
	

});
//
window.onload = function(){
	$.ajax({
		type:"get",
		url:"xinxi.json",
		async:true,
		success:function(data){
				//获取地图信息
		var map = new AMap.Map('container', {
       		 resizeEnable: true,
		    zoom:11,
		     center: [116.397428, 39.90923]
        
    		});
		//点击更换语言
		['en','zh_en','zh_cn'].forEach(function(btnId){
			document.getElementById(btnId).onclick = function(){
			map.setLang(btnId);
			};
		})
		//获取坐标
		for(var n in data.shop_data){
			var marker = new AMap.Marker({
	        map: map,
		    position: [data.shop_data[n].map_longitude,data.shop_data[n].map_latitude ]
		});
	}
			
		//input搜索框
   		var autoInput = new AMap.Autocomplete({input: "tipinput"});
		//绑定提示信息选中事件
		AMap.event.addListener(autoInput,"select",selectCallback);
	    function selectCallback(e){
		map.setCenter([e.poi.location.C,e.poi.location.I]);
		    map.setZoom(15);
		    new AMap.Marker({
		    	map: map,
		    	position: [e.poi.location.C,e.poi.location.I]
		    });
		   }
		}
	})
}
