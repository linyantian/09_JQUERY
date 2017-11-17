<?php
$kw=$_REQUEST["term"];
$conn = mysqli_connect('127.0.0.1','root','','xz',3306);
mysqli_query($conn,"SET NAMES UTF8");
$sql="SELECT title FROM xz_laptop WHERE title LIKE '%".$kw."%' ORDER BY sold_count DESC LIMIT 10";
$result = mysqli_query($conn, $sql);
$arr=[];
foreach($result as $row){
  $arr[]=$row["title"];
}
echo json_encode($arr);
  
 