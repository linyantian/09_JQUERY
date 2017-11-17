<?php 

header('Content-Type: application/json;charset=UTF-8');

require_once('../init.php');
$sql = "SELECT sid,title,price,gobuy,href,pic FROM kp_series";
echo json_encode(sql_execute($sql));