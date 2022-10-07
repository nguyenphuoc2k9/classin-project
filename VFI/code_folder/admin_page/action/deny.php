<?php
    include "./conn.php";
    $id = $_GET['id'];
    $query = mysqli_query($con, "DELETE FROM post_pre WHERE id = '$id'");
    header("Location:../user-post.php");
?>