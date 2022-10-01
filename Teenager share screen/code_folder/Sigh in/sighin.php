
<?php
session_start();
include("./index.php");
    $con =mysqli_connect("localhost","root","","teen-project-database") or die("khong the ket noi toi database");
    $check = false;
    // if($row = mysqli_fetch_array($query,MYSQLI_ASSOC)){

    // }
    if(isset($_POST['btn'])){
        $name = mysqli_real_escape_string($con,$_POST['sighin-name']); 
        $email = mysqli_real_escape_string($con, $_POST['sighin-email']);
        $password = mysqli_real_escape_string($con,$_POST['sighin-password']);
        $pn = mysqli_real_escape_string($con,$_POST['sighin-pn']);
        $confirm = mysqli_real_escape_string($con,$_POST['sighin-confirm']);
        $query= "SELECT * from users where username = '$name'";
        $check = true;
        // $result = mysqli_query($con,$query);
        // $num = mysqli_num_rows($result);
        if(strlen($name) > 10 || strlen($name) < 4){
            $check  = false;
            echo "<script type='text/javascript'>";
            echo 'document.getElementById("sighin-desc-name").style.color ="red" ';
            echo 'document.getElementById("sighin-desc-name").innerText = "Invalid Name"';
            echo "alert('Invalid Name')";
            echo "</script>";
        }
        if(strlen($pn) < 10 ){
            echo "<script type='text/javascript'>";
            echo 'document.getElementById("sighin-desc-pn").style.color ="red" ';
            echo 'document.getElementById("sighin-desc-pn").innerText = "Invalid Phone Number"';
            echo "</script>";
            $check = false;
        }
        if(!str_contains($email,"@") && !str_contains($email,".")){
            $check = false;
        }
        if(strlen($password) < 6){
            $check = false;
        }
        if($password != $confirm){
            $check = false;
        }
        if($check == true){
            $result = mysqli_query($con,$query);
            $num = mysqli_num_rows($result);
            if($num == 1){
                echo '<script type ="text/JavaScript">';  
                echo 'alert("Account already ecxits")';  
                echo '</script>'; 
            } else {
                $password = md5($password);
                $req = "INSERT INTO users(username,password,gmail) VALUES ('$name','$password','$email')";
                mysqli_query($con,$req);
                echo '<script type ="text/JavaScript">';  
                echo 'alert("Sigh In succes")';  
                echo '</script>'; 
                header('Location:../Login/Login.php');
            }
        }
    }
?>