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
                            <div class="comment">
                                <div class="com-input">
                                    <form action="" method="post">
                                        <input type="text" placeholder="Write your comments">
                                        <button id="com-submit">Submit</button>
                                    </form>
                                </div>
                                <div class="com-info">
                                    <div class="com-card">
                                        <div class="user">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEX///8AAAD7+/vi4uLq6ur19fXt7e2+vr6JiYnExMTc3NzY2NhpaWmEhIS0tLSXl5csLCxLS0tgYGDLy8tCQkKurq4aGhpycnKmpqYVFRV7e3syMjKRkZFRUVEICAgkJCQ6OjoRlVeJAAAGl0lEQVRogcVb6ZqqMAxFVhE3XEBAlPd/yjuQtLIlTRG/e/7NCD20zZ7WcewR7OLjqbzU56zYvIpzeilPx3gXLBjJEm4SledsM4esKqPE/R11eM1vs8Qf3PJr+AtqN8rfBmrAO4/WXgFvK2JW2HorckepFXeLOl6L+zwe+lXnh8efmHue73u7a3Q65PVEFKtoBe54NO/b/p74U+1y/d19P5LJ+volt3cZzPn2YHUqSB63V/+F/Vf7/+wP1TwkY3mPqv/SaTH3tegNc5BPwzv03nsvW363N8b7aWdDwlNPUp8LyP3mw32yt1/h6WObUuvX48+q58tsZ1jqEQrL1T99NCxZxN0i+Wjg3ea93PiaF18T3zjOXY9TirndWk+cJGinVbz3R4Mm+Hr6eyF5oC3MljYtanWyOuLFQrunvSj8+JAfmac+a7o5b9ktOKrnLhJ6Tc6KW7Lpo+QG1o9ezORqzyv+S8NiQL95Mo8HyvTUJnK1nzVLHsSXzQhvZp8CNSWD5D8k5LtDNebu3qHFT8vSgyO/4kMpQ+7v56hbFHQ8oWfPWD21mWeG/ERxtzjQ9Lj3Bb1AyjTQ5N4kyhriRr4aqGWlHlCGgVa16EXRapC6rxRvO/+z2nRaeCMj91/0RdpeZXbmtx43nd67K0nZx5ucPYYr77nfUJxupG0P5vO3CUib4qJczcR6Hr5LO62a5BuBjCRpDrQHdBgg2XTAi1x7NGYTbxvD/28kuTNr3+ZBx5EYLI4Ez8WMhVa2WE6+2ZCjoNqNRAOXNaenntNcU9ApZD73AJiwNxOm2JAzWhtCoN3MTJ1Je3wr9oYOyVCx+w4Jdv3MTN1q2zlPEcIy98y9Z5y6dvxCMKHuafzE1vTB1uxM5QKdndZKF/6mRcUxuPUpuLoFmnslGpFxtVZl94bLAzrYcOS27GzNCAwe2hZUQT7Rs2Rnk1aQITQu4LZp17CEnc1E/FfvC2HhGf+ygH3HDgZ+vlt69PmGDHs9fdeDpa3UJ4K1WpkdKF/tAoG+0QEV4M5xTcELUQDL3aollFdMyf2R45rCUOqBdKg1bxCzcLl6C1k8K2WHlaz+hA4iVV5I/zJHO3bDPsLGZy4OmxkqQL3ylwimck6BUwahq/mP3QlDeY2MV2CsS8UoTkxA53zSABvwBUKwcEc0Yqx3tQ1sOvBKBF72hArH1hRszWyHRjBiiTkM38V4cjQE+ArREdcHAkp+lyxNTQciTUfE+IXg3CV22Q58Twr0vMKs3aCf9jLf8OU+iK4yBzy9wdhYeriNaeExOSkwQzKwBxYJbAe6ftJn38jmbutgja0oYH/J9l3lWlJUpuFg3wvMXk0uzgmt2I3dFJD5s0jfW9jYO3MfAsKFVGTrOjQc3wCFuWEDnvWCdl7QsJS7Gt5pdAAVLkU+DiANMJjSgYbycRL/DghkJx/MIud8/Dvae8lRCVnFTtJ507ENeBCBoDi9hhEHSd9Ux3WBLKaFlwTkop4nhrKBiudljVKz0jeice76WVkugzAaXNEOYi7TSogsj0N4BUctUnVHx8itiZPlsAp8kCVcQaTcOdL8XePAkFfCcwL33nKLahcfMOwixXEGtQtVtxGeKWGCLOmplEHdJsxslp6xONLzfbDwGW6TpF6nwGXSgg53h0G9TlSrVOCETqhvWKtUIQXWaQ1BcIeQ74SKxA5r0u7ob8G+GUxtJhgiGM9VUJ8HjE8cTCAwmZP6vKA30eFq6EC3Y5jiU2yF91Ncc1+m5Ra5982F50d7MQhjwc0yPSnvKU+mzk9afbAgPkw3cPLzUZEfsXo2iwNxCKicmTrdi/TibWMStXkUzTOerAEaq3FhY6YPG3hRmS5jVsjSPPL6WoiTnJQWhj1o13/k8uSFR5PffVREjA6mJln1xtvQ6Howq5Ydqm2rCSoVnRFKtAJpaF+okOER4rrPKjZu8Xc7zQFHnj13YVsEXwzCGtlr9RJQrtRdS8o50PGjbz5K9C24hHFJMdoOgibl72CIvawOd1jDmNuLTxQtgDnodWUxxG/I++dp1ya3PM77H8j756hXhKguBVhf8iUlOY0lXSgOshxLQ3B+U46X9cUhz7YdQaORlZIGcC0bvyQOy66MxWuEOdny61pLmpBDLLkso+F9Z3ku396TW3A3TiFd4Y6cO70fJ0K11gXFyL4Tmq5xN0/hf96LbCG+E1rsV78T2kFyH3YfLzBsUrjJsayIu8Dn/PjLu8D6E+Ae9O3c2sLinV7y5z1KltyD/gdy1lA0YYkq7AAAAABJRU5ErkJggg==" alt="">
                                        </div>
                                        <div class="contain">
                                            <h5>Phuoc</h5>
                                            <p>comments below</p>
                                        </div>
                                    </div>
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