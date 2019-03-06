$(function(){
	//先得到token值
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
	$(".jia").eq(k).click(function(){//三个地方都要变{内容、（服务端和cookie）}
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
	}
	}//生成购物车列表{加减按钮}
	
	$.get("http://47.104.244.134:8080/cartlist.do",{
		"token":token,
	},function(data){
		console.log(data);
		
		newcart(data);
	
		
	
		
	}).then(function(data){
		//更新购物车的请求{服务端和cookie值}两种情况：删除键和加减键，并刷新页面
	
	$(".btn").click(function(){
	
	
	var id=$(this).attr("data-id1");
	var gid=$(this).attr("data-id2");
	var num=$(this).attr("data-count");
	console.log(id,gid,num);
	$.get("http://47.104.244.134:8080/cartupdate.do",
	{
	     "id":id,
	     "gid":gid,
	     "num":"0",//num为0表示删除，正数增加，负数减小
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
	
	location.reload();
	}
	
	
	})

	})//修改购物车{删除}
	
	for(let k=0;k<=data.length-1;k++){
	$(".jia").eq(k).click(function(){
		var id=$(this).attr("data-id1");
	    var gid=$(this).attr("data-id2");
	    var num=$(this).attr("data-count");
	
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
	
	location.reload();
	}
	
	
	})
	})
	}//修改购物车（加减）	
	})//ajax

})