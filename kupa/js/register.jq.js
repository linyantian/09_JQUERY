//验证两次密码是否一致
$("#cpwd").blur(function(){
  var upwd = $("#upwd").val();
	var cpwd = $("#cpwd").val();
	if(upwd == cpwd){
	  $("#cpwd-show").html("通过");
	}else{
	  $("#cpwd-show").html("两次密码不一致");
	}
});
//验证指定的电子邮箱是否存在
$("#email").blur(function(){
  var e = $("#email").val();
	if(e == ""){
	  $("#email-show").html("电子邮箱不能为空");
	}else{
	  $.ajax({
		  type:"POST",
			url:"data/user/checkemail.php",
			data:{email:e},
			success:function(data){
			  if(data){
				  $("#email-show").html("通过");
				}else{
				  $("#email-show").html("已存在");
				}
			},
			error:function(){
			  alert("网络故障，请检查");
			}
		});
	}
});

//用户注册
//1:为注册按钮绑定点击事件
$("#btn1").click(function(){
  //2:获取电子邮箱和密码
	var e = $("#email").val();
	var p = $("#upwd").val();
	//3:发送AJAX请求 register.php
	$.ajax({
	  type:"POST",
		url:"data/user/register.php",
		data:{email:e,upwd:p},
		success:function(data){
		  if(data.code>0){
			  //注册成功，跳转到登录页
				//alert("注册成功");
				window.location.href = "login.html";
			}else{
			  alert(data.msg);
			}
		},
		error:function(){
		  alert("网络故障，请检查");
		}
	});
});

//底部二维码的显示隐藏
$("[data-load=ewm]").parent().mouseover(function(){
	$(this).children().last().css("display","block");
}).mouseout(function(){
	$(this).children().last().css("display","none");
})
