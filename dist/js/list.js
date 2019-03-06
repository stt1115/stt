$(function(){
	
	$.ajax({url:"http://47.104.244.134:8080/goodsbytid.do",
	type:"get",
	data:{
		"tid":"13",
		"page":"5",
		"limit":"39"
	},
	
	success:function(data){
		
		if(data.msg=="OK"){
			var data=data.data;
			var str="";
			
			for(var j=0;j<=data.length-1;j++){
			           
		
		str+=`<dl>
					<dt>
						<img src="${data[j].picurl}"/>
					</dt>
					<dd>
						${data[j].name}
					</dd>
					<dd>
						${data[j].price}
						<del>
						￥4799.00
					</del>  
					</dd>
					<dd>
						<p>${data[j].info}</p>
						<span id="">
							剩余：<em>1</em>天<em>3</em>时<em>45</em>分<em>23</em>秒
						</span>
						<a href="detail.html?id=${data[j].id}" data-id="${data[j].id}" class="btn">立即加购</a>
						
					</dd>
				</dl>`;
		
		
	
	
		}//liebiao
		
		var token="";
	
	$("#list").append(str);	
	$("#list dl").css({"float":"left"});
	$(".deng").on("click",function(){
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
						
					 token=data.data.token;
					
					if(data[i]=="OK"){
					//console.log(token);
						//location.replace("../index.html");
							
							if(getCookie("cart")){
				var obj=JSON.parse(getCookie("cart"));
								
		var token=obj.token;
		
		var num=0;
		for(let m in obj[token]){
			num+=obj[token][m];
		}
		$(".che01 span").html(num);
	    $(".che02 em").html(num);
		
	}else{
		var obj={};
	}
					}
					
					}		
				}
				
			}
			
			
		});
		
	})//登录点击，获取token值

	
	//var id=0;
	var btns=document.getElementsByClassName("btn");	
		for (let i=0;i<=btns.length-1;i++) {
			$(btns[i]).click(function(){
				var id=$(this).attr("data-id");
				console.log(id);
				location.assign("../html/detail.html");
				
			})//btn click
			
			
			
			
		}
		
	
	}
}
	
	})
	
	
	

})


























