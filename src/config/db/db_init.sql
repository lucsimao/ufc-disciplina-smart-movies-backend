CREATE DATABASE  IF NOT EXISTS `desweb-moviedatabase` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `desweb-moviedatabase`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: desweb-moviedatabase
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `movie_id` int NOT NULL,
  `original_title` varchar(45) NOT NULL,
  `genre_ids` varchar(100) NOT NULL,
  `overview` text NOT NULL,
  `poster_path` text,
  `release_date` text,
  `backdrop_path` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Jogos Vorazes',70160,'The Hunger Games','[878,12,14]','Num futuro distante, boa parte da população é controlada por um regime totalitário, que relembra esse domínio realizando um evento anual - e mortal - entre os 12 distritos sob sua tutela. Para salvar sua irmã caçula, a jovem Katniss Everdeen (Jennifer Lawrence) se oferece como voluntária para representar seu distrito na competição e acaba contando com a companhia de Peeta Melark (Josh Hutcherson), desafiando não só o sistema dominante, mas também a força dos outros oponentes.','/xAmbI0D90t74Xeq6K9nGeTXkd1U.jpg','2012-03-12','/yVBQ65YBYZ9UhzJ4NGdRgeXtyTL.jpg'),(2,'Jogos Vorazes: A Esperança - Parte 1',131631,'The Hunger Games: Mockingjay - Part 1','[878,12,53]','Após sobreviver à temível arena dos Jogos Vorazes, Katniss Everdeen está desanimada e destruída. Depois que a Capital reduziu o Distrito 12 a destroços, ela se refugiou no Distrito 13. Peeta Mellark foi submetido a uma lavagem cerebral, e agora está sob o domínio de Snow. Então, a presidência quer que Katniss lidere uma \"resistência\" e mobilize a população em uma empreitada que irá colocá-la no centro da trama para desmascarar Snow.','/hekpVNWOROZm57RS4OLW0ySkxx9.jpg','2014-11-19','/rYsdoUqkltpKZQWwCWXf55csXvL.jpg'),(3,'Jogos Vorazes: A Esperança - O Final',131634,'The Hunger Games: Mockingjay - Part 2','[878,12,28]','Katniss e seus amigos Peeta, Gale e Finnick embarcam em sua última missão: organizar uma resistência contra o presidente e libertar o povo de Panem. A coragem de Katniss faz renascer a esperança em um país disposto a se livrar da opressão.','/5KSQkozSelQj6bq8NCKtINvsSSj.jpg','2015-11-18','/2l5qmfxDN98JFKpUy1n4vcLUPmv.jpg'),(4,'Jogos Vorazes: Em Chamas',101299,'The Hunger Games: Catching Fire','[878,12,28]','Após saírem vencedores da última edição dos Jogos Vorazes, as atitudes desafiadoras de Katniss e Peeta acabam inspirando uma rebelião contra a opressiva Capital. No entanto, os dois são obrigados a participarem de uma edição especial do torneio, o Massacre Quaternário, que acontece apenas a cada 25 anos, e reúne vencedores das edições anteriores.','/m1lky5ftnhLRpkoYWKssH8qvlRU.jpg','2013-11-15','/omoWcwdARBsGHdMdHUk0AQhS2Lp.jpg');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (1,'Sala 1'),(2,'Sala 2'),(3,'Sala 3'),(4,'Sala 4');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int NOT NULL,
  `room_id` int NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_session_movie_idx` (`movie_id`),
  KEY `fk_session_room1_idx` (`room_id`),
  CONSTRAINT `fk_session_movie` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_session_room` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES (1,1,1,'2020-12-12 10:00:00','2020-12-12 12:00:00'),(2,1,1,'2020-12-12 13:00:00','2020-12-12 15:00:00'),(3,2,1,'2020-12-12 18:00:00','2020-12-12 20:00:00'),(4,3,1,'2020-12-12 21:00:00','2020-12-12 23:00:00'),(5,2,2,'2020-12-12 11:00:00','2020-12-12 13:00:00'),(6,2,2,'2020-12-12 14:00:00','2020-12-12 16:00:00'),(7,3,2,'2020-12-12 17:00:00','2020-12-12 19:00:00'),(8,4,2,'2020-12-12 20:00:00','2020-12-12 22:00:00'),(9,4,3,'2020-12-12 10:30:00','2020-12-12 12:30:00'),(10,1,3,'2020-12-12 13:30:00','2020-12-12 15:30:00'),(11,2,3,'2020-12-12 18:30:00','2020-12-12 20:30:00'),(12,1,1,'2020-12-12 10:00:00','2020-12-12 12:00:00');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `sessions_BEFORE_INSERT` BEFORE INSERT ON `sessions` FOR EACH ROW BEGIN

SET @room_id = NEW.room_id;
SET @movie_id = NEW.movie_id;
SET @start_time = NEW.start_time;
SET @end_time = NEW.end_time;

SELECT
	count(*)
INTO @number_of_conflicts
FROM
	rooms r
		inner join sessions s on r.id = s.room_id
where 1=1
	AND r.id = NEW.room_id
	AND (
		s.start_time BETWEEN @start_time AND @end_time
		OR 
		s.end_time BETWEEN @start_time AND @end_time
	);

IF (@number_of_conflicts > 1) THEN
	SET @error_message = 'TimeError: You\'re trying to insert a session on an already taken date_time';
	SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = @error_message;	
END IF;

IF (@start_time >= @end_time) THEN
	SET @error_message = 'TimeError: You\'re trying to insert a end_time greater than start_time';
	SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = @error_message;	
END IF;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-21 20:17:39
