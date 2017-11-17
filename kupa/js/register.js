/**
 * 1、验证用户密码 和 确认密码是否一致并给出提示
 */
function checkCpwd(){
  //1、获取 用户密码 和 确认密码的值，分别保存在俩变量中
	var upwd=$("upwd").value;
	var cpwd=$("cpwd").value;
	//2、判断 两个变量的值是否一致，并将提示信息显示在 cpwd-show 中
	if(upwd == cpwd){
		$("cpwd-show").innerHTML = "通过";
	}else{
		$("cpwd-show").innerHTML = "两次密码不一致";
	}
}
/**
 * 2、验证指定的电子邮箱是否存在
 */
function check_email(){
  //1、获取 email 的值
	var email=$("email").value;
	//2、验证 email 是否为空，如果为空，给出提示，否则 验证电子邮箱是否存在
	if(email == ""){
		$("email-show").innerHTML="电子邮箱不能为空";
	}else{
		console.log(1);
		//AJAX验证电子邮箱是否存在
		//1、获取xhr对象
		var xhr = getXhr();
		//2、创建请求
		var url="data/user/checkemail.php?email="+email;
		xhr.open("get",url,true);
    //3、设置回调函数
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				//获取响应数据
				var resText = xhr.responseText;
				//将响应数据显示在 email-show
				$("email-show").innerHTML=resText;
			}
		}
		//4、发送请求
		xhr.send(null);
	}
}