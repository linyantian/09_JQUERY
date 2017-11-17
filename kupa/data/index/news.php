<?php

header('Content-Type: application/json;charset=UTF-8');

require_once("../init.php");
$sql = "SELECT nid,title,pic,href FROM kp_index_news";
echo json_encode(sql_execute($sql));