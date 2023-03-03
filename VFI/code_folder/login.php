<?php
session_start();
include "./conn.php";
    $check = false;
    $datauser;
    // if($row = mysqli_fetch_array($query,MYSQLI_ASSOC)){

    // }
    if(isset($_POST['btn'])){
        $name = mysqli_real_escape_string($con,$_POST['login-name']); 
        $password = mysqli_real_escape_string($con,$_POST['login-password']);
        // $password = md5($password);
        // echo $password;
        $check = false;
        
        
        
        if(strlen($name) > 10 || strlen($name) < 4){
            $check  = true;
            echo "<script type='text/javascript'>";
            echo "alert('Invalid Name')";
            echo "</script>";
            exit;
        }
        if(strlen($password) < 6 ){
            echo "<script type='text/javascript'>";
            echo "alert('Invalid Password')";
            echo "</script>";
            $check = true;
            exit;
        }
        if($check == false){
            $password = md5($password);
            $query= "SELECT * from users where username = '$name' && password='$password'";
            $result = mysqli_query($con,$query);
            $num = mysqli_num_rows($result);
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
            if($num == 1){
                $_SESSION['username'] = $name;
                $_SESSION['id'] = $row['id'];
                header("Location:./home.php");
            } else {
                header('Location:./login.php');
            }
        
        }
    }
    include("./Login/index.php");
    include("./Login/style.php");
?>