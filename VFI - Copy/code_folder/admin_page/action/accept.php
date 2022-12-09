<?php
    include "./conn.php";
    $id = $_GET['id'];
    $result = mysqli_query($con, "SELECT * FROM post_pre WHERE id ='$id'");
    $row = mysqli_fetch_assoc($result);
    $title = $row['title'];
    $imgid = $row['imgid'];
    $owner = $row['owner']; 
    $desc = $row['descritpion'];
    $query2 = mysqli_query($con, "INSERT INTO post(title,descritpion,imgid,owner) VALUES('$title','$desc','$imgid','$owner')");
    $query = mysqli_query($con, "DELETE FROM post_pre WHERE id = '$id'");
    header("Location:../user-post.php");
?>