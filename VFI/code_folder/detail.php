<?php
ob_start();
session_start();
    include("./detail/style.php");
    $tt = $_GET['tt'];
    $id = $_GET['id'];
    if($tt == "webpost"){
        include("./detail/index.php");
        include("./detail/app.php");
    } else if($tt == "pe-post"){
        include("./detail/index2.php");
        include("./detail/app.php");
    }
?>