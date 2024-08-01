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
-- Table structure for table `taskdata`
--

DROP TABLE IF EXISTS `taskdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taskdata` (
  `id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `end` date DEFAULT NULL,
  `start` date DEFAULT NULL,
  `task` varchar(255) DEFAULT NULL,
  `intern_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoh6dbkaqfbltqrirop18w7s68` (`intern_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taskdata`
--

LOCK TABLES `taskdata` WRITE;
/*!40000 ALTER TABLE `taskdata` DISABLE KEYS */;
INSERT INTO `taskdata` VALUES (754,'add list of interns on login page ','2023-11-30','2023-11-24','dashboard ',460),(755,'hide unnecessary page for intern ','2023-11-30','2023-11-21','hide and show',457),(756,'create an API to make the login page Dynamic','2023-11-30','2023-11-22','create Api',502),(757,'add logout button on dasboard','2023-11-22','2023-11-22','logut',460),(758,'create a property to make dynamic logout','2023-11-29','2023-11-23','logout',460),(760,'to get task on Id','2023-11-26','2023-11-24','Api ',502);
/*!40000 ALTER TABLE `taskdata` ENABLE KEYS */;
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
