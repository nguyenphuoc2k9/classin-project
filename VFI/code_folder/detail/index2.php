<?php
include "./conn.php";
$i = 0;
$query = mysqli_query($con, "SELECT * FROM post WHERE id ='$id'");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="../VFI__3_-removebg-preview.png">
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</head>

<body>
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

    <!--Detail-->
    <?php
    while ($row = mysqli_fetch_assoc($query)) {
        $title = $row['title'];
        $desc = $row['descritpion'];
        $img = $row['imgid'];
        $ownerid = $row['owner'];
        $query2 = mysqli_query($con, "SELECT * FROM users WHERE id ='$ownerid'");
        $userimg;
        while ($row2 = mysqli_fetch_assoc($query2)) {
            $username = $row2['username'];
            if ($row2['img'] == null) {
                $userimg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fgray-user-management%2F512%2Frounded-512.png&f=1&nofb=1";
            } else {
                $userimg = "../user upload/" . $row2['img'];
            }
            if ($_SESSION['id'] == $ownerid) {
                $link = "../profile/profile.php?id=$ownerid";
            } else {
                $link = "../profile/otherprofile.php?id=$ownerid";
            }
        }

    ?>
        <div class="detail">
            <div class="detail-box">
                <div class="detail-us">
                    <a href="<?php echo $link ?>"><img src="<?php echo $userimg ?>" alt=""></a>
                    <h1><?php echo $username ?></h1>
                </div>
                <div class="detail-title">
                    <h1><?php echo $title ?></h1>
                </div>
                <div class="detail-desc">
                    <p><?php echo $desc ?></p>
                </div>
                <div class="detail-img">
                    <img src="../Create/uploads/<?php echo $img ?>" alt="" id="detai-img">
                </div>
                <hr>
                <div class="comment">
                    <div class="com-input">
                        <form action="./new.php" method="post">
                            <input type="text" placeholder="Write your comments" name="comment-<?php echo $id ?>" id="comment">
                            <button id="com-submit-<?php echo $id ?>" name="com-submit-<?php echo $id ?>">Submit</button>
                        </form>
                    </div>
                    <div class="com-info" id="com-info">
                        <?php
                        $que = mysqli_query($con, "SELECT * FROM comments_data WHERE postid = '$id'");
                        while ($user = mysqli_fetch_array($que, MYSQLI_ASSOC)) {
                            $userid = $user['userid'];
                            $comment = $user['comment'];
                            $que2 = mysqli_query($con, "SELECT * FROM users WHERE id = '$userid'");

                        ?>
                            <div class="com-card">
                                <?php

                                while ($user_2 = mysqli_fetch_array($que2, MYSQLI_ASSOC)) {
                                    $usern = $user_2['username'];
                                    $userimg;
                                    if ($user_2['img'] == "" || $user_2 == null) {
                                        $userimg = "../user upload/img.png";
                                    } else {
                                        $userimg = "../user upload/" . $user_2['img'];
                                    }
                                    $i += 1;
                                ?>
                                    <div class="user">
                                        <a href="../profile/otherprofile.php?id=<?php echo $user_2['id'] ?>"><img src="<?php echo $userimg ?>" alt=""></a>
                                    </div>
                                    <div class="contain">
                                        <h5><?php echo $usern ?></h5>
                                        <p><?php echo $comment ?></p>
                                    </div>
                                <?php
                                }
                                ?>
                            </div>

                        <?php
                        }
                        ?>
                    </div>
                    <div class="com-more" class="com-more">

                    </div>

                </div>
            </div>
        </div>
    <?php
    }
    ?>
    <!-- footer -->
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