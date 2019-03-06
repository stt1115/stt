$(function(){
	
	$(".jiagou").click(function(){//点击修改服务端和cookie
		var id=(window.location.search).substr(4);
		
		if(getCookie("cart")){
			var obj=JSON.parse(getCookie("cart"));
			for(var i in obj){
				if(obj[i].status=="current"){
					var token=i;
					//console.log(token);
				}
			}
			
			$.get("http://47.104.244.134:8080/cartsave.do",{
			"gid":id,
			"token":token
		},function(data){
			//console.log(data);
			if(data.msg=="成功"){
				if(obj[token][id]==undefined){
					obj[token][id]=parseInt($("#num").html());
				}else{
					obj[token][id]+=parseInt($("#num").html());
					
				}
				var num=0;
				for (var j in obj[token]) {
					if(obj[token][j]!="current"){
						num+=obj[token][j];
					}
					
				}
				
				console.log(num);
				$(".che01 span").html(num);
				//$(".che02 span").html(num);
				
				var str2=JSON.stringify(obj);
				setCookie("cart",str2,7);
				
				
			}
			
			
			
			
		})
			
			}else{
				
			}
			
				
				
				
		
		})
	
var id=(window.location.search).substr(4);	
$.get("http://47.104.244.134:8080/goodsbyid.do",{"id":id},
function(data){
	//console.log(data);
	$(".tu>img").attr("src",data.picurl);
	$(".xiang>h3").text(data.name);
	$(".xiang>h3").css({"color":"#6794"});
	$(".tu>img").css({"display":"block",
	           "width":"350px"
	});
	
	$("#num").html("1");
	var count=1;
	
	$(".jia").click(function(){
		count++;
		$("#num").html(count);
		
		
		
		
	})
	$(".jian").click(function(){
		count--;
		//var count=parseInt($("#num").html());
		if(count<=1){
			count=0;
			$("#num").html(1);
		}else{
			$("#num").html(count);
		}
		
		
		
	})
	
})
	
})












