<?php
header("Content-Type:application/json;charset=UTF-8");

require('../init.php');

$e = $_REQUEST["email"];
$p = $_REQUEST["upwd"];
$sql = "SELECT * FROM kp_user WHERE email='$e' AND upwd='$p'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row==null){
    echo '{"code":-1,"msg":"用户名或电子邮箱错误"}';
}else{
    //$type = $row['type'];"type":'.$type.',
    $uid = $row['uid'];
    echo '{"code":1,"uid":'.$uid.'}';
}

//$e = $_REQUEST["email"];
//$p = $_REQUEST["upwd"];
//$sql = "SELECT * FROM kp_user WHERE email='^$e$' AND upwd='^$p&'";
//echo json_encode(sql_execute($sql));
?>