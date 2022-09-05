
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
        $query= "SELECT * from users where username = '$name'";
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
?>