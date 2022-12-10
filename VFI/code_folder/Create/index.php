<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post Creator</title>
    <link rel="icon" href="../VFI__3_-removebg-preview.png">
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</head>
<body>
    <!-- Header -->

    <!-- Header -->

    <div class="header">
        <div class="header-box">
            <div class="head-logo">
                <a  class ="logo-image" href="#"><img src="./VFI__3_-removebg-preview.png" alt="logo"></a>
                <?php
                    if(isset($_POST['search-btn'])){
                        $_SESSION['k'] = $_POST['k'];
                    } else {
                        $_SESSION['k'] = null;
                    }
                ?>
                <form action = "./search.php?k=<?php echo $_SESSION['k']?>">
                    <input type="text" name = "k" placeholder="Enter the things that you want to search">
                    <button type="submit" name="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div class="userinfo">
                    <h1><a href="./profile.php?id=<?php echo $_SESSION['id'];?>"><img src="<?php echo $_SESSION['img'] ?>"></a> <?php echo $_SESSION['username']; ?></h1>
                    <div class="dropdown">
                        <i onclick="drop()"id='dropbtn'class="fa-solid fa-angle-down"></i>
                        <div class="dropdown-content" id="dropdown">
                        <a href="../Login/logout.php">Sigh Out</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="head-con">
                <a class="head-text" href="./home.php"><i class="fa-solid fa-house"></i>Home</a>
                <a class="head-text" href="./new.php" class="fa-solid fa-newspaper"></i>News</a>
                <a href="./create.php" class="head-text"><i class="fa-solid fa-plus"></i>Create</a>
                <a href="./virus.php" class="head-text"><i class="fa-solid fa-virus"></i>Covid-19 details</a>
            </div>
        </div>
    </div>
    <!--Create-->

    <div class="create">
        <div class="create-box">
            <div class="create-title">
                <h1>Create your post!</h1>
            </div>
            <div class="create-input">
                <form action="./create.php" method="POST" enctype="multipart/form-data">
                    <label for="title">Title :</label>
                    <input type="text" class="input"name="title" id="title">
                    <label for="desc">Desc :</label>
                    <input type="text" name="desc" class="input"id="desc">
                    <label for="file">File :</label>
                    <input type="file" name="file" id="file">
                    <button type="submit" name="btn">Create</button>
                </form>
            </div>
        </div>
    </div>

    <!-- footer -->

    <div class="footer" id="footer">
        <div class="footer-title">
            <h1>You can contact us on</h1>
        </div>
        <div class="footer-icon">
            <a href="https://www.facebook.com/Teenager-Blog-109466681887056"><i class="fa-brands fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/teenblog2009/"><i class="fa-brands fa-instagram-square"></i></a>
            <a href="https://www.youtube.com/channel/UCC_Q2OmoQP0vEwVF3nr87Tg"><i class="fa-brands fa-youtube-square"></i></a>
            <a href="https://web.telegram.org/z/#777000"><i class="fa-brands fa-telegram"></i></a>
        </div>
        <div class="footer-info">
          <div class="info-card">
              <h5>Email:</h5>
              <p>Phuochuunguyen2009@gmail.com</p>
          </div>
          <div class="info-card">
              <h5>Phone number:</h5>
              <p>0905332540</p>
          </div>
          <div class="info-card">
              <h5>Facebook:</h5>
              <p>nguyễn Phước</p>
          </div>  
        </div>
    </div>
</body>
</html>