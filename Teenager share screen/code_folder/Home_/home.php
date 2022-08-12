<?php
    include("./code.php");
    include("./style.php");
    while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
        $img = "../user upload/" . $row['img'];
        if($row['img'] == null){
            $_SESSION['img'] = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fgray-user-management%2F512%2Frounded-512.png&f=1&nofb=1";
        } else {
            $_SESSION['img'] = $img;
        }
    }
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
                <h1><a href="../profile/profile.php?id=<?php echo $_SESSION['id'];?>"><img src="<?php echo $_SESSION['img'] ?>"></a> <?php echo $_SESSION['username']; ?></h1>
                <button id="log-out"> <a href = "../Login/logout.php">Log Out</a></button>
            </div>
        </div>
        <div class="sidenav-close-btn" id="close-">
            <button id="close"><i class="fa-solid fa-bars"></i></button>
        </div>
    </div>
    <!-- Home-container -->

    <div class="home">
        <div class="home-box">
            <div class="home-title">
                <h1>Home</h1>
            </div>
            <div class="home-container">
                <?php
                    while($row = mysqli_fetch_array($query2, MYSQLI_ASSOC)){
                        $title = $row['title'];
                        $desc = $row['descrition'];
                        $img = $row['img'];
                        $id = $row['id'];
                    }
                ?>
                <div class="main">
                    <div class="main-img">
                        <img src="../dảk image.png" alt="image">
                    </div>
                    <div class="main-info">
                        <div class="main-title">
                            <h1><?php echo $title;?></h1>
                        </div>
                        <p><?php echo $desc?></p><a href="../detail/detail.php?id=<?php echo $id?>">Read more</a></p>
                    </div>
                </div>
                <div class="extra">
                    <div class="main-img">
                        <img src="../dảk image.png" alt="imgae">
                    </div>
                    <div class="main-info">
                        <div class="main-title">
                            <h1>hi</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.il eveniet! Blanditiis vel facere laudantium consequatur vitae voluptate enim. <a href="#">Read more</a></p>
                    </div>
                </div>
                <div class="extra">
                    <div class="main-img">
                        <img src="../dảk image.png" alt="imgae">
                    </div>
                    <div class="main-info">
                        <div class="main-title">
                            <h1>hi</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  repudiandae tempora, nihil eveniet! Blanditiis vel facere laudantium consequatur vitae voluptate enim. <a href="#">Read more</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- UPDATE-->
    <div class="update-news">
        <div class="update-title">
            <h1>Update news</h1>
        </div>
        <div class="update-box">
            <div class="update">
                <h1>Our website just release</h1>
                <p>This is my first project in MindX Advance, so this website is about news,i always wonder that what if a day the teacher can noicte us in the website instead saying at class.So i deicied to make this website.This Website is the place where student can read teacher or school message easier,imaging how tired are you when the there is a message of the teacher taht need to be noitce, if the teacher is busy he can't report us so they can upload on my website and the student can ready it.</p>
            </div>
            <a href="#" class="more"></a>
        </div>
    </div>
    <!-- footer -->

    <div class="footer" id="footer">
        <div class="footer-title">
            <h1>You can contact us on</h1>
        </div>
        <div class="footer-icon">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-instagram-square"></i>
            <i class="fa-brands fa-youtube-square"></i>
            <i class="fa-brands fa-telegram"></i>
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
    <script src="./app.js"></script>
</body>
</html>