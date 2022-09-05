<?php
include "./conn.php";
    $query = $_GET['query'];
    $id = $_GET['id'];
    if($query == "post"){
        $result = mysqli_query($con, "DELETE FROM post WHERE id ='$id'");
        header("Location:../user-post.php");
    } elseif($query == "web_post"){
        $result = mysqli_query($con, "DELETE FROM webpost WHERE id='$id'");
        header("Location:../web-post.php");
    } elseif($query == "user"){
        $result = mysqli_query($con, "DELETE FROM users WHERE id ='$id'");
        header("Location:../user.php");
    }
?>