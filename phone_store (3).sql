-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 13, 2026 at 09:14 PM
-- Server version: 8.4.7
-- PHP Version: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phone_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
CREATE TABLE IF NOT EXISTS `carts` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`cart_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2026-03-17 17:08:42', '2026-03-17 17:08:42'),
(2, 2, '2026-03-17 17:08:42', '2026-03-17 17:08:42'),
(3, NULL, '2026-03-23 11:17:38', '2026-03-23 11:17:38');

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
CREATE TABLE IF NOT EXISTS `cart_items` (
  `cart_item_id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `variant_id` int DEFAULT NULL,
  PRIMARY KEY (`cart_item_id`),
  KEY `cart_id` (`cart_id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`cart_item_id`, `cart_id`, `quantity`, `variant_id`) VALUES
(13, 3, 3, 1),
(3, 2, 1, NULL),
(15, 3, 1, NULL),
(16, 3, 1, NULL),
(17, 3, 1, NULL),
(18, 3, 1, NULL),
(19, 3, 1, NULL),
(20, 3, 1, NULL),
(28, 1, 2, NULL),
(22, 1, 2, NULL),
(23, 1, 1, NULL),
(24, 1, 1, NULL),
(25, 1, 1, NULL),
(26, 1, 1, NULL),
(27, 1, 1, NULL),
(29, 1, 1, NULL),
(30, 1, 1, NULL),
(31, 1, 1, NULL),
(32, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Apple', 'Điện thoại của Apple với thiết kế đẹp và hiệu năng mạnh mẽ', NULL, NULL),
(2, 'Samsung', 'Điện thoại của Samsung, nổi bật với màn hình tuyệt vời và camera chất lượng', NULL, NULL),
(3, 'Xiaomi', 'Điện thoại Xiaomi với giá cả phải chăng và tính năng đa dạng', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `status` enum('pending','processing','completed','cancelled') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`),
  KEY `idx_user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `total_price`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1799.98, 'pending', '2026-03-17 17:08:42', '2026-03-17 17:08:42'),
(2, 1, 849.99, 'completed', '2026-03-17 17:08:42', '2026-03-17 17:08:42'),
(3, 2, 1599.98, 'processing', '2026-03-17 17:08:42', '2026-03-17 17:08:42'),
(4, 1, 2499.97, 'pending', '2026-03-18 01:41:01', '2026-03-18 01:41:01'),
(5, NULL, 3999.96, 'pending', '2026-03-23 11:34:37', '2026-03-23 18:34:37'),
(6, NULL, 10749.89, 'pending', '2026-03-24 19:07:35', '2026-03-25 02:07:35'),
(7, NULL, 1999.98, 'pending', '2026-03-24 19:09:14', '2026-03-25 02:09:14'),
(8, NULL, 5999.94, 'pending', '2026-03-24 19:11:29', '2026-03-25 02:11:29'),
(9, NULL, 999.99, 'pending', '2026-03-24 19:12:59', '2026-03-25 02:12:59'),
(10, NULL, 999.99, 'pending', '2026-03-24 19:16:13', '2026-03-25 02:16:13'),
(11, NULL, 1999.98, 'pending', '2026-03-24 19:45:06', '2026-03-25 02:45:06');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
CREATE TABLE IF NOT EXISTS `order_items` (
  `order_item_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `order_id` (`order_id`),
  KEY `idx_product_id` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`order_item_id`, `order_id`, `product_id`, `quantity`, `price`) VALUES
