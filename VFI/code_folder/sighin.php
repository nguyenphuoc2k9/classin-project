<?php
session_start();
include("./Sigh in/index.php");
include("./Sigh in/style.php");
include "./conn.php";
    $check = false;
    // if($row = mysqli_fetch_array($query,MYSQLI_ASSOC)){

    // }
    if(isset($_POST['btn'])){
        $name = mysqli_real_escape_string($con,$_POST['sighin-name']); 
        $email = mysqli_real_escape_string($con, $_POST['sighin-email']);
        $password = mysqli_real_escape_string($con,$_POST['sighin-password']);
        $pn = mysqli_real_escape_string($con,$_POST['sighin-pn']);
        $confirm = mysqli_real_escape_string($con,$_POST['sighin-confirm']);
        $query= "SELECT * from users where username = '$name' or gmail = '$email'";
        $check = true;
        // $result = mysqli_query($con,$query);
        // $num = mysqli_num_rows($result);
        if(strlen($name) > 10 || strlen($name) < 4){
            $check  = false;
            echo "<script type='text/javascript'>";
            echo "alert('Invalid Name')";
            echo "</script>";
            exit;
        }
        if(strlen($pn) < 10 ){
            echo "<script type='text/javascript'>";
            echo "alert('Invalid Phone Number')";
            echo "</script>";
            $check = false;
            exit;
        }
        if(!str_contains($email,"@") && !str_contains($email,".")){
            echo "<script type='text/javascript'>";
            echo "alert('Invalid email')";
            echo "</script>";
            $check = false;
            exit;
        }
        if(strlen($password) < 6 ){
            echo "<script type='text/javascript'>";
            echo "alert('Invalid Password')";
            echo "</script>";
            $check = false;
            exit;
        }
        if($password != $confirm){
            echo "<script type='text/javascript'>";
            echo "alert('Invalid Password')";
            echo "</script>";
            $check = false;
            exit;
        }
        if($check == true){
            $result = mysqli_query($con,$query);
            $num = mysqli_num_rows($result);
            if($num >= 1){
                echo '<script type ="text/JavaScript">';  
                echo 'alert("Account already ecxits")';  
                echo '</script>';
                exit;
            } else {
                $password = md5($password);
                $req = "INSERT INTO users(username,password,gmail,phone_number) VALUES ('$name','$password','$email','$pn')";
                mysqli_query($con,$req);
                echo '<script type ="text/JavaScript">';  
                echo 'alert("Sigh In succes")';  
                echo '</script>'; 
                header('Location:./Login.php');
            }
        }
    }
?>