<?php
$conn = mysqli_connect("127.0.0.1","root","","kp",3306);
mysqli_query($conn,"SET NAMES UTF8");

function sql_execute($sql){
  global $conn;
  $result = mysqli_query($conn, $sql);
  if(!$result){
    return  "查询执行失败！请检查SQL语法：$sql";
  }else {
    if(stripos($sql,"select")===0){
      return $rowList = mysqli_fetch_all($result,MYSQLI_ASSOC);
    }else{
      return $result;
    }
  }
}
?>