<?php
    session_start();
    // if($_SESSION['username'] == null){
    //     header('location:./home.php');
    // }
    $con = mysqli_connect('localhost', 'root','', 'webadvance') or die("khong the ket noi toi database");
    $id = $_GET['id'];
    echo $id;
    $query = "DElETE FROM admin WHERE id = '$id'";
    if(mysqli_query($con, $query)){
        header("Location:./home.php");
    }else{
        $re = "loi them moi" . mysqli_error($con);
    }
    mysqli_close($con)
?>