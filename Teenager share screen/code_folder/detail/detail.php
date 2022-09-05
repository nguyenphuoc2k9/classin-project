<?php
ob_start();
session_start();
    include("./style.php");
    $tt = $_GET['tt'];
    $id = $_GET['id'];
    if($tt == "webpost"){
        include("./index.php");
    } else if($tt == "pe-post"){
        include("./index2.php");
    }
?>