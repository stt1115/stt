$(function(){
	

	
	$(".deng").click(function(){
		
		$.ajax({
			type:"post",
			url:"http://47.104.244.134:8080/userlogin.do",
			async:"true",
			data:{
				"name":$(".txt").val(),
				"password":$(".pas").val()
			},
			success:function(data){
				//console.log(data);
				for (var i in data) {
					if(i=="msg"){
						
					var token=data.data.token;
					//console.log(token);
					if(data[i]=="OK"){
						
						$(".mi").html("登录成功!")
						.css({
							"color":"green"
						})
						
						
			 	
			 	
			 	//设置本地cookie{包括current和商品数量}
			 	if(getCookie("cart")){
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
			 		
			 		var num=0;
				for (var j in obj[token]) {
					if(obj[token][j]!="current"){
						num+=obj[token][j];
					}
					
				}
				
				console.log(num);
				console.log($(".che01 #zongshu").html());
				$(".che01 #zongshu").text(num);
			 	}else{
			 	
			 		
	    $.get("http://47.104.244.134:8080/cartlist.do",{
		"token":token,
		
	},function(data){
		console.log(data);
		var tol=0;
		var obj={};
        obj[token]={};
		obj[token].status="current";
		if(data.length==0){
			
			var str5=JSON.stringify(obj);
			 	    setCookie("cart",str5,7);
			 	    console.log(getCookie("cart"));
			 	    
		}else{
			for(let i=0;i<=data.length-1;i++){       
              var count=data[i].count;
              //var goods=data[i].goods;
              var id=data[i].goods.id;
              obj[token][id]=count;
			 	    var str5=JSON.stringify(obj);
			 	    setCookie("cart",str5,7);
			 	    console.log(getCookie("cart"));
            
		}//xunhuan
		}
		
		
		var num=0;
				for (var j in obj[token]) {
					if(obj[token][j]!="current"){
						num+=obj[token][j];
					}
					
				}
				
				//console.log(num);
				$(".che01 #zongshu").html(num);
	})
			 	    
			 	    
			 	}//else结束
			 	
					setTimeout(function(){
						location.replace("../index.html");
					},1000);
						
				//location.replace("../index.html");		
						
						
					}else{
						$(".mi").html("用户名或密码错误!")
						.css({"color":"red",
						"fontSize":"13px",
						});
					}
					
					}
					
					
					
					
					
				}
				
				
		
				
				
				
				
			}
			
			
			
			
			
			
			
			
			
		});
		//daoshudisange
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	})
	//倒数第二个
	
	
	
	
	
	
	
	
	
	
	
	
	
})






















