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
-- Table structure for table `relnterndata`
--

DROP TABLE IF EXISTS `relnterndata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relnterndata` (
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
  `description` varchar(255) DEFAULT NULL,
  `end` date DEFAULT NULL,
  `start` date DEFAULT NULL,
  `task` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relnterndata`
--

LOCK TABLES `relnterndata` WRITE;
/*!40000 ALTER TABLE `relnterndata` DISABLE KEYS */;
INSERT INTO `relnterndata` VALUES (502,'Finance','MBA','tangadisumeet@gmail.com','2023-11-24','vijay','2023-11-23','linkedin.com','pratham','tangadisumeet@gmail.com','petchem',2,'Q2','sumeet','software','AI','2023-11-22','vit',NULL,NULL,NULL,NULL),(457,'PetChem IT','Btech','tangadisumeet@gmail.com','2023-11-24','Sumeet Subhash Tangadi','2024-06-02','linkedin.com','pratham','pratham@gmail.com','elan',3,'Q3','parth','python','ml','2023-11-16','vit',NULL,NULL,NULL,NULL),(460,'PetChem IT','Mtech','tangadisumeet@gmail.com','2023-11-24','pranav','2024-07-20','linkedin.com','pratham','tangadisumeet@gmail.com','petchem',4,'Q4','parth','ML','managment','2023-11-10','vit',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `relnterndata` ENABLE KEYS */;
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
