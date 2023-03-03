<?php
    ob_start();
    session_start();
    include "./conn.php";
    $id = $_GET['id'];
    $result = mysqli_query($con, "SELECT * FROM users WHERE id='$id'");
    
    include("./profile/index2.php");
    include("./profile/style.php");
    include("./profile/app.php");
?>