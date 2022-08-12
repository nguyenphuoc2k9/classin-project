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
                <img src="<?php echo $_SESSION['img'];?>">
                <h1><?php echo $_SESSION['username'];?></h1>
            </div>
            <div class="profile-info">
                
                    
                        
                        
                        <h1>About</h1>
                    <div class="card">
                        <h1>Gmail :</h1>
                        <h2><?php echo $gmail?></h2>
                        <button class="popup"><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                    </div>
                    <div class="card">
                        <h1>Hobby :</h1>
                        <h2><?php echo $hobby?></h2>
                        <button class="popup"><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                    </div>
                    <div class="card">
                        <h1>Phone number:</h1>
                        <h2><?php echo $pn;?></h2>
                        <button class="popup"><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                    </div>
                    <div class="card-btn">
                        <button class="popup">Edit profile image</button>
                    </div>
                    <hr/>
                    <?php }?>
            </div>
        </div>
    </div>
    <div class="pop-up">
        <div class="pop-box">
            <button class="closepop" ><i class="fa-solid fa-xmark"></i></button>
            <h1>Enter your email</h1>
            <form action="./profile.php" method="post">
                <div class="pop-card">
                    <label for="email">Email :</label>
                    <input type="text" name="email" required>
                </div>
                <div class="pop-btn">
                    <button type="submit" name="email-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
    <div class="pop-up" >
        <div class="pop-box">
            <button class="closepop" ><i class="fa-solid fa-xmark"></i></button>
            <h1>Enter your Hobby</h1>
            <form action="./profile.php" method="post">
                <div class="pop-card">
                    <label for="hobby">Hobby :</label>
                    <input type="text" name="hobby" required>
                </div>
                <div class="pop-btn">
                    <button  type="submit" name="hobby-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
    <div class="pop-up">
        <div class="pop-box">
            <button class="closepop" ><i class="fa-solid fa-xmark"></i></button>
            <h1>Enter your Phone number</h1>
            <form action="./profile.php" method="post">
                <div class="pop-card">
                    <label for="pn">Phone number :</label>
                    <input type="text" name="pn" required>
                </div>
                <div class="pop-btn">
                    <button type="submit" name="pn-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
    <div class="pop-up">
        <div class="pop-box">
            <button class="closepop" ><i class="fa-solid fa-xmark"></i></button>
            <h1>Choose your profile image</h1>
            <form action="./profile.php" method="post" enctype="multipart/form-data">
                <div class="pop-card">
                    <label for="file">Image</label>
                    <input type="file" id="file" name="file-up" required>
                </div>
                <div class="pop-btn">
                    <button type="submit" id = "file-btn"name="file-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
    <script src="./app.js"></script>
</body>
</html>