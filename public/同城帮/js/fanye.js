$(function(){
//			//html翻页数最多为10；
//			function page(pageID,pagenum,pageAllNum,pagethis){
//				var fanye = '<ul>'
//								+'<li class="none"><a href="##"><<首页</a></li>'
//								+'<li class="none"><a href="##">上一页</a></li>'
//								+'<li><a href="##">下一页</a></li>'
//								+'<li class="none"><a href="##">尾页>></a></li>'
//								+'</ul>';
//				var allpage = Math.ceil(pageAllNum/pagenum);//总页数，向上取整
//				var Id  = $("#"+pageID);
//				console.log(pagethis);
//				$("#"+pageID).html(fanye);
//				
//				var pagethis = pagethis||"1"
//				//循环时判断,1.系统条数大于十； 2.系统条数小于10
//				var oA = "";
//				var tim = pagethis<5?1:pagethis-4;
//				for(var n = 0;tim<=allpage&&n<10;n++){
//					oA+='<li><a href="##">'+tim+'</a></li>'
//					tim++;
//				}
//				Id.find("ul>li:eq(1)").after(oA);
//			}
//			page("mainlast_left_shop_fanye",5,500,1)
//			$("#mainlast_left_shop_fanye").delegate("a","click",function(){
//				var num;
//				if($(this).text()=="上一页"){
//					num++
//					page("mainlast_left_shop_fanye",5,500,num);
//				}
////				page("mainlast_left_shop_fanye",5,500,$(this).text());
//			})
//		})