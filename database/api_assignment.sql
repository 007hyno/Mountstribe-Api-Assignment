-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2023 at 06:31 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE `hospitals` (
  `id` int(75) NOT NULL,
  `name` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospitals`
--

INSERT INTO `hospitals` (`id`, `name`) VALUES
(1, 'Apollo Hospitals'),
(2, 'Max Hospital'),
(3, 'Shri Mahant Indresh Hospital'),
(4, 'AIIMS - All India Institute Of Medical Science');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(95) NOT NULL,
  `email` varchar(254) NOT NULL,
  `phone` int(15) NOT NULL,
  `password` varchar(75) NOT NULL,
  `photo` varchar(2083) NOT NULL,
  `psychiatrist_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `address`, `email`, `phone`, `password`, `photo`, `psychiatrist_id`) VALUES
(1, 'pa1', 'pa1/loc', 'clar1k@example.com', 1234567890, 'pa1pa1', 'https://example.com/images/johndoe.jpg', 1),
(2, 'pa2', 'pa2', 'cla12rk@example.com', 1234567890, 'pa2pa2', 'https://example.com/images/johndoe.jpg', 2),
(3, 'pa3', 'pa3', 'cl23ark@example.com', 3452342323, 'pa3pa3', 'https://example.com/images/johndoe.jpg', 3),
(4, 'pa4', 'pa4', 'clweark@example.com', 3434343423, 'pa4pa4', 'https://example.com/images/johndoe.jpg', 4),
(5, 'pa5', 'pa5', 'cl12ark@example.com', 4534573423, 'pa5pa5', 'pa5', 5),
(6, 'John Doe', '123 Main St', 'JohnDoe@gmail.com',1234567890, 'password', 'https://example.com/images/johndoe.jpg', 2),
(7, 'Jane ', '456 Park Ave', 'JohnDoe@gmail.com', 2222221555, 'password', 'https://example.com/images/johndoe.jpg', 3),
(8, 'Jamith', '456 Park Ave', 'JohnDoe@gmail.com', 1123232555, 'password', 'https://example.com/images/johndoe.jpg', 4),
(9, 'ne Smith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 5),
(10, 'ane Smith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 2),
(11, 'mith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 3),
(12, 'ith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 4),
(13, 'anemith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 5),
(14, 'Jneith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 1),
(15, 'ith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 2),
(16, 'Jamih', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 3),
(17, 'ne Smith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 4),
(18, 'e Smith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 5),
(19, 'J Smith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 1),
(20, 'Jmith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 9),
(21, 'mith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 10),
(22, 'wemith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 7),
(23, 'sdfe Smith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 8),
(24, 'Jsdf Smith', '456 Park Ave', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 1),
(25, 'sssohnson', '789 Elm St', 'JohnDoe@gmail.com', 1234567890, 'password', 'https://example.com/images/johndoe.jpg', 6),
(26, 'John Doe', '1234 Main St', 'johndoe@example.com', 123, 'P@ssword1', 'https://example.com/images/johndoe.jpg', 5),
(27, 'John Doe', '12', 'johndoe@example.com', 123, 'P@ssword1', 'https://example.com/images/johndoe.jpg', 6),
(28, 'Eminouim', '12 asdfasd', 'johndoe@example.com', 1234567890, 'P@ssword1', 'https://example.com/images/johndoe.jpg', 9),
(29, 'Smith', '12 Elm St', 'smith@example.com', 1234567890, 'P@ssword2', 'https://example.com/images/smith.jpg', 7),
(30, 'Johnson', '12 Oak Ave', 'johnson@example.com', 1234567890, 'P@ssword3', 'https://example.com/images/johnson.jpg', 10),
(31, 'Williams', '12 Pine St', 'williams@example.com', 1234567890, 'P@ssword4', 'https://example.com/images/williams.jpg', 8),
(32, 'Jones', '12 Cedar Rd', 'jones@example.com', 1234567890, 'P@ssword5', 'https://example.com/images/jones.jpg', 10),
(33, 'Brown', '12 Maple St', 'brown@example.com', 1234567890, 'P@ssword6', 'https://example.com/images/brown.jpg', 1),
(34, 'Davis', '12 Cedar St', 'davis@example.com', 1234567890, 'P@ssword7', 'https://example.com/images/davis.jpg', 2),
(35, 'Miller', '12 Pine Ave', 'miller@example.com', 1234567890, 'P@ssword8', 'https://example.com/images/miller.jpg', 3),
(36, 'Wilson', '12 Elm Rd', 'wilson@example.com', 1234567890, 'P@ssword9', 'https://example.com/images/wilson.jpg', 4),
(37, 'Moore', '12 Oak St', 'moore@example.com', 1234567890, 'P@ssword10', 'https://example.com/images/moore.jpg', 5),
(38, 'Taylor', '12 Maple Ave', 'taylor@example.com', 1234567890, 'P@ssword11', 'https://example.com/images/taylor.jpg', 6),
(39, 'Anderson', '12 Cedar Rd', 'anderson@example.com', 1234567890, 'P@ssword12', 'https://example.com/images/anderson.jpg', 7),
(40, 'Thomas', '12 Pine St', 'thomas@example.com', 1234567890, 'P@ssword13', 'https://example.com/images/thomas.jpg', 8),
(41, 'Jackson', '12 Elm Ave', 'jackson@example.com', 1234567890, 'P@ssword14', 'https://example.com/images/jackson.jpg', 9),
(42, 'White', '12 Oak Rd', 'white@example.com', 1234567890, 'P@ssword15', 'https://example.com/images/white.jpg', 10),
(43, 'Harris', '12 Maple St', 'harris@example.com', 1234567890, 'P@ssword16', 'https://example.com/images/harris.jpg', 1),
(44, 'Martin', '12 Cedar St', 'martin@example.com', 1234567890, 'P@ssword17', 'https://example.com/images/martin.jpg', 2),
(45, 'Thompson', '12 Pine Ave', 'thompson@example.com', 1234567890, 'P@ssword18', 'https://example.com/images/thompson.jpg', 3),
(46, 'Garcia', '12 Elm Rd', 'garcia@example.com', 1234567890, 'P@ssword19', 'https://example.com/images/garcia.jpg', 4),
(47, 'Martinez', '12 Oak St', 'martinez@example.com', 1234567890, 'P@ssword20', 'https://example.com/images/martinez.jpg', 5),
(48, 'Robinson', '12 Maple Ave', 'robinson@example.com', 1234567890, 'P@ssword21', 'https://example.com/images/robinson.jpg', 6),
(49, 'Clark', '12 Cedar Rd', 'clark@example.com', 1234567890, 'P@ssword22', 'https://example.com/images/clark.jpg', 7),
(50, 'Rodriguez', '12 Pine St', 'rodriguez@example.com', 1234567890, 'P@ssword23', 'https://example.com/images/rodriguez.jpg', 8),
(51, 'Lewis', '12 Elm Ave', 'lewis@example.com', 1234567890, 'P@ssword24', 'https://example.com/images/lewis.jpg', 9),
(52, 'Lee', '12 Oak Rd', 'lee@example.com', 1234567890, 'P@ssword25', 'https://example.com/images/lee.jpg', 10);
-- --------------------------------------------------------

--
-- Table structure for table `psychiatrists`
--

CREATE TABLE `psychiatrists` (
  `id` int(75) NOT NULL,
  `name` varchar(75) NOT NULL,
  `hospital_id` int(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `psychiatrists`
--

INSERT INTO `psychiatrists` (`id`, `name`, `hospital_id`) VALUES
(1, 'psy1', 1),
(2, 'psy2', 2),
(3, 'psy3', 3),
(4, 'psy4', 4),
(5, 'psy5', 1),
(6, 'psy6', 2),
(7, 'psy7', 3),
(8, 'psy8', 4),
(9, 'psy9', 1),
(10, 'psy10', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `psychiatrists_id` (`psychiatrist_id`);

--
-- Indexes for table `psychiatrists`
--
ALTER TABLE `psychiatrists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hospital_id` (`hospital_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospitals`
--
ALTER TABLE `hospitals`
  MODIFY `id` int(75) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `psychiatrists`
--
ALTER TABLE `psychiatrists`
  MODIFY `id` int(75) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`psychiatrist_id`) REFERENCES `psychiatrists` (`id`);

--
-- Constraints for table `psychiatrists`
--
ALTER TABLE `psychiatrists`
  ADD CONSTRAINT `psychiatrists_ibfk_1` FOREIGN KEY (`hospital_id`) REFERENCES `hospitals` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
