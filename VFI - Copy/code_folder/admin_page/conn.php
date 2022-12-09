<?php
    ob_start();
    session_start();
    include "./style.php";
    $con = mysqli_connect("localhost","root","","teen-project-database") or die("khong the ket noi toi database");
?>