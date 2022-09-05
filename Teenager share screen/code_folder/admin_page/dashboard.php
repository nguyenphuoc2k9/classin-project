<?php
    include "./conn.php";
    $num1 = mysqli_num_rows(mysqli_query($con,"SELECT * FROM post")); 
    $num2 = mysqli_num_rows(mysqli_query($con,"SELECT * FROM webpost"));
    $nums3 = mysqli_num_rows(mysqli_query($con,"SELECT * FROM users"));
    if(!isset($_SESSION['admin-name'])){
        header("Location:./admin-login.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="header">
        <div class="header-box">
            <div class="head-name">
                <h1>Admin Page</h1>
            </div>
            <div class="head-acc">
                <img src="https://tchblg.de/wp-content/uploads/user-avatar-768x768.png" alt="">
                <h1><?php echo $_SESSION['admin-name']?></h1>
                <div class="dropdown">
                    <i onclick="drop()"id='dropbtn'class="fa-solid fa-angle-down"></i>
                    <div class="dropdown-content" id="dropdown">
                    <a href="./logout.php">Sigh Out</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sidenav">
        <hr>
        <div class="sidenav-box">
            <a href="./dashboard.php?">Dashboard</a>
            <a href="./user-post.php">Manage User Post</a>
            <a href="./user.php">Manage User</a>
            <a href="./web-post.php">Manage Web Post</a>
        </div>
    </div>
    <div class="dashboard">
        <div class="detail-card">
            <div class="info">
                <h1><?php echo $nums3?></h1>
                <h3>Users</h3>
            </div>
            <i class="fa-solid fa-users"></i>
        </div>
        <div class="detail-card">
            <div class="info">
                <h1><?php echo $num1?></h1>
                <h3>User posts</h3>
            </div>
            <i class="fa-solid fa-file"></i>
        </div>
        <div class="detail-card">
            <div class="info">
                <h1><?php echo $num2?></h1>
                <h3>Website posts</h3>
            </div>
            <i class="fa-solid fa-newspaper"></i>
        </div>
    </div>
    <script src="./app.js"></script>
</body>
</html>