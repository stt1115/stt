$(function(){
	var str1=`<ul class="dizhi">
				<li><a href="#" >北京</a></li>
				<li><a href="#" >成都</a></li>
				<li><a href="#" >青岛</a></li>
				<li><a href="#" >西安</a></li>
				<li><a href="#" >郑州</a></li>
				<li><a href="#" >石家庄</a></li>
				<li><a href="#" >平顶山</a></li>
				<li><a href="#" >上海</a></li>
				<li><a href="#" >德阳</a></li>
				<li><a href="#" >邢台</a></li>
				<li><a href="#" >承德</a></li>
				<li><a href="#" >驻马店</a></li>
				<li><a href="#" >安阳</a></li>
				<li><a href="#" >新乡</a></li>
				<li><a href="#" >宝鸡</a></li>
				<li><a href="#" >全国</a></li>
			</ul>`;
	
	
	$(".adress").append(str1);
	
	$(".adress").mouseover(function(){
		$(".dizhi").css({"display":"block"})
	},).mouseleave(function(){
		$(".dizhi").css({"display":"none"})
	})
	

	var str2=`<ul class="maijia01">
				<li><a href="#">关注店铺  <span id="">
					30
				</span>  </a></li>
				<br/>
				<li><a href="#">关注商品
				<span id="">
					10
				</span></a></li>
			</ul>`;
	
	$(".nr li").eq(1).append(str2);
		
	
	$(".louti02 li").mouseenter(function(){
		$(this).find("span").stop().animate({
			"width":"80px",
			"left":"-80px",
			"opacity":"1"
			
		},200)
	}).mouseleave(function(){
		$(this).find("span").stop().animate({
			"width":"37px",
			"left":"0px",
			"opacity":"0"
			},200)
			
			
			
	})
	
	
	$(".nav02").mouseenter(function(){
		$("#nums li").addClass("enter");
	}).mouseleave(function(){
		$("#nums li").removeClass("enter");
	})
	
	var str3=`<div class="pingce">
			<h2>电商参考价:￥1299.00</h2>
			<ul>
				<li><a href="#">评测</a></li>
				<li><a href="#">视频</a></li>
				<li><a href="#">点评</a></li>
			</ul>
		</div>`;
	
	
	$(".san01 dl").append(str3);
	
	$(".san01 dl").mouseover(function(){
		//console.log("enter")
		$(this).find(".pingce").animate({
			"bottom":"0px",
			"opacity":"0.7",
			"height":"60px"
		
		},200);
	}).mouseleave(function(){
		
			$(this).find(".pingce").animate({
			"bottom":"-60px",
			"opacity":"0",
			
		      "height":"0px"
		},200);
	})
	
	var str4=`<div class="manbu">
			<p>漫步者R102V音箱</p>
			<p>￥155.00</p>
			<span>查看详情</span>
			
			<h2>电商参考价￥1299.00</h2>
			<ul>
				<li><a href="#">评测</a></li>
				<li><a href="#">视频</a></li>
				<li><a href="#">点评</a></li>
			</ul>
		</div>`;

	$(".yin02 li").append(str4);
	$(".yin02 li").mouseover(function(){
		//console.log("enter")
		$(this).find(".manbu").animate({
			"bottom":"0px",
			"opacity":"0.9",
			"height":"170px"
		
		},200);
	}).mouseleave(function(){
		
			$(this).find(".manbu").animate({
			"bottom":"-170px",
			"opacity":"0",
			
		      "height":"0px"
		},200);
		
		
	})
	
	
	/*if(getCookie("cart")){
			var obj=JSON.parse(getCookie("cart"));
			//console.log("aa");
			for(var i in obj){
				if(obj[i].status=="current"){
					var token=i;
					console.log(token);
				}
			}
			var num=0;
				for (var j in obj[token]) {
					if(obj[token][j]!="current"){
						num+=obj[token][j];
					}
					
				}
				
				//console.log(num);
				$(".dingdan .che01 span").html(num);
			
			
			
			}*/
	
	$(".tongcheng .tr").click(function(){
		location.assign("html/list.html");
		
	})
	
	
	
	
/*	$(".san01 dl").click(function(){
location.assign("html/detail.html")	
	});*/
	
	
	
	                                                                                      /*if(getCookie("cart")){
			 		var obj=JSON.parse(getCookie("cart"));
			 		for(var i in obj){
			 				obj[i].status="";	
			 		}
			 		if(obj[token]){
			 			obj[token].status="current";
			 			var str5=JSON.stringify(obj);
			 	    setCookie("cart",str5,7);
			 		}else{
			 			obj[token]={};
			 			obj[token].status="current";
			 			
			 	    var str5=JSON.stringify(obj);
			 	    setCookie("cart",str5,7);
			 	    
			 		}
			 		
			 	}else{
			 	
			 		
	    $.get("http://47.104.244.134:8080/cartlist.do",{
		"token":token,
		
	},function(data){
		console.log(data);
		var tol=0;
		var obj={};
        obj[token]={};
		obj[token].status="current";
		for(let i=0;i<=data.length-1;i++){       
              var count=data[i].count;
              var goods=data[i].goods;
              var id=goods.id;
              obj[token][id]=count;
			 	    var str5=JSON.stringify(obj);
			 	    setCookie("cart",str5,7);
			 	    console.log(getCookie("cart"));
            
		}//xunhuan
	})
			 	    
			 	    
			 	}*///qingqiu
	
	
	
	
	
	
	
	
	
	
	
	
})
