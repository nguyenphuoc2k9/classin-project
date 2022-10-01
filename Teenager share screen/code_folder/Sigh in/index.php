<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sigh In</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <div class="sighin">
            <div class="sighin-pic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOi1KXq3Z1jHalpErV8Y1X3xJZft5hUMOqtg&usqp=CAU" alt="sighin-pic"/>
            </div>
            <div class="sighin-box">
                <div class="sighin-title">
                    <h1>Sigh In</h1>
                </div>
                <form action="./sighin.php" method="post">
                    <div class="sighin-input-card">
                        <input type="text" id="sighin-name" name="sighin-name" class="sighin-input" required>
                        <label for="sighin-name" class="sighin-label">Name </label>
                        <p id="sighin-desc-name">Name must have above 5 letters and below 16 letters</p>
                    </div>
                    <div class="sighin-input-card">
                        <input type="password" id="sighin-pn" name ="sighin-pn"class="sighin-input" required>
                        <label for="sighin-password" class="sighin-label">Phone Number </label>
                        <p id="sighin-desc-pn">Phone number must have 10 numbers</p>
                    </div>
                    <div class="sighin-input-card">
                        <input type="text" id="sighin-email" name ="sighin-email"class="sighin-input" required>
                        <label for="sighin-email" class="sighin-label">Email </label>
                        <p id="sighin-desc-email">Email must have @ and dots</p>
                    </div>
                    <div class="sighin-input-card">
                        <input type="password" id="sighin-password" name ="sighin-password"class="sighin-input" required>
                        <label for="sighin-password" class="sighin-label">Password </label>
                        <p id="sighin-desc-password">Create your password(note:password must have above 5 letter and include numbers and letters)</p>
                    </div>
                    <div class="sighin-input-card">
                    <input type="password" id="signin-confirm" name ="sighin-confirm"class="sighin-input" required>
                    <label for="sighin-confirm" class="sighin-label">Confirm password</label>
                    <p id="sighin-desc-confirm">Confirm the password you entered in the password input</p>
                    <div class="sighin-input-btn">
                        <button id="sighin-btn" name="btn"type="submit">Sigh In</button>
                    </div>
                </form>
                
            </div>
        </div>
    <script src="./sighin.js"></script>
</body>
</html>