-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2022 at 08:50 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teen-project-database`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'phuoc', 'phuocnguyen');

-- --------------------------------------------------------

--
-- Table structure for table `comments_data`
--

CREATE TABLE `comments_data` (
  `id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `userid` int(11) NOT NULL,
  `postid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments_data`
--

INSERT INTO `comments_data` (`id`, `comment`, `userid`, `postid`) VALUES
(11, 'phuoc', 32, 11),
(12, 'lol', 32, 11),
(13, 'lol duy idol', 32, 12),
(14, 'lol duy idol', 32, 12),
(15, 'XD', 32, 11),
(16, 'XD', 32, 11),
(17, 'dep trai', 33, 11);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `descritpion` text NOT NULL,
  `imgid` text NOT NULL,
  `owner` text NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `descritpion`, `imgid`, `owner`, `comment`) VALUES
(11, 'meme của duy', 'rất đẹp trai✔', 'img633ee738101a53.07465010.jpg', '24', ''),
(12, 'meme của duy', 'số hiệu 2', 'img633ee74c9fc276.44021387.jpg', '24', ''),
(16, 'phuocnguyen', 'phuocidol', 'img637a3507a5a0a9.59015229.png', '33', '');

-- --------------------------------------------------------

--
-- Table structure for table `post_pre`
--

CREATE TABLE `post_pre` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `imgid` text NOT NULL,
  `descritpion` text NOT NULL,
  `owner` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_pre`
--

INSERT INTO `post_pre` (`id`, `title`, `imgid`, `descritpion`, `owner`) VALUES
(35, 'kgjhgjhg', 'img63789f830b3ef8.44127053.png', 'iu687ghiug', '32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `gmail` text NOT NULL,
  `hobby` text NOT NULL,
  `Phone_number` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `gmail`, `hobby`, `Phone_number`, `img`) VALUES
(10, 'phatdepzai', '73f50c9f17291ce93ee52e50b73f6f63', 'lantran2@gmail.com', '', '', 'img10.png'),
(13, 'anh123', '6753b0111efb82f97aeed8357ab79b90', 'anhnguyen@gmail.com', '2009', '090532540', 'img13.jpeg'),
(24, 'duy idol', '6753b0111efb82f97aeed8357ab79b90', 'phuochuunguyen2009@gmail.com', '', '0905332540', ''),
(32, 'phuoc', 'ad1dbb80e5287aabf83b9f7bd46fcbf0', 'phuochuunguyen2009@gmail.com', '', '0905332540', ''),
(33, 'phuocnew', '6753b0111efb82f97aeed8357ab79b90', 'phuochuunguyen2009@gmail.com', '', '0905332540', '');

-- --------------------------------------------------------

--
-- Table structure for table `webpost`
--

CREATE TABLE `webpost` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `img` text NOT NULL,
  `descrition` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `webpost`
--

INSERT INTO `webpost` (`id`, `title`, `img`, `descrition`) VALUES
(5, 'Tại sao nên khuyến khích trẻ chơi thể thao?', 'mz4a3836-1394126468.png', 'Giai đoạn đầu tuổi trẻ thành niên là thời điểm cho thấy sự khác biệt về chiều cao, cân năng, sức bền, khả năng hợp tác. Không phải điều ngẫu nhiên, đây là giai đoạn mà bố mẹ biết được năng khiếu các môn thể thao của trẻ.\n\nThông thường, trẻ thành niên thường không có đam mê ở thể thao ở trường học nếu không có sự khích lệ từ cha mẹ. Trẻ sẽ cảm thấy không thích môi trường cạnh tranh, kỷ luật mà huấn luyện viên yêu cầu.\n\nĐối với những trẻ thích thể thao, thể dục thường xuyến sẽ có xu hướng luyện tập thể thao suốt cuộc đời. Do đó, trẻ cần thêm động lực từ gia đình và thầy cô dể duy trì sực tích cự thể thao trong giai đoạn trẻ thành niên.'),
(6, 'Nghe nhạc có lợi gì cho trẻ nhỏ?', 'th-2161349940.png', '1. Nghe nhạc có mang lại nhiều lợi ích cho trẻ?\nChắn chắn âm nhạc có thể mang lại nhiều lợi ích không chỉ đối với trẻ em mà còn với tất cả mọi người. Hãy thử nghĩ xem âm nhạc đã ảnh hưởng như thế nào đến cuộc sống? Những giai điệu lạc quan, vui vẻ giúp chúng ta giải tỏa căng thẳng và những áp lực trong cuộc sống, hay nhạc nhẹ và nhạc blues giúp mỗi người dễ dàng chìm vào giấc ngủ. Đối với trẻ sơ sinh, tác dụng của âm nhạc cũng không khác so với người trưởng thành.\n\nNhững bài hát ru đã chứng minh khả năng của người mẹ trong việc giúp trẻ sơ sinh thấy thoải mái và dễ dàng đưa bé đi vào mỗi giấc ngủ ngon. Thậm chí nhiều em bé đã quấy khóc và không chịu đi ngủ cho đến khi cha mẹ hoặc người chăm sóc cất lên những tiếng hát ru quen thuộc.\n\nÂm nhạc đôi khi còn là một phần của liệu pháp điều trị cho những trẻ sơ sinh bị sinh non. Đã có nhiều nghiên cứu chứng minh mối liên quan giữa nghe nhạc với việc cải thiện khả năng tăng cân ở trẻ sơ sinh. Một nghiên cứu trong số này đã cho thấy trẻ sinh non 34 tuần tuổi được cho ngậm những chiếc núm vú giả lưu trữ một số bài hát ru có thời gian nằm viện và chăm sóc đặc biệt ngắn hơn đáng kể.'),
(8, 'Trẻ em có thực sự cần uống sữa?', 'th-1425166467.png', 'Sữa cung cấp dồi dào chất đạm, canxi và vitamin D, song còn nhiều thực phẩm khác có thể mang đến các chất dinh dưỡng này.\n\nTất cả chúng ta từng nghe nói về sữa: Tốt cho cơ thể, hoàn toàn tự nhiên và giúp xương vững chắc. Nhiều người cố gắng uống vài cốc sữa một ngày vì nghĩ về lợi ích sức khỏe của nó. \n\n\"Vậy trẻ em có nhất thiết phải uống sữa? Tất nhiên là không\", Amy Lanou, một chuyên gia về dinh dưỡng tại Đại học Bắc Carolina ở Asheville (Mỹ) khẳng định. \"Hầu hết mọi người trên thế giới không uống sữa sau khi cai sữa mẹ và vẫn nhận được đầy đủ chất dinh dưỡng\", bà nói thêm.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments_data`
--
ALTER TABLE `comments_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_pre`
--
ALTER TABLE `post_pre`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `webpost`
--
ALTER TABLE `webpost`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comments_data`
--
ALTER TABLE `comments_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `post_pre`
--
ALTER TABLE `post_pre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `webpost`
--
ALTER TABLE `webpost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
heroku_02bd5b35239bd4dheroku_02bd5b35239bd4d