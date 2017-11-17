<?php

header('Content-Type: application/json;charset=UTF-8');

require_once("../init.php");
$sql = "SELECT pid,title,pic,href FROM kp_index_product";
echo json_encode(sql_execute($sql));