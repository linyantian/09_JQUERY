<?php
  header("Content-Type:text/plain;charset=UTF-8");
  @$uname=$_REQUEST["uname"];
  echo "Hi $uname,您的个人信息时:".json_encode($_REQUEST);
