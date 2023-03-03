<?php
    ob_start();
    session_start();
    include "./conn.php";
    if(isset($_POST['btn'])){
        $username = $_POST['login-name'];
        $password = $_POST['login-password'];
        $query = mysqli_query($con,"SELECT * FROM admin WHERE username='$username' AND password = '$password'");
        $nums = mysqli_num_rows($query);
        if($nums ==1){
            $_SESSION['admin-name'] = $username;
            header("Location:./dashboard.php");
        } else {
            header("Location:./admin-login.php");
        }
    }
    include "./admin_page/style.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login">
        <div class="login-box">
            <div class="login-title">
                <h1>Login to Admin Page</h1>
            </div>
            <form action="./admin-login.php" method="POST">
                <div class="login-input">
                
                    <label for="login-inputname">Name :</label>
                    <input type="text" name = "login-name" id="login-name"placeholder="Enter your account name..." id="login-inputname">
                    <p class="input-desc" id="input-desc-name"></p>
                    <label for="login-inputpassword">Password:</label>
                    <input type="password" id="login-password"name="login-password" placeholder="Enter your password..." id="login-inputpassword">
                    <p class="input-desc" id="input-desc-pass"></p>
                    <div class="login-btn">
                        <button name="btn"id="login-btn" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
