$(function(){
	var reg1=/^[a-zA-Z_]\w{5,14}$/;    
		var reg2=/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/;
		var reg3=/^\w+@\w+(\.\w+)+$/;
		function $val(elementId){
			return document.getElementById(elementId).value;
		}
		function divId(elementId){
			return  document.getElementById(elementId);
		}
		
		
		
		
		
		
		function chickUser(){
			var user=$val("txt");
			if(!reg1.test(user)){
				
				$(".zhang").html("用户名格式不正确,请重新输入");
				$(".zhang").css({
					"color":"red"
					
				});
				return false;
			}else{
				return true;
			}
		}
		
		
		
			function chickPass(){
			var pas=$val("pas");
			if(!reg1.test(pas)){
				
				$(".mi").html("密码格式不正确,请重新输入");
				$(".mi").css({
					"color":"red"
					
				});
				return false;
			}else{
				return true;
			}
		}
		
		
		
		
		$("#btn01").click(function(){
		
					
			$.ajax({
		url:"http://47.104.244.134:8080/usersave.do",
		//"../php/regist.php",
		type:"post",

		"async":"true",
		data:{
			"username":$("#txt").val(),
			"password":$("#pas").val(),
			"email":"144@qq.com",
			"sex":"m"
		},
		
		success:function(data){
			console.log(data);
			for (var i in data) {
					if(i=="msg"){
						
					
					if(data[i]=="成功"){
						
						$(".xiang02").html("注册成功!")
						.css({
							"color":"green"
						})
						location.replace("../html/login.html");
						
						
					}else{
						$(".xiang02").html("该用户名已存在！")
						.css({"color":"red",
						"fontSize":"13px",
						});
					}
					}
					
					
					
					
					
				}
			
			
			
			
		}
		
		
		
		
		})
})
		
})


