<?php
    session_start();
    $con = mysqli_connect("localhost","root","","teen-project-database");
    $id = $_GET['id'];
    if(mysqli_query($con, "DELETE FROM post WHERE id = '$id'")){
        header("Location:./profile.php");
    } else {
        echo mysqli_errno($con);
    }
?>