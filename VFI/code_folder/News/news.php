<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posts</title>
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</head>

<body>

    <!-- Header -->

    <div class="header">
        <div class="header-box">
            <div class="head-logo">
                <a class="logo-image" href="#"><img src="../VFI__3_-removebg-preview.png" alt="logo"></a>
                <?php
                if (isset($_POST['search-btn'])) {
                    $_SESSION['k'] = $_POST['k'];
                } else {
                    $_SESSION['k'] = null;
                }
                ?>
                <form action="../search_result/search.php?k=<?php echo $_SESSION['k'] ?>">
                    <input type="text" name="k" placeholder="Enter the things that you want to search">
                    <button type="submit" name="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div class="userinfo">
                    <h1><a href="../profile/profile.php?id=<?php echo $_SESSION['id']; ?>"><img src="<?php echo $_SESSION['img'] ?>"></a> <?php echo $_SESSION['username']; ?></h1>
                    <div class="dropdown">
                        <i onclick="drop()" id='dropbtn' class="fa-solid fa-angle-down"></i>
                        <div class="dropdown-content" id="dropdown">
                            <a href="../Login/logout.php">Sigh Out</a>
                        </div>
                    </div>
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
                <a href="../Home_/home.php">Forums</a>
                <a href="../News/new.php">Virus Forecast</a>
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
                <h1>Welcome to Posts</h1>
            </div>
            <div class="news-section">
                <div class="news-box">
                    <?php
                    while ($row = mysqli_fetch_array($querry, MYSQLI_ASSOC)) {
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
                                while ($row2 = mysqli_fetch_array($querry2, MYSQLI_ASSOC)) {
                                    if ($row2['img'] == null) {
                                        $avartar = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fgray-user-management%2F512%2Frounded-512.png&f=1&nofb=1";
                                    } else {
                                        $avartar = "../user upload/" . $row2['img'];
                                    }
                                    $owner_name = $row2['username'];
                                ?>
                                    <div class="owner">

                                        <a href="../profile/otherprofile.php?id=<?php echo $row2['id']; ?>"><img src="<?php echo $avartar ?>"></a>
                                        <h1><?php echo $owner_name; ?></h1>
                                    </div>
                                <?php }
                                ?>
                                <h1><?php echo $title ?></h1>
                                <p class="class_desc"><?php echo $desc ?></p>
                                <div class="news-btn">
                                    <a href="../detail/detail.php?id=<?php echo $id ?>&&tt=pe-post"><span></span>
                                        <p class="text-read-more">Read more</p>
                                    </a>
                                </div>
                            </div>
                            <div class="img">
                                <img src="<?php echo $img ?>" alt="img">
                            </div>
                            <hr>
                            <?php
                                // $show_comment = mysqli_query($con, "SELECT * FROM comments_data");
                                if(isset($_POST['com-submit-'.$id])){
                                    
                                    $comment = $_POST["comment-".$id];
                                    $user_id = $_SESSION['id'];
                                    $query = "INSERT INTO comments_data(comment,userid,postid) VALUES ('$comment','$user_id','$id')";
                                    if(mysqli_query($con, $query)){
                                        // header("Location : ./new.php?uploaddone");
                                    }else {
                                        // echo "<script type='text/javascript'>";
                                        // echo " alert('There was an erorr uploading comment')";
                                        // echo " </script>";
                                        // header("Location : ./new.php");
                                    }
                                }
                            ?>
                            <div class="comment">
                                <div class="com-input">
                                    <form action="./new.php" method="post">
                                        <input type="text" placeholder="Write your comments" name="comment-<?php echo $id?>" id="comment">
                                        <button id="com-submit-<?php echo $id?>" name="com-submit-<?php echo $id?>">Submit</button>
                                    </form>
                                </div>
                                <div class="com-info">
                                    <?php
                                    $i = 1;
                                        $que = mysqli_query($con, "SELECT * FROM comments_data WHERE postid = '$id'");
                                        while($user = mysqli_fetch_array($que, MYSQLI_ASSOC)){
                                            $userid = $user['userid'];
                                            $comment = $user['comment'];
                                            $que2 = mysqli_query($con, "SELECT * FROM users WHERE id = '$userid'");    
                                            
                                    ?>
                                    <div class="com-card">
                                        <?php
                                            
                                            while($user_2 = mysqli_fetch_array($que2, MYSQLI_ASSOC)){
                                                $usern = $user_2['username'];
                                                $userimg;                                               
                                            if($user_2['img'] == "" || $user_2 == null){
                                                $userimg = "../user upload/img.png";
                                            }else {
                                                $userimg = "../user upload/".$user_2['img'];
                                            }
                                            if($i >= 3){
                                                break;
                                            }
                                            $i += 1;
                                        ?>
                                        <div class="user">
                                            <a href="../profile/otherprofile.php?id=<?php echo $user_2['id']?>"><img src="<?php echo $userimg?>" alt=""></a>
                                        </div>
                                        <div class="contain">
                                            <h5><?php echo $usern?></h5>
                                            <p><?php echo $comment?></p>
                                        </div>
                                        <?php }?>
                                    </div>
                                    <?php
                                        }
                                    ?>
                                </div>
                            </div>

                        </div>
                    <?php }
                    ?>

                    <!-- <div class="news">
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
                    </div> -->
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