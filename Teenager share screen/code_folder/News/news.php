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
                <div class="head-btn">

                </div>
            </div>
            <div class="head-con">
                <a class="head-text" href="../Home_/home.php"><i class="fa-solid fa-house"></i>Home</a>
                <a class="head-text" href="../News/news.php"><i class="fa-solid fa-newspaper"></i>News</a>
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

    <!--News-->

    <div class="home">
        <div class="home-box">
            <div class="home-title">
                <h1>Welcome to News</h1>
            </div>
            <div class="news-section">
                <div class="news-box">
                    <?php
                        while($row = mysqli_fetch_array($querry, MYSQLI_ASSOC))
                        {
                            $id = $row['id'];
                            $title = $row['title'];
                            $desc = $row['descritpion'];
                            $ownerid = $row['owner'];
                            $querry2 = mysqli_query($con, "SELECT * FROM users WHERE id = '$ownerid'");
                            $owner_name;
                            $avartar;
                            $img = "../Create/uploads/" . $row['imgid'];
                            ?>
                    <div class="news">
                        <div class="info">
                                <?php
                                    while($row2 = mysqli_fetch_array($querry2, MYSQLI_ASSOC)){
                                        if($row2['img'] ==null){
                                            $avartar = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fgray-user-management%2F512%2Frounded-512.png&f=1&nofb=1";
                                        } else {
                                            $avartar = "../user upload/" . $row2['img'];
                                        }
                                        $owner_name = $row2['username'];
                                ?>
                            <div class="owner">
                                
                                <a href="../profile/otherprofile.php?id=<?php echo $row2['id'];?>"><img src="<?php echo $avartar?>"></a>
                                <h1><?php echo $owner_name;?></h1>
                            </div>
                            <?php }
                            ?>
                            <h1><?php echo $title?></h1>
                            <p class="class_desc"><?php echo $desc?></p>
                            <div class="news-btn">
                               <button><span></span><p class="text-read-more">Read more</p></button>
                            </div>
                        </div>
                        <img src="<?php echo $img?>" alt="img">
                    </div>
                        <?php }
                    ?>
                    
                    <div class="news">
                        <div class="info">
                            <div class="owner">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fgray-user-management%2F512%2Frounded-512.png&f=1&nofb=1">
                                <h1>LOL</h1>
                            </div>
                            <h1>Title</h1>
                            <p class="class_desc"> toàn khđược trên đường đi học về, cũng "màu nâu đậm, hình vuông, bên trong có chứa nhiều giấy tờ quan trọng và một số tiền lớn".</p>
                            <div class="news-btn">
                               <button><span></span><p class="text-read-more">Read more</p></button>
                            </div>
                        </div>
                        <img src="../dảk image.png" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer-->

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