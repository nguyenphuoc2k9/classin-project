<?php
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</head>
<body>
    <!-- Header -->

    <div class="header">
        <div class="header-box">
            <div class="head-logo">
                <a  class ="logo-image" href="#"><img src="../d.png" alt="logo"></a>
                <form action="" method="get">
                    <input type="text" placeholder="Enter your ideas...">
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div class="head-btn" id="head-btn">
                    
                </div>
            </div>
            <div class="head-con">
                <a class="head-text" href="../Home_/home.php"><i class="fa-solid fa-house"></i>Home</a>
                <a class="head-text" href="../News/new.php"><i class="fa-solid fa-newspaper"></i>News</a>
                <a href="../Create/create.php" class="head-text"><i class="fa-solid fa-plus"></i>Create</a>
            </div>
        </div>
    </div>
    <!--Sidenav-->

    <div class="sidenav">
        <div class="sidenav-box" id="sidenav-box">
            <div class="option">
                <a href="#">Main news</a>
                <a href="#">Personal news</a>
                <a href="#">Update</a>
                <a href="#">About</a>
            </div>
            <hr/>
            <div class="userinfo">
                <h1><a href="../profile/profile.php"><img src="<?php echo $_SESSION['img']?>"></a> <?php echo $_SESSION['username']; ?></h1>
                <button id="log-out"> <a href = "../Login/logout.php">Log Out</a></button>
            </div>
        </div>
        <div class="sidenav-close-btn" id="close-">
            <button id="close"><i class="fa-solid fa-bars"></i></button>
        </div>
    </div>
    <div class="profile">
        <div class="profile-box">
        <?php
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            $gmail = $row['gmail'];
                        $hobby = $row['hobby'];
                        $pn = $row['Phone_number'];
                        $img = "../user upload/" . $row['img'];
                        
            ?>
            <div class="profile-img">
                <img src="<?php echo $img;?>">
                <h1><?php echo $_SESSION['username'];?></h1>
            </div>
            <div class="profile-info">
                
                    
                        
                        
                        <h1>About</h1>
                    <div class="card">
                        <h1>Gmail :</h1>
                        <h2><?php echo $gmail?></h2>
                    </div>
                    <div class="card">
                        <h1>Hobby :</h1>
                        <h2><?php echo $hobby?></h2>
                    </div>
                    <div class="card">
                        <h1>Phone number:</h1>
                        <h2><?php echo $pn;?></h2>
                    </div>
                    <hr/>
                    <?php }?>
            </div>
        </div>
        </div>
    <script src="./app.js"></script>
</body>
</html>