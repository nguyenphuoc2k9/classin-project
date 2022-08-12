<?php
session_start();
    $con =mysqli_connect("localhost","root","","teen-project-database") or die("khong the ket noi toi database");
    $check = false;
    $datauser;
    // if($row = mysqli_fetch_array($query,MYSQLI_ASSOC)){

    // }
    if(isset($_POST['btn'])){
        $name = $_POST['login-name'];
        $password = $_POST['login-password'];
        $query= "SELECT * from users where username = '$name' && password='$password'";
        $result = mysqli_query($con,$query);
        $num = mysqli_num_rows($result);
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if($num == 1){
            $_SESSION['username'] = $name;
            $_SESSION['id'] = $row['id'];
            header("Location:../Home_/home.php");
        } else {
            header('Location:./Login/login.php');
        }
    }
    include("./Login.html");
?>