//用户登录
//1:为登录按钮绑定点击事件
$("#btn1").click(function(){
  //2:获取电子邮箱和密码
	var e = $("#email").val();
	var p = $("#upwd").val();
	//alert(u+p);
	//3:发送AJAX请求 login.php
	$.ajax({
	  type:"POST",
		url:"data/user/login.php",
		data:{email:e,upwd:p},
		success:function(data){
		  if(data.code>0){
				//登陆成功，跳转到产品页
			  location.href = "products.html";
			}else{
			  alert(data.msg);
			}
			
		},
		error:function(){
		  alert("网络故障，请检查");
			//1:404 url地址程序不正确
			//2:json 拼写错误
		}
	});
});

//底部二维码的显示隐藏
$("[data-load=ewm]").parent().mouseover(function(){
	$(this).children().last().css("display","block");
}).mouseout(function(){
	$(this).children().last().css("display","none");
})