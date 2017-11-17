<?php 

header('Content-Type: application/json;charset=UTF-8');

require_once('../init.php');
$sql = "SELECT hid,title,subtitle,pic,price FROM kp_hotsale";
echo json_encode(sql_execute($sql));