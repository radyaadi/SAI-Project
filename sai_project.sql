-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2022 at 03:07 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sai_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `category`, `description`, `price`, `stock`, `image`, `imgUrl`, `createdAt`, `updatedAt`) VALUES
(11, 'Madu Manis', 'Madu', 'Madu Manis SAI murni hutan Sumatera Selatan mempunyai banyak manfaat untuk kesehatan antara lain menjaga imunitas tubuh, memperkuat kekebalan tubuh, menurunkan kadar kolesterol, meredakan batuk, meningkatkan stamina, memperbaiki fungsi pencernaan, menghilangkan jerawat, meredakan demam, meningkatkan daya ingat anak,dan sumber vitamin.', 80000, 10, 'b19e7a04295bc3faa4d22bf1bf3cec43.png', 'http://localhost:5000/images/b19e7a04295bc3faa4d22bf1bf3cec43.png', '2022-12-09 11:29:36', '2022-12-09 11:29:36'),
(12, 'Madu Hitam', 'Madu', 'Madu Hitam Pahit SAI murni hutan Sumatera Selatan mempunyai banyak manfaat untuk kesehatan antara lain untuk menjaga imunitas tubuh, memperkuat nafsu makan, bisa dikonsumsi penderita diabetes, mengobati maag, mengatasi nyeri sendi (asam urat), mengatasi peradangan, memaksimalkan fungsi pankreas, melancarkan sirkulasi darah, menjaga kekebalan tubuh, mengobati pengapuran, dan mengobati migrain.', 80000, 13, '53724a10b40c8a66a74f38e6c682e22f.png', 'http://localhost:5000/images/53724a10b40c8a66a74f38e6c682e22f.png', '2022-12-09 11:30:28', '2022-12-09 11:30:28'),
(13, 'Beras Putih', 'Beras', 'Beras Putih SAI merupakan beras kesehatan jenis mentik susu wangi yang bebas dari residu kimia, beras ini dibudidayakan tanpa pupuk kimia dan obat hama kimia dan di produksi oleh petani lokal. beras yang bertekstur pulen ini tahan basi dan baik untuk kesehatan.', 50000, 9, 'ff2b196a6f14c8003d3a7bff57aaecdc.png', 'http://localhost:5000/images/ff2b196a6f14c8003d3a7bff57aaecdc.png', '2022-12-09 11:30:58', '2022-12-09 11:30:58'),
(14, 'Beras Merah', 'Beras', 'Beras Merah SAI merupakan beras kesehatan yang bebas dari residu kimia, beras ini dibudidayakan tanpa pupuk kimia dan obat hama kimia dan di produksi oleh petani lokal. beras yang bertekstur pulen ini tahan basi dan baik untuk kesehatan.', 50000, 14, 'bc47f116617ce6f48f8212c1b6d35db0.png', 'http://localhost:5000/images/bc47f116617ce6f48f8212c1b6d35db0.png', '2022-12-09 11:31:19', '2022-12-09 11:31:19'),
(15, 'Minyak Goreng Kelapa', 'Minyak Goreng', 'Minyak Goreng Kelapa SAI adalah minyak goreng kelapa yang di proses dengan alami dan layak di gunakan 5-6x penggorengan, minyak goreng ini juga mempunyai daya goreng lebih banyak dan relatif lebih sehat. Minyak ini asli dibuat dari daging buah kelapa maka terlihat dari kejernihan minyaknya. Makanan menjadi lebih garing dan tidak terlalu menyerap minyak, mencegah sakit jantung, memperkecil radikal bebas yang di dalam sel, dan dapat menurunkan timbunan lemak dalam tubuh.', 38000, 27, '81e1d361fa62e7b214f930abf2ed683e.png', 'http://localhost:5000/images/81e1d361fa62e7b214f930abf2ed683e.png', '2022-12-09 11:32:22', '2022-12-09 11:32:22'),
(16, 'Pupuk Organik', 'Pupuk', 'Pupuk Organik SAI merupakan pupuk organik/kompos alami yang dapat memperkaya unsur hara dalam tanah baik makro maupun mikro sehingga menjadikan tanaman anda tumbuh menjadi lebih subur dan produktif. pupuk ini juga dapat memperbaiki struktur tanah dan meningkatkan daya pengikat air agar tanah menjadi lebih gembur. Terbuat dari bahan-bahan organik, melalui proses fermentasi maka menjadikan pupuk organik sai menjadi pupuk yang ramah lingkungan (tanpa merusak lingkungan dan struktur tanah).', 32000, 8, '0394f12963cf910f645f5ffc97df4f3d.png', 'http://localhost:5000/images/0394f12963cf910f645f5ffc97df4f3d.png', '2022-12-09 11:33:51', '2022-12-09 11:33:51'),
(17, 'Bawang Putih', 'Bawang', 'Bawang Putih SAI merupakan bawang putih kating berkualitas yang digunakan untuk memasak sehari-hari.', 25000, 46, 'e3972c99af2e8acfe73a505f130888ad.png', 'http://localhost:5000/images/e3972c99af2e8acfe73a505f130888ad.png', '2022-12-09 11:34:38', '2022-12-09 11:34:38'),
(18, 'Sandal SAI', 'Sandal', 'Sandal SAI adalah sandal yang bisa di custom dan digunakan sehari-hari. INS juga menerima orderan dari hotel, rumah sakit, dan lainnya yang ingin membeli sandal dengan volume yang banyak untuk perusahaan masingmasing.', 10000, 11, 'dff1fb08d8297e39edf6d5a3020e6c9b.png', 'http://localhost:5000/images/dff1fb08d8297e39edf6d5a3020e6c9b.png', '2022-12-09 11:35:05', '2022-12-09 11:35:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
