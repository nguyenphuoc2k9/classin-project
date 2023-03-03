<?php
    session_start();
    include "./Virus Forecast/style.php";
    $id = $_SESSION['id'];
    include "./conn.php";
    $query = mysqli_query($con, "SELECT * FROM users WHERE id='$id'");
    while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
        $img = "../user upload/" . $row['img'];
        if($row['img'] == null){
            $_SESSION['img'] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEX///8AAAD7+/vi4uLq6ur19fXt7e2+vr6JiYnExMTc3NzY2NhpaWmEhIS0tLSXl5csLCxLS0tgYGDLy8tCQkKurq4aGhpycnKmpqYVFRV7e3syMjKRkZFRUVEICAgkJCQ6OjoRlVeJAAAGl0lEQVRogcVb6ZqqMAxFVhE3XEBAlPd/yjuQtLIlTRG/e/7NCD20zZ7WcewR7OLjqbzU56zYvIpzeilPx3gXLBjJEm4SledsM4esKqPE/R11eM1vs8Qf3PJr+AtqN8rfBmrAO4/WXgFvK2JW2HorckepFXeLOl6L+zwe+lXnh8efmHue73u7a3Q65PVEFKtoBe54NO/b/p74U+1y/d19P5LJ+volt3cZzPn2YHUqSB63V/+F/Vf7/+wP1TwkY3mPqv/SaTH3tegNc5BPwzv03nsvW363N8b7aWdDwlNPUp8LyP3mw32yt1/h6WObUuvX48+q58tsZ1jqEQrL1T99NCxZxN0i+Wjg3ea93PiaF18T3zjOXY9TirndWk+cJGinVbz3R4Mm+Hr6eyF5oC3MljYtanWyOuLFQrunvSj8+JAfmac+a7o5b9ktOKrnLhJ6Tc6KW7Lpo+QG1o9ezORqzyv+S8NiQL95Mo8HyvTUJnK1nzVLHsSXzQhvZp8CNSWD5D8k5LtDNebu3qHFT8vSgyO/4kMpQ+7v56hbFHQ8oWfPWD21mWeG/ERxtzjQ9Lj3Bb1AyjTQ5N4kyhriRr4aqGWlHlCGgVa16EXRapC6rxRvO/+z2nRaeCMj91/0RdpeZXbmtx43nd67K0nZx5ucPYYr77nfUJxupG0P5vO3CUib4qJczcR6Hr5LO62a5BuBjCRpDrQHdBgg2XTAi1x7NGYTbxvD/28kuTNr3+ZBx5EYLI4Ez8WMhVa2WE6+2ZCjoNqNRAOXNaenntNcU9ApZD73AJiwNxOm2JAzWhtCoN3MTJ1Je3wr9oYOyVCx+w4Jdv3MTN1q2zlPEcIy98y9Z5y6dvxCMKHuafzE1vTB1uxM5QKdndZKF/6mRcUxuPUpuLoFmnslGpFxtVZl94bLAzrYcOS27GzNCAwe2hZUQT7Rs2Rnk1aQITQu4LZp17CEnc1E/FfvC2HhGf+ygH3HDgZ+vlt69PmGDHs9fdeDpa3UJ4K1WpkdKF/tAoG+0QEV4M5xTcELUQDL3aollFdMyf2R45rCUOqBdKg1bxCzcLl6C1k8K2WHlaz+hA4iVV5I/zJHO3bDPsLGZy4OmxkqQL3ylwimck6BUwahq/mP3QlDeY2MV2CsS8UoTkxA53zSABvwBUKwcEc0Yqx3tQ1sOvBKBF72hArH1hRszWyHRjBiiTkM38V4cjQE+ArREdcHAkp+lyxNTQciTUfE+IXg3CV22Q58Twr0vMKs3aCf9jLf8OU+iK4yBzy9wdhYeriNaeExOSkwQzKwBxYJbAe6ftJn38jmbutgja0oYH/J9l3lWlJUpuFg3wvMXk0uzgmt2I3dFJD5s0jfW9jYO3MfAsKFVGTrOjQc3wCFuWEDnvWCdl7QsJS7Gt5pdAAVLkU+DiANMJjSgYbycRL/DghkJx/MIud8/Dvae8lRCVnFTtJ507ENeBCBoDi9hhEHSd9Ux3WBLKaFlwTkop4nhrKBiudljVKz0jeice76WVkugzAaXNEOYi7TSogsj0N4BUctUnVHx8itiZPlsAp8kCVcQaTcOdL8XePAkFfCcwL33nKLahcfMOwixXEGtQtVtxGeKWGCLOmplEHdJsxslp6xONLzfbDwGW6TpF6nwGXSgg53h0G9TlSrVOCETqhvWKtUIQXWaQ1BcIeQ74SKxA5r0u7ob8G+GUxtJhgiGM9VUJ8HjE8cTCAwmZP6vKA30eFq6EC3Y5jiU2yF91Ncc1+m5Ra5982F50d7MQhjwc0yPSnvKU+mzk9afbAgPkw3cPLzUZEfsXo2iwNxCKicmTrdi/TibWMStXkUzTOerAEaq3FhY6YPG3hRmS5jVsjSPPL6WoiTnJQWhj1o13/k8uSFR5PffVREjA6mJln1xtvQ6Howq5Ydqm2rCSoVnRFKtAJpaF+okOER4rrPKjZu8Xc7zQFHnj13YVsEXwzCGtlr9RJQrtRdS8o50PGjbz5K9C24hHFJMdoOgibl72CIvawOd1jDmNuLTxQtgDnodWUxxG/I++dp1ya3PM77H8j756hXhKguBVhf8iUlOY0lXSgOshxLQ3B+U46X9cUhz7YdQaORlZIGcC0bvyQOy66MxWuEOdny61pLmpBDLLkso+F9Z3ku396TW3A3TiFd4Y6cO70fJ0K11gXFyL4Tmq5xN0/hf96LbCG+E1rsV78T2kFyH3YfLzBsUrjJsayIu8Dn/PjLu8D6E+Ae9O3c2sLinV7y5z1KltyD/gdy1lA0YYkq7AAAAABJRU5ErkJggg==";
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
    <title>Home-Virus Dictionary</title>
    <link rel="icon" href="../VFI__3_-removebg-preview.png">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="section loading">Loading data...</div>
    <div class="section error">Failed to load data</div>
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
                <a href="./index.php" class="head-text"><i class="fa-solid fa-virus"></i>Covid-19 details</a>
            </div>
        </div>
    </div>
    <div class="home">
        <div class="home-title">
            <h1>Covid-19 World Live Information</h1>
        </div>
        <div class="home-box">
            <div class="home-select">
                <div class="select">
                    <div class="select-btn">
                        <span>Select Country</span>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="content">
                        <div class="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" id='search-country'placeholder="Search">
                        </div>
                        <ul class="options">
                            <li class="option" value="World">World</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="home-card">
                <div class="card-title">
                    <h1>New Information</h1>
                </div>
                <div class="card-info">
                    
                    <div class="card-in-card" id="con">
                        <h1>Confirmed</h1>
                        <p id="con-today">000</p>
                    </div>
                    <div class="card-in-card" id="dea">
                        <h1 id ="death">Deaths </h1>
                        <p id="dea-today">000</p>
                    </div>
                </div>
                <div class="card-title">
                    <h1>Total Information</h1>
                </div>
                <div class="card-info">
                    
                        <div class="card-in-card" id="con">
                            <h1 id="con">Confirmed</h1>
                            <p id="con-total">000</p>
                        </div>
                        <div class="card-in-card" id="dea">
                            <h1 id="death">Deaths</h1>
                            <p id="dea-total">000</p>
                        </div>
                </div>
            </div>
        </div>
        <div class="home-chart" id="home-chart">
            <div id="google-chart"></div>
            <div class="chart-desc">
                <div class="chart-card">
                    <h1>Description</h1>
                    <p id="country-desc">This was a dangerous country</p>
                </div>
                <div class="chart-card">
                    <h1>Death rate :</h1>
                    <p id="rate">80%</p>
                </div>
            </div>
        </div>
    </div>
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
    <script type="text/javascript"src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/StephanWagner/svgMap@v2.6.0/dist/svgMap.min.js"></script>
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</body>
</html>
<?php
    include "./Virus Forecast/app.php";
?>