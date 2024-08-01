-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: login
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `inactive_intern_data`
--

DROP TABLE IF EXISTS `inactive_intern_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inactive_intern_data` (
  `id` int NOT NULL,
  `association` varchar(255) DEFAULT NULL,
  `coursename` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `gradyear` date DEFAULT NULL,
  `linkedlink` varchar(255) DEFAULT NULL,
  `mentor` varchar(255) DEFAULT NULL,
  `mentoremail` varchar(255) DEFAULT NULL,
  `projectname` varchar(255) DEFAULT NULL,
  `projectstatus` int NOT NULL,
  `quarter` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `uniname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inactive_intern_data`
--

LOCK TABLES `inactive_intern_data` WRITE;
/*!40000 ALTER TABLE `inactive_intern_data` DISABLE KEYS */;
INSERT INTO `inactive_intern_data` VALUES (303,'PetChem IT','Mtech','tangadisumeet@gmail.com','2023-11-25','vijay','2023-11-25','linkedin.com','pratham','tangadisumeet@gmail.com','elan',2,'Q1','pratham','python','managment','2023-11-22','vit'),(302,'Finance','Btech','tangadisumeet@gmail.com','2023-11-30','pranavct','2023-11-30','linkedin.com','pratham','tangadisumeet@gmail.com','elan',1,'Q2','parth','python','marketing','2023-11-21','mit'),(261,'PetChem IT','Mtech','vijay@gmail.com','2023-11-25','vijay','2023-11-15','linkedin.com','pratham','pratham@gmail.com','cms',4,'Q1','sumeet','Angular','ml','2023-11-03','vit'),(260,'PetChem IT','MBA','tangadisumeet@gmail.com','2023-11-28','pranav','2023-11-21','linkedin.com','pratham','tangadisumeet@gmail.com','bbsdfbsdb',1,'Q1','abhi','python','AI','2023-12-02','vit'),(259,'PetChem IT','MS','tangadisumeet@gmail.com','2023-11-18','pranavct','2023-11-24','linkedin.com','pratham','pratham@gmail.com','elan',3,'Q4','abhi','ML','ml','2023-11-09','vit'),(255,'PetChem IT','Mtech','tangadisumeet@gmail.com','2023-10-31','Sumeet Subhash Tangadi','2023-11-29','linkedin.com','Madhurika','tangadisumeet@gmail.com','petchem',3,'Q2','sumeet','java','core','2023-11-08','vit'),(257,'HR','MBA','pranav@gmail.com','2023-11-18','pranav','2023-11-25','linkedin.com','Madhurika','madhurika.tiwari@ril.com','petchem',2,'Q2','pratham','managment','managment','2023-11-02','vit'),(258,'PetChem IT','Btech','tangadisumeet@gmail.com','2023-11-17','pranav','2024-06-02','linkedin.com','pratham','tangadisumeet@gmail.com','petchem',2,'Q1','parth','python','AI','2023-11-02','vit'),(256,'Marketing','MBA','tangadisumeet@gmail.com','2023-11-10','vinay','2023-11-17','linkedin.com','pratham','parth@gmail.com','petchem',1,'Q2','abhi','marketing','marketing','2023-11-10','mit'),(304,'PetChem IT','MBA','tangadisumeet@gmail.com','2023-12-09','pranavct','2023-11-30','linkedin.com','Madhurika','tangadisumeet@gmail.com','petchem',2,'Q2','pratham','java','AI','2023-11-25','vit'),(305,'Finance','Btech','tangadisumeet@gmail.com','2023-11-26','Sumeet Subh','2023-11-22','linkedin.com','parth','tangadisumeet@gmail.com','elan',4,'Q3','pratham','java','marketing','2023-11-17','mit');
/*!40000 ALTER TABLE `inactive_intern_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-23 17:08:05
