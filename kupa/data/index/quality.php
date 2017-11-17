<?php

header('Content-Type: application/json;charset=UTF-8');

require_once('../init.php');
$sql= "SELECT qid,title,pic FROM kp_index_quality";
echo json_encode(sql_execute($sql));