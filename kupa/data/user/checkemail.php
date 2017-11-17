<?php
#1、数据库连接
require('../init.php');
#2、接收前端传递过来的参数 email
$email=$_REQUEST["email"];
#3、到数据库中验证 email 是否存在
$sql="select * from kp_user where email='$email'";
$result = mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row == null){
	echo true;//'{"code":1,"msg":"通过"}';//echo "通过";
}else{
	echo false;//'{"code":-1,"msg":"电子邮箱已存在"}';//echo "电子邮箱已存在";
}
?>