(1, 1, 1, 2, 999.99),
(2, 2, 2, 1, 849.99),
(3, 3, 1, 1, 999.99),
(4, 3, 3, 1, 749.99),
(5, 4, 1, 1, 999.99),
(6, 4, 3, 2, 749.99),
(7, 5, 1, 4, 999.99),
(8, 6, 3, 1, 749.99),
(9, 6, 1, 10, 999.99),
(10, 7, 1, 2, 999.99),
(11, 8, 1, 6, 999.99),
(12, 9, 1, 1, 999.99),
(13, 10, 1, 1, 999.99),
(14, 11, 1, 2, 999.99);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `price` decimal(10,2) NOT NULL,
  `stock_quantity` int DEFAULT '0',
  `category_id` int DEFAULT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`),
  KEY `idx_category_id` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `stock_quantity`, `category_id`, `image_url`, `created_at`, `updated_at`) VALUES
(1, 'iPhone 14', 'Điện thoại iPhone 14, màn hình Super Retina XDR, chip A15 Bionic', 999.99, 50, 1, 'images/products/iphone14.jpg', '2026-03-17 17:08:42', '2026-03-25 02:22:58'),
(2, 'Samsung Galaxy S22', 'Samsung Galaxy S22 với màn hình Dynamic AMOLED 2X và camera 108MP', 849.99, 30, 2, 'images/products/s22.jpg', '2026-03-17 17:08:42', '2026-04-13 19:04:33'),
(3, 'Xiaomi Mi 11', 'Xiaomi Mi 11, màn hình AMOLED, Snapdragon 888, camera 108MP', 749.99, 40, 3, 'images/products/mi11.jpg', '2026-03-17 17:08:42', '2026-04-13 19:04:38'),
(5, 'Samsung Galaxy S23 Ultra', 'Màn hình Dynamic AMOLED 2X, Camera 200MP, Chip Snapdragon 8 Gen 2', 1399.99, 30, 2, 'images/products/s23ultra.jpg', '2026-04-13 16:17:59', '2026-04-13 16:17:59'),
(6, 'Xiaomi 13 Pro', 'Màn hình AMOLED, Snapdragon 8 Gen 2, Camera 50MP, 12GB RAM', 999.99, 40, 3, 'images/products/xiaomi13pro.jpg', '2026-04-13 16:17:59', '2026-04-13 16:17:59'),
(7, 'OPPO Find X5 Pro', 'Màn hình AMOLED, Camera 50MP, Snapdragon 8 Gen 1, 12GB RAM', 1099.99, 25, 2, 'images/products/oppofindx5pro.jpg', '2026-04-13 16:17:59', '2026-04-13 16:17:59'),
(8, 'Samsung Galaxy Z Fold 4', 'Màn hình gập, AMOLED, Camera 50MP, Snapdragon 8 Gen 1', 1799.99, 15, 2, 'images/products/z4.jpg', '2026-04-13 16:17:59', '2026-04-13 19:40:07'),
(9, 'Google Pixel 7 Pro', 'Màn hình LTPO OLED 6.7 inch, Camera 50MP, Chip Tensor', 899.99, 35, 2, 'images/products/googlepixel7pro.jpg', '2026-04-13 16:17:59', '2026-04-13 16:17:59'),
(10, 'OnePlus 11 5G', 'Màn hình AMOLED, Snapdragon 8 Gen 2, Camera 50MP', 899.99, 50, 2, 'images/products/oneplus11.jpg', '2026-04-13 16:17:59', '2026-04-13 16:17:59'),
(11, 'Realme GT 2 Pro', 'Màn hình AMOLED, Snapdragon 8 Gen 1, Camera 50MP', 799.99, 60, 3, 'images/products/realmegt2pro.jpg', '2026-04-13 16:17:59', '2026-04-13 16:17:59'),
(12, 'Vivo X90 Pro', 'Màn hình AMOLED, Snapdragon 8 Gen 2, Camera 50MP', 999.99, 40, 2, 'images/products/vivox90pro.jpg', '2026-04-13 16:17:59', '2026-04-13 16:17:59'),
(13, 'Xiaomi Mi 12 Pro', 'Màn hình AMOLED, Snapdragon 8 Gen 1, Camera 50MP', 899.99, 55, 3, 'images/products/mi12pro.jpg', '2026-04-13 16:17:59', '2026-04-13 16:17:59'),
(14, 'iPhone 13 Pro Max', 'Màn hình OLED, Camera 12MP, Chip A15 Bionic', 1099.99, 45, 1, 'images/products/iphone13promax.jpg', '2026-04-13 16:17:59', '2026-04-13 16:17:59');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
CREATE TABLE IF NOT EXISTS `product_images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=MyISAM AUTO_INCREMENT=142 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`image_id`, `product_id`, `image_url`) VALUES
(1, 1, 'images/products/iphone14_1.jpg'),
(2, 1, 'images/products/iphone14_2.jpg'),
(3, 1, 'images/products/iphone14_3.jpg'),
(4, 2, 'images/products/s22_1.jpg'),
(5, 2, 'images/products/s22_2.jpg'),
(6, 2, 'images/products/s22_3.jpg'),
(7, 3, 'images/products/mi11_1.jpg'),
(8, 3, 'images/products/mi11_2.jpg'),
(9, 3, 'images/products/mi11_3.jpg'),
(31, 8, 'images/products/z4_1.jpg'),
(32, 8, 'images/products/z4_2.jpg'),
(51, 8, 'images/products/z4_3.jpg'),
(112, 6, 'images/products/xiaomi13pro_1.jpg'),
(113, 6, 'images/products/xiaomi13pro_2.jpg'),
(114, 6, 'images/products/xiaomi13pro_3.jpg'),
(115, 7, 'images/products/oppofindx5pro_1.jpg'),
(116, 7, 'images/products/oppofindx5pro_2.jpg'),
(117, 7, 'images/products/oppofindx5pro_3.jpg'),
(121, 9, 'images/products/googlepixel7pro.jpg'),
(122, 9, 'images/products/googlepixel7pro.jpg'),
(123, 9, 'images/products/googlepixel7pro.jpg'),
(124, 10, 'images/products/oneplus11.jpg'),
(125, 10, 'images/products/oneplus11.jpg'),
(126, 10, 'images/products/oneplus11.jpg'),
(127, 11, 'images/products/realmegt2pro.jpg'),
(128, 11, 'images/products/realmegt2pro.jpg'),
(129, 11, 'images/products/realmegt2pro.jpg'),
(130, 12, 'images/products/vivox90pro.jpg'),
(131, 12, 'images/products/vivox90pro.jpg'),
(132, 12, 'images/products/vivox90pro.jpg'),
(133, 13, 'images/products/mi12pro.jpg'),
(134, 13, 'images/products/mi12pro.jpg'),
(135, 13, 'images/products/mi12pro.jpg'),
(136, 14, 'images/products/iphone13promax.jpg'),
(137, 14, 'images/products/iphone13promax.jpg'),
(138, 14, 'images/products/iphone13promax.jpg'),
(139, 5, 'images/products/s23ultra_2.jpg'),
(140, 5, 'images/products/s23ultra_3.jpg'),
(141, 5, 'images/products/s23ultra_1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_specifications`
--

DROP TABLE IF EXISTS `product_specifications`;
CREATE TABLE IF NOT EXISTS `product_specifications` (
  `spec_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `spec_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `spec_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`spec_id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_specifications`
--

INSERT INTO `product_specifications` (`spec_id`, `product_id`, `spec_name`, `spec_value`) VALUES
(1, 1, 'Màn hình', '6.1 inch Super Retina XDR'),
(2, 1, 'Chip', 'Apple A15 Bionic'),
(3, 1, 'Camera', '12MP'),
(4, 1, 'Tính năng màn hình', 'Màn hình Luôn Bật, ProMotion 120Hz, HDR, True Tone, Dải màu rộng (P3), Haptic Touch, Tỷ lệ tương phản 2.000.000:1, Độ sáng 1000 nit (tiêu chuẩn), 1600 nit (HDR), 3000 nit (ngoài trời) / tối thiểu 1 nit, Lớp phủ kháng dầu, Chống phản chiếu, Hỗ trợ đa ngôn'),
(5, 1, 'Loại CPU', 'CPU 6 lõi với 2 lõi hiệu năng và 4 lõi tiết kiệm điện'),
(6, 1, 'Tương thích', 'Tương thích với thiết bị trợ thính'),
(7, 1, 'Độ phân giải màn hình', '2868 x 1320 pixels'),
(8, 1, 'Bộ nhớ trong', '	\r\n512 GB'),
(9, 5, 'Màn hình', '6.8 inch Dynamic AMOLED 2X'),
(10, 5, 'Chip', 'Snapdragon 8 Gen 2'),
(11, 5, 'Camera', '200MP'),
(12, 5, 'Độ phân giải màn hình', '3088 x 1440 pixels'),
(13, 6, 'Màn hình', '6.73 inch AMOLED'),
(14, 6, 'Chip', 'Snapdragon 8 Gen 2'),
(15, 6, 'Camera', '50MP'),
(16, 6, 'Độ phân giải màn hình', '3200 x 1440 pixels'),
(17, 7, 'Màn hình', '6.7 inch AMOLED'),
(18, 7, 'Chip', 'Snapdragon 8 Gen 1'),
(19, 7, 'Camera', '50MP'),
(20, 7, 'Độ phân giải màn hình', '3216 x 1440 pixels'),
(21, 8, 'Màn hình', '7.6 inch Dynamic AMOLED 2X'),
(22, 8, 'Chip', 'Snapdragon 8 Gen 1'),
(23, 8, 'Camera', '50MP'),
(24, 8, 'Độ phân giải màn hình', '2208 x 1768 pixels');

-- --------------------------------------------------------

--
-- Table structure for table `product_variants`
--

DROP TABLE IF EXISTS `product_variants`;
CREATE TABLE IF NOT EXISTS `product_variants` (
  `variant_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `ram` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `storage` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT '0',
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`variant_id`)
) ENGINE=MyISAM AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_variants`
--

INSERT INTO `product_variants` (`variant_id`, `product_id`, `ram`, `storage`, `color`, `price`, `stock`, `image_url`, `created_at`, `updated_at`) VALUES
(67, 9, '8GB', '128GB', 'Black', 899.99, 25, 'images/products/googlepixel7pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(68, 9, '8GB', '128GB', 'Black', 899.99, 25, 'images/products/googlepixel7pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(69, 9, '8GB', '128GB', 'Black', 899.99, 25, 'images/products/googlepixel7pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(70, 9, '8GB', '256GB', 'White', 999.99, 20, 'images/products/googlepixel7pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(71, 9, '8GB', '256GB', 'White', 999.99, 20, 'images/products/googlepixel7pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(58, 8, '12GB', '128GB', 'Black', 1799.99, 10, 'images/products/zfold4_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(59, 8, '12GB', '128GB', 'Black', 1799.99, 10, 'images/products/zfold4_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(60, 8, '12GB', '128GB', 'Black', 1799.99, 10, 'images/products/zfold4_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(61, 8, '12GB', '256GB', 'White', 1899.99, 8, 'images/products/zfold4_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(62, 8, '12GB', '256GB', 'White', 1899.99, 8, 'images/products/zfold4_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(63, 8, '12GB', '256GB', 'White', 1899.99, 8, 'images/products/zfold4_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(64, 8, '12GB', '512GB', 'Black', 1999.99, 6, 'images/products/zfold4_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(65, 8, '12GB', '512GB', 'Black', 1999.99, 6, 'images/products/zfold4_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(66, 8, '12GB', '512GB', 'Black', 1999.99, 6, 'images/products/zfold4_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(55, 7, '12GB', '512GB', 'Black', 1299.99, 8, 'images/products/oppofindx5pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(56, 7, '12GB', '512GB', 'Black', 1299.99, 8, 'images/products/oppofindx5pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(57, 7, '12GB', '512GB', 'Black', 1299.99, 8, 'images/products/oppofindx5pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(54, 7, '12GB', '256GB', 'White', 1199.99, 15, 'images/products/oppofindx5pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(49, 7, '12GB', '128GB', 'Black', 1099.99, 20, 'images/products/oppofindx5pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(50, 7, '12GB', '128GB', 'Black', 1099.99, 20, 'images/products/oppofindx5pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(51, 7, '12GB', '128GB', 'Black', 1099.99, 20, 'images/products/oppofindx5pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(52, 7, '12GB', '256GB', 'White', 1199.99, 15, 'images/products/oppofindx5pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(53, 7, '12GB', '256GB', 'White', 1199.99, 15, 'images/products/oppofindx5pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(48, 6, '12GB', '512GB', 'Black', 1199.99, 10, 'images/products/xiaomi13pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(47, 6, '12GB', '512GB', 'Black', 1199.99, 10, 'images/products/xiaomi13pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:55:59'),
(46, 6, '12GB', '512GB', 'Black', 1199.99, 10, 'images/products/xiaomi13pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:55:55'),
(45, 6, '12GB', '256GB', 'Blue', 1099.99, 15, 'images/products/xiaomi13pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(1, 1, '6GB', '128GB', 'Black', 999.99, 20, 'images/products/iphone14_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(2, 1, '6GB', '128GB', 'Black', 999.99, 20, 'images/products/iphone14_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(3, 1, '6GB', '128GB', 'Black', 999.99, 20, 'images/products/iphone14_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(4, 1, '6GB', '256GB', 'Blue', 1099.99, 15, 'images/products/iphone14_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(5, 1, '6GB', '256GB', 'Blue', 1099.99, 15, 'images/products/iphone14_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(6, 1, '6GB', '256GB', 'Blue', 1099.99, 15, 'images/products/iphone14_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(7, 1, '6GB', '512GB', 'Black', 1199.99, 10, 'images/products/iphone14_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(8, 1, '6GB', '512GB', 'Black', 1199.99, 10, 'images/products/iphone14_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(9, 1, '6GB', '512GB', 'Black', 1199.99, 10, 'images/products/iphone14_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(10, 2, '12GB', '128GB', 'Black', 1399.99, 10, 'images/products/s22_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:49:19'),
(11, 2, '12GB', '128GB', 'Black', 1399.99, 10, 'images/products/s22_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:49:26'),
(12, 2, '12GB', '128GB', 'Black', 1399.99, 10, 'images/products/s22_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:49:32'),
(13, 2, '12GB', '256GB', 'White', 1499.99, 12, 'images/products/s22_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:49:41'),
(14, 2, '12GB', '256GB', 'White', 1499.99, 12, 'images/products/s22_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:49:46'),
(15, 2, '12GB', '256GB', 'White', 1499.99, 12, 'images/products/s22_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:49:58'),
(16, 2, '12GB', '512GB', 'Black', 1599.99, 8, 'images/products/s22_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:50:07'),
(17, 2, '12GB', '512GB', 'Black', 1599.99, 8, 'images/products/s22_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:49:51'),
(18, 2, '12GB', '512GB', 'Black', 1599.99, 8, 'images/products/s22_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:50:02'),
(19, 3, '12GB', '128GB', 'Black', 999.99, 20, 'images/products/mi11_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:54:27'),
(20, 3, '12GB', '128GB', 'Black', 999.99, 20, 'images/products/mi11_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:54:34'),
(21, 3, '12GB', '128GB', 'Black', 999.99, 20, 'images/products/mi11_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:54:41'),
(22, 3, '12GB', '256GB', 'Blue', 1099.99, 15, 'images/products/mi11_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:54:46'),
(23, 3, '12GB', '256GB', 'Blue', 1099.99, 15, 'images/products/mi11_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:54:55'),
(24, 3, '12GB', '256GB', 'Blue', 1099.99, 15, 'images/products/mi11_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:56:29'),
(25, 3, '12GB', '512GB', 'Black', 1199.99, 10, 'images/products/mi11_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:54:50'),
(26, 3, '12GB', '512GB', 'Black', 1199.99, 10, 'images/products/mi11_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:56:41'),
(27, 3, '12GB', '512GB', 'Black', 1199.99, 10, 'images/products/mi11_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:56:53'),
(28, 4, '12GB', '128GB', 'Black', 1099.99, 20, 'images/products/oppofindx5pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(29, 4, '12GB', '128GB', 'Black', 1099.99, 20, 'images/products/oppofindx5pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(30, 4, '12GB', '128GB', 'Black', 1099.99, 20, 'images/products/oppofindx5pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(31, 4, '12GB', '256GB', 'White', 1199.99, 15, 'images/products/oppofindx5pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(32, 4, '12GB', '256GB', 'White', 1199.99, 15, 'images/products/oppofindx5pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(33, 4, '12GB', '256GB', 'White', 1199.99, 15, 'images/products/oppofindx5pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(34, 5, '12GB', '128GB', 'Black', 1799.99, 10, 'images/products/zfold4_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(35, 5, '12GB', '128GB', 'Black', 1799.99, 10, 'images/products/zfold4_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(36, 5, '12GB', '128GB', 'Black', 1799.99, 10, 'images/products/zfold4_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(37, 5, '12GB', '256GB', 'White', 1899.99, 8, 'images/products/zfold4_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(38, 5, '12GB', '256GB', 'White', 1899.99, 8, 'images/products/zfold4_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(39, 5, '12GB', '256GB', 'White', 1899.99, 8, 'images/products/zfold4_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(40, 6, '12GB', '128GB', 'Black', 999.99, 20, 'images/products/xiaomi13pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(41, 6, '12GB', '128GB', 'Black', 999.99, 20, 'images/products/xiaomi13pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(42, 6, '12GB', '128GB', 'Black', 999.99, 20, 'images/products/xiaomi13pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(43, 6, '12GB', '256GB', 'Blue', 1099.99, 15, 'images/products/xiaomi13pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(44, 6, '12GB', '256GB', 'Blue', 1099.99, 15, 'images/products/xiaomi13pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(72, 9, '8GB', '256GB', 'White', 999.99, 20, 'images/products/googlepixel7pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(73, 9, '8GB', '512GB', 'Black', 1099.99, 15, 'images/products/googlepixel7pro_1.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(74, 9, '8GB', '512GB', 'Black', 1099.99, 15, 'images/products/googlepixel7pro_2.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00'),
(75, 9, '8GB', '512GB', 'Black', 1099.99, 15, 'images/products/googlepixel7pro_3.jpg', '2026-04-13 20:47:00', '2026-04-13 20:47:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `role` enum('user','admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `phone_number`, `address`, `role`, `created_at`, `updated_at`) VALUES
(1, 'john_doe', '$2y$10$YTMfj0HHVExyUXaLShCDp.DGFxejgqak7zqbzYmt6DqOgWBN7q0fq', 'john@example.com', '0123456789', '123 Main St, City, Country', 'user', '2026-03-17 17:08:42', '2026-03-18 02:39:47'),
(2, 'admin', 'admin123', 'admin@example.com', '0987654321', '456 Admin St, City, Country', 'admin', '2026-03-17 17:08:42', '2026-03-17 17:08:42');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
