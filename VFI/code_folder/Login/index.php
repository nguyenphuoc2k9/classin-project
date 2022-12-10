<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="icon" href="../VFI__3_-removebg-preview.png">
</head>
<body>
    <div class="login">
        <div class="login-box">
            <div class="login-title">
                <h1>Login to our website</h1>
            </div>
            <form action="login.php" method="POST">
                <div class="login-input">
                    <label for="login-inputname">Name :</label>
                    <input type="text" name = "login-name" id="login-name"placeholder="Enter your account name..." id="login-inputname">
                    <p class="input-desc" id="input-desc-name"></p>
                    <label for="login-inputpassword">Password:</label>
                    <input type="password" id="login-password"name="login-password" placeholder="Enter your password..." id="login-inputpassword">
                    <p class="input-desc" id="input-desc-pass"></p>
                    <div class="login-btn">
                        <button name="btn"id="login-btn">Login</button>
                    </div>
                </div>
            </form>
            <div class="login-newacc">
                <h3 id="newacc-desc">Don't have a account ?</h3>
                <a href="../Sigh in/sighin.php">Sigh In</a>
            </div>
        </div>
    </div>
    <div class="pop-overlay"  id="pop-up">
        <div class="pop-up">
            <img src="../404-tick.png" alt="">
            <h1>Thank you</h1>
            <p>You have sucsess login in to our website</p>
            <button onclick="closepop()">OK</button>
        </div>
    </div>
    <script src="./login.js"></script>
</body>
</html>