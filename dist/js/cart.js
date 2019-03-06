$(function(){
	/*$("#num").html("1");
	var count=1;
	$(".jia").click(function(){
		count++;
		$("#num").html(count);
	})
	$(".jian").click(function(){
		count--;
		if(count<=1){
			count=0;
			$("#num").html(1);
		}else{
			$("#num").html(count);
		}
	})*/
	if(getCookie("cart")){
			var obj=JSON.parse(getCookie("cart"));
			
			for(var i in obj){
				if(obj[i].status=="current"){
					var token=i;
					//console.log(token);
				}
			}
			}
	function newcart(data){
	var str6="";
		var count=0;
		var tol=0;
		var count1=[];
		for(let i=0;i<=data.length-1;i++){
              var cid=data[i].cid;
              count+=data[i].count;
              count1[i]=data[i].count;
              var goods=data[i].goods;
              tol+=data[i].count*data[i].goods.price;
               str6+=`<ul class="shang cart" >
			<li><dl>
				<dt><img src="${data[i].goods.picurl}" class="tu05"/></dt>
				<dd>
					<p><a href="#">${data[i].goods.name}</a></p>
					<em><img src="../img/qi.png"/></em>
					<span>颜色：撒浪黑现货行货64GB</span>
					
				</dd>
			</dl></li>
			<li> <em class="jian" data-id2="${data[i].gid}" data-id1="${data[i].id}" data-count="${data[i].count}">-</em> <span class="num"> ${data[i].count}</span>   <em class="jia" data-id2="${data[i].gid}" data-id1="${data[i].id}" data-count="${data[i].count}">+</em></li>
			<li>￥${data[i].goods.price}.00</li>
			<li><input type="button" name="" class="btn" value="删除" data-id2="${data[i].gid}" data-id1="${data[i].id}" data-count="${data[i].count}"/></li>
		</ul>`;      
		}//xunhuan
		
		$("#jian").html(count);
		$("#number").html("￥"+tol+".00");
		$(".che01 #zongshu").html(tol);
		$(".gouwu").append(str6);
		$(".gouwu .shang .tu05").css({"width":"60px",
		      "height":"60px"
		})	
		
	for(let k=0;k<=data.length-1;k++){
	$(".jia").eq(k).click(function(){
		count1[k]++;
		console.log($(this).eq())
		$(this).siblings(".num").html(count1[k]);
	})
	$(".jian").eq(k).click(function(){
		count1[k]--;
		if(count1[k]<=1){
			count1[k]=0;
			$(this).siblings(".num").html(1);
		}else{
			$(this).siblings(".num").html(count1[k]);
		}
	})
	}//
	}
	$.get("http://47.104.244.134:8080/cartlist.do",{
		"token":token,
	},function(data){
		console.log(data);
		
		newcart(data);
	
		//shanchu
	
		
	}).then(function(data){
	
	$(".btn").click(function(){
	
	//$(this).parent().parent().detach();
	var id=$(this).attr("data-id1");
	var gid=$(this).attr("data-id2");
	var num=$(this).attr("data-count");
	console.log(id,gid,num);
	$.get("http://47.104.244.134:8080/cartupdate.do",
	{
	     "id":id,
	     "gid":gid,
	     "num":"0",
	     "token":token
	},function(data){
	//console.log(data);
	if(data.msg=="成功"){
	if(getCookie("cart")){
	var obj=JSON.parse(getCookie("cart"));
	obj[token][gid]=undefined;
	var str7=JSON.stringify(obj);
	setCookie("cart",str7,7);
	
	console.log(getCookie("cart"));
	
	
	}
	//$(this).parent().parent().detach();
	location.reload();
	}
	
	
	})

	})//修改购物车{删除}
	
	for(let k=0;k<=data.length-1;k++){
	$(".jia").eq(k).click(function(){
		var id=$(this).attr("data-id1");
	var gid=$(this).attr("data-id2");
	//var num1=$(this).siblings(".num").html();
	//console.log(typeof num1);
	var num=$(this).attr("data-count");
	console.log(id,gid,num);
	$.get("http://47.104.244.134:8080/cartupdate.do",
	{
	     "id":id,
	     "gid":gid,
	     "num":"1",
	     "token":token
	},function(data){
	//console.log(data);
	if(data.msg=="成功"){
	if(getCookie("cart")){
	var obj=JSON.parse(getCookie("cart"));
	obj[token][gid]+=1;
	var str7=JSON.stringify(obj);
	setCookie("cart",str7,7);
	
	console.log(getCookie("cart"));
	
	
	}
	//$(this).parent().parent().detach();
	location.reload();
	}
	
	
	})
	})
	$(".jian").eq(k).click(function(){
		var id=$(this).attr("data-id1");
	var gid=$(this).attr("data-id2");
	var num=$(this).attr("data-count");
	console.log(id,gid,num);
	$.get("http://47.104.244.134:8080/cartupdate.do",
	{
	     "id":id,
	     "gid":gid,
	     "num":"-1",
	     "token":token
	},function(data){
	//console.log(data);
	if(data.msg=="成功"){
	if(getCookie("cart")){
	var obj=JSON.parse(getCookie("cart"));
	obj[token][gid]-=1;
	var str7=JSON.stringify(obj);
	setCookie("cart",str7,7);
	
	console.log(getCookie("cart"));
	
	
	}
	//$(this).parent().parent().detach();
	location.reload();
	}
	
	
	})
	})
	}//修改购物车（加减）
	
	
	
	
	
	
	
	})//ajax
	 
	
	
	
	var btns=document.getElementsByClassName("btn");
	console.log(btns.length);
	var gou=document.getElementsByClassName("gouwu");
	var oul=document.getElementsByClassName("gouwu").children;
	for(let i=0;i<=btns.length-1;i++){
	
	btns[i].onclick=function(){
	console.log("aa")
	gou.removeChild(oul[i+1]);
	
	
	}
	
	
	}//遍历按钮
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})