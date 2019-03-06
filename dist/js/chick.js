function $(elementID){
	return document.getElementById(elementID).value;
}

function divId(elementID){
	 return document.getElementById(elementID);
}




function chickUser(){
	var user=$("txt1");
	var reg=/^[a-zA-Z_]\w{5,14}$/;
	var userId=divId("div01");
	userId.innerHTML="";
     if(reg.test(user)==false){
		userId.style.color='red';
		userId.innerHTML="用户名格式输入错误！"
		return false;
	}else{
		return true;
	}
}


function chickPwd(){
	var pwd=$("pwd1");
	var reg=/^[a-zA-Z0-9]{6,10}$/;
	var pwdId=divId("div02");
	pwdId.innerHTML="";
	if(reg.test(pwd)==false){
		pwdId.style.color='red';
		pwdId.innerHTML="密码格式不正确!";
		return false;
	}else{
		return true;
	}
}

function chickRepwd(){
	var pwd=$("pwd1");
	var pwdre=$("pwd2");
	var pwdreId=divId("div03");
	pwdreId.innerHTML="";
	if(pwd!=pwdre){
		pwdreId.style.color='red';
		pwdreId.innerHTML="两次密码不一致!";
		return false;
	
	}else{
		return true;
	}
}

function chickEmail(){
	var email=$("email");
	var reg=/^\w+@\w+(\.\w+)+$/;
	var emailId=divId("div04");
	emailId.innerHTML="";
	if(reg.test(email)==false){
		emailId.style.color='red';
		emailId.innerHTML="邮箱格式不正确！";
		return false;
	}
	return true;
}

function chickMobile(){
	var mobile=$("mobile");
	var reg=/^1(3|4|5|6|7|8|9)\d{9}$/;
	var mobileId=divId("div05");
	mobileId.innerHTML="";
	if(reg.test(mobile)==false){
		mobileId.style.color='red';
		mobileId.innerHTML="手机号码格式不正确！";
		return false;
	}
	return true;
}

function chickPost(){
	var post=$("post");
	var reg=/^[1-9]\d{5}$/;
	var postId=divId("div06");
	postId.innerHTML="";
	if(reg.test(post)==false){
		postId.style.color='red';
		postId.innerHTML="邮编格式不正确！";
		return false;
	}
	return true;
}

function chickCard(){
	var card=$("card");
	var reg=/^\d{17}(\d|x)$/;
	var cardId=divId("div07");
	cardId.innerHTML="";
	if(reg.test(card)==false){
		cardId.style.color='red';
		cardId.innerHTML="身份证号码格式不正确";
		return false;
	}
	return true;
}
