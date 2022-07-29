<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="sidebar">
        <div class="sidebar-a">
            <a href="./index.php"><img src="./CT-removebg-preview.png" alt="website logo"/></a>
            <form action="index.php" method="GET">  
                <div class="input-filter">
                    <select name="select" id="search-select">
                        <option value="all">All</option>
                        <option value="fashion">Fashion</option>
                        <option value="electric equipment">Electric Equipment</option>
                        <option value="house stuff">House Stuff</option>
                        <option value="pet stuff">Pet Stuff</option>
                        <option value="health practice">Health Practice</option>
                    </select>
                    <input type="text" placeholder="Enter things you need to buy..." id="search-input">
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
            <a href="#">Sigh In</a>
            <a href="#">Log In</a>
        </div>
        <div class="sidebar-b">
            <a href="#">All</a>
            <a href="../top deals/index.php">Top Deals</a>
            <a href="../custome-service/index.php">Custome Service</a>
            <a href="../Gifts-card/index.php">Gifts Card</a>
            <a href="../Seller/index.php">Seller</a>
        </div>
    </div>
    <div class="sidenav">
        <h1><i class="fa-solid fa-circle-user"></i>Hello</h1>
        <div class="content">
            <h2>Shop By Department</h2>
            <ul>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Computer</a></li>
                <li><a href="#">Fashion</a></li>
            </ul>
            <hr/>
            <ul>
                <li><a href="#">Sigh In</a></li>
            </ul>
        </div>
    </div>
    <script src="https://kit.fontawesome.com/1410425ca1.js" crossorigin="anonymous"></script>
</body>
</html>