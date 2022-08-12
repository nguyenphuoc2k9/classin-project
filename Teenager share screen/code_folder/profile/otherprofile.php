<?php
    ob_start();
    session_start();
    $con = mysqli_connect("localhost","root","","teen-project-database") or die("khong the ket noi toi database");
    $id = $_GET['id'];
    $result = mysqli_query($con, "SELECT * FROM users WHERE id='$id'");

    include("./index2.php");
    include("./style.php");
?>