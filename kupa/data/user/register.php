<?php
#1、获取请求提交的数据
$email=$_REQUEST["email"];
$upwd=$_REQUEST["upwd"];
#2、连接到数据库
require('../init.php');
#3、执行数据库操作
$sql="insert into kp_user(email,upwd) values('$email','$upwd')";
$result=mysqli_query($conn,$sql);

if($result === true){
  echo '{"code":1,"msg":"注册成功"}';//echo "注册成功";
}else{
  echo '{"code":-1,"msg":"注册失败"}';//echo "注册失败";
}
?>