<?php
    session_start();
    include "./conn.php";
    $id = $_GET['id'];
    if(mysqli_query($con, "DELETE FROM post WHERE id = '$id'")){
        header("Location:./profile.php");
    } else {
        echo mysqli_errno($con);
    }
?>