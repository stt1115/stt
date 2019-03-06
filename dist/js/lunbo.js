//左右轮播  透明度（显示隐藏）  上下轮播
			var oBannerBox = document.getElementById("bannerBox");
			var oBannerList = document.getElementById("bannerList");
			var aList = oBannerList.children;
			var oNum = document.getElementById("nums");
			var aNums = oNum.children;
			aNums[0].className = "hover";
			var perWidth = aList[0].offsetWidth;
			var oBtn = document.getElementById("btns");
			var oPrev = oBtn.children[0];
			var oNext = oBtn.children[1];
			oBannerList.style.width = perWidth*aList.length+"px";
			
			var i = 0;
			var timer = setInterval(function(){
				move();
			},3000);
			
			function move(){
				i++;
				//123 123 临界值
				if(i==aList.length){
					oBannerList.style.left = 0;
					i = 1;
				}
				//321321 临界值
				if(i==-1){
					oBannerList.style.left = - perWidth * (aList.length-1)+"px";
					i = aList.length - 2;
				}
				
				//控制角标，让其和展示图片对应
				//先请后加
				for(var j = 0; j < aNums.length; j++){
					aNums[j].className = "";
				}
				if(i==aNums.length){
					//图片在最后一张（对应第一张）角标的特殊处理
					aNums[0].className = "hover";
				}else{
					
					aNums[i].className = "hover";
				}

				startMove(oBannerList,{"left":-perWidth*i});
			}
			
			//鼠标移入轮播区域 清除定时器
			oBannerBox.onmouseover = function(){
				clearInterval(timer);
			}
			//移出开启
			oBannerBox.onmouseout = function(){
				timer = setInterval(function(){
					move();
				},3000);
			}
			
			//点击两个按钮
			oNext.onclick = function(){
				move();
			}
			oPrev.onclick = function(){
				i-=2;//i值变小，抵消move（）内部i++
				move();
			}
			
			//角标 鼠标移入到1，2，3那个数字上，展现对应的图片
			for(let j = 0; j < aNums.length; j++){
				aNums[j].onmouseover = function(){
					i = j-1;
					move();
				}
			}