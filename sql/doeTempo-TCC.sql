CREATE DATABASE  IF NOT EXISTS `db_doe_tempo_tcc` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_doe_tempo_tcc`;
-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: tcc-doe-tempo.mysql.database.azure.com    Database: db_doe_tempo_tcc
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('1983a9c0-f353-4e6c-83f0-87d5bc1807da','b8ae0c9ddce90df48a50d0e8e8a482bc34d7d453c6e5898a9343dd37127cd447','2023-04-04 13:39:01.070','20230403131944_unique_constraint_for_id_user_and_id_campaign',NULL,NULL,'2023-04-04 13:39:00.654',1),('31dbfb5e-d828-4de9-acc3-dfa562fa3a82','383f411831e7aaf977b2a1e665fc74fc53c6dd260625241c6cc45954134823e2','2023-04-04 13:38:48.543','20230303135043_add_unique_field_in_ngo_table',NULL,NULL,'2023-04-04 13:38:48.065',1),('339e9665-dc1f-46cf-ab3e-6ae8b4a30bc5','08cac0f2433a8c26abd0bbc6698637b5f7be02ca3a8c3be20c30d29a791bc629','2023-04-04 13:38:49.634','20230304210440_new_unique_keys',NULL,NULL,'2023-04-04 13:38:48.672',1),('34e97340-5ec0-471a-9d4a-e32cebcb2c08','698f779c661d25ab2514ac1576bfa76a0f4e84195d43526d3d7e37f65dc8c475','2023-04-04 13:38:47.933','20230303132335_add_password_on_ngo_table',NULL,NULL,'2023-04-04 13:38:47.060',1),('38c563e0-906f-441f-94ec-ef1ae4239f0f','a0d3ccdf75c3b90ae51ad218e449f8c415ec4926255ca0f53ea8b144cce288a2','2023-04-04 13:38:52.343','20230313114628_change_type_for_date_in_campaigns_and_add_2_columns',NULL,NULL,'2023-04-04 13:38:51.774',1),('3e5dafef-ca55-46bc-956a-ecd5750fda68','4117c9aa5ec6a050d1b1f9b7cae6254b88f54dba62d3e9a89ffd3219f4d0b5b9','2023-04-04 13:39:01.588','20230403141308_change_name_for_table_post',NULL,NULL,'2023-04-04 13:39:01.199',1),('54f7e1ed-b086-458d-bd1f-66cc89e4f175','53a65a44687adfb8abb5ea3d8ce1a71ffaaa35501f6a6c7a93f588fd3677b216','2023-04-04 13:38:51.646','20230310123127_add_unique_index_for_address_relations_tables',NULL,NULL,'2023-04-04 13:38:51.182',1),('685840ef-cc93-4dbd-b577-de814f80f6a2','856bf4b2b60dc2317fbc5fb1a267a386711b66e0f3a7227b85f9da899a681372','2023-04-04 13:38:46.812','20230223181730_',NULL,NULL,'2023-04-04 13:38:40.454',1),('69102b98-be2b-4ca2-95cb-1c565a5eb3f9','59e3b2907e7cb0b63d85ccc7a8fd30cfcc57c4e70341f353526be12f99877f09','2023-04-04 13:38:55.477','20230322141100_add_unique_email_on_ngo',NULL,NULL,'2023-04-04 13:38:54.535',1),('76402361-c663-49f8-a244-95412c75800d','3e380634216da58b31557552c0473a69720ab5e164ebfddd797b155df1547226','2023-04-04 13:38:54.406','20230317141803_change_length_for_id_type',NULL,NULL,'2023-04-04 13:38:53.557',1),('82fb8ba5-c3bc-4da5-8e84-bafa93f4e826','04241e07742e1fe43b170db30f3ff9e285354c45c8034444ee9e3bfa25c0d00a','2023-04-04 13:38:51.053','20230310104037_change_unique_index',NULL,NULL,'2023-04-04 13:38:50.401',1),('8f4c0c2e-f3f2-483f-b6d0-23b5de9be055','3f86db7dc1af5612bc33f8c4e1646925a4dacbb1d065a29490c1cd4cc9257290','2023-04-04 13:39:00.527','20230403113319_creating_post_tables_for_users_and_ngos',NULL,NULL,'2023-04-04 13:38:56.153',1),('bf9dea7f-0ef5-4802-a416-8226f9a9378e','3b0119e7212d92a739257e03e863f9af38d3c2edca375e3b799ec5ae91f49667','2023-04-06 04:03:23.684','20230406040322_add_cascade_on_photo',NULL,NULL,'2023-04-06 04:03:22.852',1),('ca6eb646-0609-40d8-afbf-eb31eaa307a1','d9981bea86a3e2fa840bcb83adb538aba1adbd33ce9655c165a343ff6c88f2b9','2023-04-10 13:11:25.555','20230410131124_',NULL,NULL,'2023-04-10 13:11:24.370',1),('d5f54996-e9bf-405d-a520-8e6270a0a36f','0e687cf58cad6a18d4f79434ebad8dc057962fb302af53c3540b0dc91fdd4d7a','2023-04-06 03:52:31.001','20230406035228_add_on_cascade_to_post_tbls',NULL,NULL,'2023-04-06 03:52:29.437',1),('ea08251a-3423-4eeb-89e7-091b55d14fc6','455e10f6dec4617cfaa3711d37d10a6e6330e23a612df779b8599d2f18182393','2023-04-04 13:38:56.023','20230323132640_unique_constraint_in_columns_id_cause_and_id_campaign',NULL,NULL,'2023-04-04 13:38:55.606',1),('f05e04d6-a68f-4ab6-8ca1-445acfe0ff48','759fc6cae1bfc65d187b891eebb1fe06b9f716d7f80c13bb1077bf61f93e39c2','2023-04-04 13:38:53.428','20230317135629_add_types_in_user_and_ngo',NULL,NULL,'2023-04-04 13:38:52.471',1),('f836fc8b-df6d-4f28-96a4-83abfffb3580','7355ffe0c50073bda1e28435420cc77c9d11c5ed89a8cd0ca1e6c39be6779cf1','2023-04-04 13:38:50.273','20230308133315_add_unique_email_on_ngo_table',NULL,NULL,'2023-04-04 13:38:49.760',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_address`
--

DROP TABLE IF EXISTS `tbl_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_address` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `complement` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_address`
--

LOCK TABLES `tbl_address` WRITE;
/*!40000 ALTER TABLE `tbl_address` DISABLE KEYS */;
INSERT INTO `tbl_address` VALUES ('0c8c61bd-33b8-4b8e-a114-d5329abfc7ce','06330000','146',NULL),('1a73cc39-6287-493c-b470-1d96c289f640','06626420','99',NULL),('240254d7-ccb3-4b48-a3bf-0f26025b3e73','06150130','146',NULL),('2e376345-6741-4e6d-9223-1f4854ee84fc','06626420','99',NULL),('36920f11-378b-4fb5-8f45-d62f2fc0dc69','06150-130','11','casawe'),('3d46cbdc-fa90-4977-922e-fe0d6ca53a44','06626420','99',NULL),('45026625-941b-470c-b441-4e5dfe4d351b','06150130','146',NULL),('58a3fe0e-2205-48e6-9123-6f8cfe25cd68','06626420','99',NULL),('8cef051b-c0be-4f8f-81ea-ede3cdcf3143','06150130','146',NULL),('91aaaa60-140b-4e18-a1d0-e3be42532c79','06330000','146',NULL),('9a099134-9593-4c95-849b-16183ba48ad2','06150130','146',NULL),('9cd89887-cccd-4675-9f74-da3a493f6540','06330000','1220',NULL),('a8c2e690-34a3-4ae5-a45d-2c79154094de','06150130','146',NULL),('b01e2f67-3f75-46f0-98a6-1c4604901d71','06626420','99',NULL),('b2a8a150-689f-4051-8150-de7966ceb69b','06150130','146',NULL),('bb0b0b3a-141f-4c44-afb4-1eda8e5a8b48','06330000','146',NULL),('bf53064e-f7f8-47d3-aea8-ef776d642c14','06626-420','33','casa'),('c586aaab-d91e-4a85-8573-f666e2be0531','06150130','146',NULL),('e2962fa1-1371-47e7-aeb0-76ae7802637c','06626420','99',NULL),('f0f5b717-011f-47ca-b53d-c7bb6755698e','06150130','146',NULL),('fe1adf3f-9519-472a-b2ab-2931189a1acf','06330000','146',NULL);
/*!40000 ALTER TABLE `tbl_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_campaign`
--

DROP TABLE IF EXISTS `tbl_campaign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_campaign` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `begin_date` date NOT NULL,
  `end_date` date NOT NULL,
  `home_office` tinyint(1) NOT NULL DEFAULT '0',
  `id_ngo` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `how_to_contribute` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `prerequisites` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`),
  KEY `fk_tbl_campaign_tbl_ngo1_idx` (`id_ngo`),
  CONSTRAINT `fk_tbl_campaign_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_campaign`
--

LOCK TABLES `tbl_campaign` WRITE;
/*!40000 ALTER TABLE `tbl_campaign` DISABLE KEYS */;
INSERT INTO `tbl_campaign` VALUES ('0c620218-95a3-4e18-a0fb-bf6a8a01d8b1','gfdgdf h thhf','ghhf hfg jjfghgghfh','2023-04-10','2023-04-30',1,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','ghfhfh ghghfghfhgfhg','ghgf gfghfhfh'),('194a3fd8-8635-4d71-a4f4-d1b902ec2cd8','Teste Campanha com causas ( Update )','teste de registro','2023-01-10','2023-03-10',1,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','ajuda no teste ai.','vontade'),('2159259a-a58d-484b-94dd-6d29a381d62f','Update','teste de registro do update','2023-01-08','2023-03-08',0,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','ajuda no teste ai.','vontade'),('26d39203-356a-460e-8424-37ae6d489d62','teste local','testeeeeee','2023-04-03','2023-04-22',1,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','testeeeeee','aaaaaaaaa'),('32505ced-bfdc-490f-889c-e931732f549f','ewfeefw','efewfewefw','2023-04-03','2023-04-30',0,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','wefewfwfeew','wefwefw'),('555d02a1-3972-4d88-9429-8f352ad25913','teste ong','testeee','2023-04-03','2023-04-29',0,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','testeee','efsfse'),('5c537701-0617-4f07-952c-b9a79d6abc74','Teste campanha 15','teste de registro com imagem','2023-01-10','2023-03-10',0,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','ajuda no teste ai.','vontade'),('5e76300c-5bb0-4504-be11-94e7cf955a62','testewewew','eewrewrwr','2023-04-03','2023-04-29',0,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','wdqdqwdqwd','wqdwqdqw'),('630e0e46-6364-4fb4-9871-170d735c61ca','Teste campanha com uma imagem em array','teste de registro com imagem','2023-01-10','2023-03-10',0,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','ajuda no teste ai.','vontade'),('687b766a-5dcd-49d5-8a7e-79673af2166f','marselhinho dp front','sla oq marselo','2023-04-04','2023-04-30',1,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','marselinho ','marselo'),('7146d340-0f7b-4773-855a-c2f4636d7345','ewfew','cdcdcw','2023-04-03','2023-04-30',0,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','efwfweefw','ewfewfw'),('77cf92fa-0fa6-471f-9283-90f775ecb3bb','teste campanha123','campanha sobre testesfewfwf','2023-04-04','2023-04-29',1,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','efwfwefwfwefwf','wefefwefw'),('9a666701-8194-4a7b-a45e-0b349f6d5e3c','Teste integraçao com mais  de uma imagem navegaçao','teste 2 imagens','2023-01-05','2023-09-16',1,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','duas imagens para teste','apenas querer!'),('a1d08d96-039c-4132-be74-2a79a3d4180c','Teste integraçao com mais de uma imagem','teste imagens','2023-01-05','2023-09-16',1,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','duas imagens para teste','apenas querer!'),('c83083aa-19e4-42d6-8b92-01066aa145e2','testeeee','asdadada','2023-04-03','2023-04-29',1,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','fewfwefwfew','efwfwefewfw'),('e8474669-90d8-40d2-afaa-6ed4f0a3201b','teste de campanha cris','teste ','2023-02-10','2023-06-10',1,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','teste de campanha cris','teste de campanha cris'),('e867da17-c90c-4109-8037-6e14f3799206','Teste campanha','teste de registro com imagem','2023-01-10','2023-03-10',0,'0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','ajuda no teste ai.','vontade');
/*!40000 ALTER TABLE `tbl_campaign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_campaign_address`
--

DROP TABLE IF EXISTS `tbl_campaign_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_campaign_address` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_campaign` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_address` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `tbl_campaign_address_id_campaign_key` (`id_campaign`),
  KEY `fk_tbl_campaign_address_tbl_address1_idx` (`id_address`),
  KEY `fk_tbl_campaign_address_tbl_campaign1_idx` (`id_campaign`),
  CONSTRAINT `fk_Campaign_address_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_campaign_address_tbl_address1` FOREIGN KEY (`id_address`) REFERENCES `tbl_address` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_campaign_address`
--

LOCK TABLES `tbl_campaign_address` WRITE;
/*!40000 ALTER TABLE `tbl_campaign_address` DISABLE KEYS */;
INSERT INTO `tbl_campaign_address` VALUES ('100d66dd-726e-4f92-8c5c-a4c0f977a684','555d02a1-3972-4d88-9429-8f352ad25913','bf53064e-f7f8-47d3-aea8-ef776d642c14'),('146dfe12-7f9d-4f39-9e1c-904f2bc8e29c','9a666701-8194-4a7b-a45e-0b349f6d5e3c','8cef051b-c0be-4f8f-81ea-ede3cdcf3143'),('2e01e403-3948-4d99-883b-8589ed97b37f','32505ced-bfdc-490f-889c-e931732f549f','58a3fe0e-2205-48e6-9123-6f8cfe25cd68'),('514d2239-cf59-4448-bbc5-0655cb094dad','26d39203-356a-460e-8424-37ae6d489d62','36920f11-378b-4fb5-8f45-d62f2fc0dc69'),('5d6c9b53-d8b5-4667-8d0a-097a3d727eaa','2159259a-a58d-484b-94dd-6d29a381d62f','c586aaab-d91e-4a85-8573-f666e2be0531'),('65df700e-0b58-40ef-a5a4-272615f8eef8','630e0e46-6364-4fb4-9871-170d735c61ca','0c8c61bd-33b8-4b8e-a114-d5329abfc7ce'),('7ae6c9c1-57e0-4e55-9278-83c7a031806e','687b766a-5dcd-49d5-8a7e-79673af2166f','9a099134-9593-4c95-849b-16183ba48ad2'),('7c82edde-b444-43f8-98d4-6430e39972a2','c83083aa-19e4-42d6-8b92-01066aa145e2','1a73cc39-6287-493c-b470-1d96c289f640'),('84ccadb3-cfdc-47de-99b7-1f4452b7eacc','e8474669-90d8-40d2-afaa-6ed4f0a3201b','a8c2e690-34a3-4ae5-a45d-2c79154094de'),('97017a12-b677-43cf-8b84-5099ef5ed2a1','5e76300c-5bb0-4504-be11-94e7cf955a62','2e376345-6741-4e6d-9223-1f4854ee84fc'),('aa01ac35-a60b-4469-9192-e9c51d9e81e9','7146d340-0f7b-4773-855a-c2f4636d7345','3d46cbdc-fa90-4977-922e-fe0d6ca53a44'),('d5d7c959-65f8-4972-8937-fa05afafd72e','194a3fd8-8635-4d71-a4f4-d1b902ec2cd8','45026625-941b-470c-b441-4e5dfe4d351b'),('d697e899-1914-4d85-8fe2-04085a2643ac','77cf92fa-0fa6-471f-9283-90f775ecb3bb','b01e2f67-3f75-46f0-98a6-1c4604901d71'),('d7ef03e6-b933-4385-8718-909f4b4ddbe5','0c620218-95a3-4e18-a0fb-bf6a8a01d8b1','e2962fa1-1371-47e7-aeb0-76ae7802637c'),('d894bf6b-9111-4f4c-bf72-3d1fdf24f0f7','5c537701-0617-4f07-952c-b9a79d6abc74','bb0b0b3a-141f-4c44-afb4-1eda8e5a8b48'),('dc6eb8dc-b342-40e5-8045-e814617ce9cf','a1d08d96-039c-4132-be74-2a79a3d4180c','b2a8a150-689f-4051-8150-de7966ceb69b'),('e133215c-be81-4c3e-829c-fc5039c81a31','e867da17-c90c-4109-8037-6e14f3799206','91aaaa60-140b-4e18-a1d0-e3be42532c79');
/*!40000 ALTER TABLE `tbl_campaign_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_campaign_causes`
--

DROP TABLE IF EXISTS `tbl_campaign_causes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_campaign_causes` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_cause` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_campaign` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `tbl_campaign_causes_id_cause_id_campaign_key` (`id_cause`,`id_campaign`),
  KEY `fk_tbl_campaign_causes_tbl_campaign1_idx` (`id_campaign`),
  KEY `fk_tbl_campaign_causes_tbl_causes1_idx` (`id_cause`),
  CONSTRAINT `fk_tbl_campaign_causes_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tbl_campaign_causes_tbl_causes1` FOREIGN KEY (`id_cause`) REFERENCES `tbl_causes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_campaign_causes`
--

LOCK TABLES `tbl_campaign_causes` WRITE;
/*!40000 ALTER TABLE `tbl_campaign_causes` DISABLE KEYS */;
INSERT INTO `tbl_campaign_causes` VALUES ('27642177-15bc-49f7-9989-14aba27fa8bd','07c4c9d2-e633-48ca-848b-0f3a0b74d405','0c620218-95a3-4e18-a0fb-bf6a8a01d8b1'),('311d2fea-f998-47d6-bc6a-16f74f5b4d49','07c4c9d2-e633-48ca-848b-0f3a0b74d405','2159259a-a58d-484b-94dd-6d29a381d62f'),('e23c59e3-9a2b-4f2b-99b4-b165b467fd62','07c4c9d2-e633-48ca-848b-0f3a0b74d405','26d39203-356a-460e-8424-37ae6d489d62'),('eaeff0a7-e67f-4575-898f-6a03694f150b','07c4c9d2-e633-48ca-848b-0f3a0b74d405','32505ced-bfdc-490f-889c-e931732f549f'),('3e8cf510-5366-498a-88a0-d27a070f557b','07c4c9d2-e633-48ca-848b-0f3a0b74d405','555d02a1-3972-4d88-9429-8f352ad25913'),('472716db-e5ee-49c9-83ed-0998177ac061','07c4c9d2-e633-48ca-848b-0f3a0b74d405','5c537701-0617-4f07-952c-b9a79d6abc74'),('62099c66-6ab5-421a-aad2-3a5cd8bfcc12','07c4c9d2-e633-48ca-848b-0f3a0b74d405','5e76300c-5bb0-4504-be11-94e7cf955a62'),('c49ecc36-c3f1-482f-b6f8-4c27c9af4567','07c4c9d2-e633-48ca-848b-0f3a0b74d405','630e0e46-6364-4fb4-9871-170d735c61ca'),('6fe5d72e-00d4-4d76-bff9-bd03b83f99d6','07c4c9d2-e633-48ca-848b-0f3a0b74d405','687b766a-5dcd-49d5-8a7e-79673af2166f'),('12e30b37-4c13-4db0-bfc4-f7058a33fc0f','07c4c9d2-e633-48ca-848b-0f3a0b74d405','7146d340-0f7b-4773-855a-c2f4636d7345'),('219ca555-2df2-4ec5-8dac-6fcabc5006a4','07c4c9d2-e633-48ca-848b-0f3a0b74d405','77cf92fa-0fa6-471f-9283-90f775ecb3bb'),('7ed88cd3-93cb-4b1a-b3ae-e75b3eeb4d4a','07c4c9d2-e633-48ca-848b-0f3a0b74d405','c83083aa-19e4-42d6-8b92-01066aa145e2'),('cad36406-0699-4b1a-b0fe-ca3a6e52337f','07c4c9d2-e633-48ca-848b-0f3a0b74d405','e8474669-90d8-40d2-afaa-6ed4f0a3201b'),('2ee8a7e2-945b-4408-95a0-1e73b66ccd42','07c4c9d2-e633-48ca-848b-0f3a0b74d405','e867da17-c90c-4109-8037-6e14f3799206'),('0379aac2-1fee-4a16-bf26-ac26216eecf9','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','0c620218-95a3-4e18-a0fb-bf6a8a01d8b1'),('c6b03014-48f4-41d7-9a32-9f12ccab4870','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','194a3fd8-8635-4d71-a4f4-d1b902ec2cd8'),('61f78db8-54be-4956-be44-bd2f4795d5d8','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','2159259a-a58d-484b-94dd-6d29a381d62f'),('852b13f1-4cb6-43ac-8fa6-e28c85d909b3','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','26d39203-356a-460e-8424-37ae6d489d62'),('cf077204-08da-4b42-a318-4e80cb08e62e','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','32505ced-bfdc-490f-889c-e931732f549f'),('35c89e55-75f6-4a59-add7-4811fb45ee93','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','555d02a1-3972-4d88-9429-8f352ad25913'),('33c97746-1c41-4ac4-ab6d-644c224ee1e2','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','5c537701-0617-4f07-952c-b9a79d6abc74'),('414ff00c-4710-4078-ae44-a0473b186d67','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','5e76300c-5bb0-4504-be11-94e7cf955a62'),('37d70376-a7f6-4dec-8afd-ca7d75b5b73d','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','630e0e46-6364-4fb4-9871-170d735c61ca'),('db2ae949-fe4c-41e3-91a4-0cc6f1748acd','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','687b766a-5dcd-49d5-8a7e-79673af2166f'),('2640f570-90e9-4055-a707-786ca3ab6a67','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','7146d340-0f7b-4773-855a-c2f4636d7345'),('6242ada2-8a1a-4c15-91c9-dd2d923c7c40','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','77cf92fa-0fa6-471f-9283-90f775ecb3bb'),('63ffadcf-6475-421f-87b5-ee02019feeba','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','c83083aa-19e4-42d6-8b92-01066aa145e2'),('53c0a8a2-d546-4453-a889-b7eec6e1014a','70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','e8474669-90d8-40d2-afaa-6ed4f0a3201b'),('d79db90b-f0c8-4ac1-a137-0e03f0905822','b18da906-9fa8-4bce-a5f9-2b66ab169eb0','194a3fd8-8635-4d71-a4f4-d1b902ec2cd8'),('ae5fce4f-ebcc-4a89-8897-1cea12e002ae','b18da906-9fa8-4bce-a5f9-2b66ab169eb0','9a666701-8194-4a7b-a45e-0b349f6d5e3c'),('811ca711-8ad5-402c-83eb-324ecd98b543','b18da906-9fa8-4bce-a5f9-2b66ab169eb0','a1d08d96-039c-4132-be74-2a79a3d4180c');
/*!40000 ALTER TABLE `tbl_campaign_causes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_campaign_participants`
--

DROP TABLE IF EXISTS `tbl_campaign_participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_campaign_participants` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_campaign` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `tbl_campaign_participants_id_campaign_id_user_key` (`id_campaign`,`id_user`),
  KEY `fk_tbl_campaign_participants_tbl_campaign1_idx` (`id_campaign`),
  KEY `fk_tbl_campaign_participants_tbl_user1_idx` (`id_user`),
  CONSTRAINT `fk_tbl_campaign_participants_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_campaign_participants_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_campaign_participants`
--

LOCK TABLES `tbl_campaign_participants` WRITE;
/*!40000 ALTER TABLE `tbl_campaign_participants` DISABLE KEYS */;
INSERT INTO `tbl_campaign_participants` VALUES ('7e3a92b3-f09f-4d03-872a-09efdd9e6b2b','0c620218-95a3-4e18-a0fb-bf6a8a01d8b1','233ee485-a214-4ad3-893a-42010d8a01e8'),('88c2b276-e3f5-42d5-9e23-fb7df538f8a1','2159259a-a58d-484b-94dd-6d29a381d62f','233ee485-a214-4ad3-893a-42010d8a01e8');
/*!40000 ALTER TABLE `tbl_campaign_participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_campaign_photos`
--

DROP TABLE IF EXISTS `tbl_campaign_photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_campaign_photos` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_url` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_campaign` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_tbl_campaign_photos_tbl_campaign1_idx` (`id_campaign`),
  CONSTRAINT `fk_tbl_campaign_photos_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_campaign_photos`
--

LOCK TABLES `tbl_campaign_photos` WRITE;
/*!40000 ALTER TABLE `tbl_campaign_photos` DISABLE KEYS */;
INSERT INTO `tbl_campaign_photos` VALUES ('00b57a46-d98a-4334-a837-19f78124101a','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2FFXMBvDUWIAI4b6y.jpeg?alt=media&token=7710cab2-27be-446c-980b-03ebe1e58bd7','2159259a-a58d-484b-94dd-6d29a381d62f'),('33383720-1af8-450c-9dc9-1c785e6fed46','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fteste-imagem.jpeg?alt=media&token=2f2732e3-40b3-4701-908c-1073f73a47b5','5c537701-0617-4f07-952c-b9a79d6abc74'),('4cd6cec2-8b51-4f04-9628-528bd93bd579','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault.png?alt=media&token=337960c3-810d-42bc-b17e-14dd945acc2c','32505ced-bfdc-490f-889c-e931732f549f'),('67f0ca61-86e0-4efd-a49f-9a628505c0cb','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault.png?alt=media&token=337960c3-810d-42bc-b17e-14dd945acc2c','c83083aa-19e4-42d6-8b92-01066aa145e2'),('682d0291-f06d-4c8f-bc6c-329c062bb217','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault.png?alt=media&token=337960c3-810d-42bc-b17e-14dd945acc2c','77cf92fa-0fa6-471f-9283-90f775ecb3bb'),('68c4e050-ba99-4254-b59f-ed24b60214ce','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fb42ed890afff0ac0c44378ee9ee3d97c.jpeg?alt=media&token=ee282312-c6f0-4ba4-bf06-b7182da351a1','687b766a-5dcd-49d5-8a7e-79673af2166f'),('92b80485-6555-46fd-a5a7-53445dec13f7','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault.png?alt=media&token=337960c3-810d-42bc-b17e-14dd945acc2c','5e76300c-5bb0-4504-be11-94e7cf955a62'),('969b297c-e4ee-4169-9c9c-35b840a92f34','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault.png?alt=media&token=337960c3-810d-42bc-b17e-14dd945acc2c','26d39203-356a-460e-8424-37ae6d489d62'),('9e4c7f1c-cda0-432a-a263-029a13b72662','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault.png?alt=media&token=337960c3-810d-42bc-b17e-14dd945acc2c','555d02a1-3972-4d88-9429-8f352ad25913'),('aabdaec8-c28e-4b45-9706-f49e2d9a65bb','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fimagem_teste_campanha.jpeg?alt=media&token=0dfd2b3b-560d-4918-a162-d9db6a7ca65e','9a666701-8194-4a7b-a45e-0b349f6d5e3c'),('b002f13e-361d-4ae7-9e9e-403e3d0600bc','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault.png?alt=media&token=337960c3-810d-42bc-b17e-14dd945acc2c','0c620218-95a3-4e18-a0fb-bf6a8a01d8b1'),('c9423c4e-cba2-42e7-9bdb-a9d73ec924cd','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fimagem_teste_campanha.jpeg?alt=media&token=0dfd2b3b-560d-4918-a162-d9db6a7ca65e','a1d08d96-039c-4132-be74-2a79a3d4180c'),('c95fd955-d644-47a4-8295-6be5a7149501','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fimagem_teste_campanha.jpeg?alt=media&token=0526b43f-fb47-4b68-85af-b828448f7388','9a666701-8194-4a7b-a45e-0b349f6d5e3c'),('cf668133-e35f-4064-aba6-ea8ca8ce54f5','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fimagem_teste_campanha.jpeg?alt=media&token=7cf562e8-1a72-4da2-8bd1-197d3a01c12f','e8474669-90d8-40d2-afaa-6ed4f0a3201b'),('d1834460-c991-423d-b246-82951f7b916e','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fteste-imagem.jpeg?alt=media&token=2f2732e3-40b3-4701-908c-1073f73a47b5','e867da17-c90c-4109-8037-6e14f3799206'),('d7305a7b-8641-4741-b967-a1019ecdee20','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fteste.jpeg?alt=media&token=42f2e674-3edc-4f1b-886e-9f746824a7dd','194a3fd8-8635-4d71-a4f4-d1b902ec2cd8'),('d850065d-7f81-474f-8d01-3460715ff095','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault.png?alt=media&token=337960c3-810d-42bc-b17e-14dd945acc2c','7146d340-0f7b-4773-855a-c2f4636d7345'),('f2482c27-0cbc-4629-a649-a72ac6294c01','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fimagem_teste_campanha.jpeg?alt=media&token=0526b43f-fb47-4b68-85af-b828448f7388','a1d08d96-039c-4132-be74-2a79a3d4180c'),('f81c0288-538a-431b-b315-970634c70cf4','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fteste-imagem.jpeg?alt=media&token=2f2732e3-40b3-4701-908c-1073f73a47b5','630e0e46-6364-4fb4-9871-170d735c61ca');
/*!40000 ALTER TABLE `tbl_campaign_photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_causes`
--

DROP TABLE IF EXISTS `tbl_causes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_causes` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_causes_id_key` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_causes`
--

LOCK TABLES `tbl_causes` WRITE;
/*!40000 ALTER TABLE `tbl_causes` DISABLE KEYS */;
INSERT INTO `tbl_causes` VALUES ('07c4c9d2-e633-48ca-848b-0f3a0b74d405','teste de causa 2','apenas um teste'),('70a2ad4b-c472-4bbc-b7bf-86e0ec1d4dc3','teste de causa ','apenas um teste'),('b18da906-9fa8-4bce-a5f9-2b66ab169eb0','teste de causa ','apenas um teste');
/*!40000 ALTER TABLE `tbl_causes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_comment`
--

DROP TABLE IF EXISTS `tbl_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_comment` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `likes` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `id_post` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_comment_id_key` (`id`),
  KEY `tbl_comment_id_post_fkey` (`id_post`),
  CONSTRAINT `tbl_comment_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_comment`
--

LOCK TABLES `tbl_comment` WRITE;
/*!40000 ALTER TABLE `tbl_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_comment_ngo`
--

DROP TABLE IF EXISTS `tbl_comment_ngo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_comment_ngo` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_comment` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nGOId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_comment_ngo_id_key` (`id`),
  KEY `fk_tbl_comment_tbl_ngo` (`id_comment`),
  KEY `tbl_comment_ngo_nGOId_fkey` (`nGOId`),
  CONSTRAINT `fk_tbl_comment_tbl_ngo` FOREIGN KEY (`id_comment`) REFERENCES `tbl_comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tbl_comment_ngo_nGOId_fkey` FOREIGN KEY (`nGOId`) REFERENCES `tbl_ngo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_comment_ngo`
--

LOCK TABLES `tbl_comment_ngo` WRITE;
/*!40000 ALTER TABLE `tbl_comment_ngo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_comment_ngo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_comment_user`
--

DROP TABLE IF EXISTS `tbl_comment_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_comment_user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_comment` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_comment_user_id_key` (`id`),
  KEY `fk_tbl_comment_tbl_user` (`id_comment`),
  KEY `tbl_comment_user_id_user_fkey` (`id_user`),
  CONSTRAINT `fk_tbl_comment_tbl_user` FOREIGN KEY (`id_comment`) REFERENCES `tbl_comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tbl_comment_user_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_comment_user`
--

LOCK TABLES `tbl_comment_user` WRITE;
/*!40000 ALTER TABLE `tbl_comment_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_comment_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_following`
--

DROP TABLE IF EXISTS `tbl_following`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_following` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ngo` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_tbl_following_tbl_ngo1_idx` (`id_ngo`),
  KEY `fk_tbl_following_tbl_user1_idx` (`id_user`),
  CONSTRAINT `fk_tbl_following_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo` (`id`),
  CONSTRAINT `fk_tbl_following_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_following`
--

LOCK TABLES `tbl_following` WRITE;
/*!40000 ALTER TABLE `tbl_following` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_following` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_gender`
--

DROP TABLE IF EXISTS `tbl_gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_gender` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abbreviation` char(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `abbreviation_UNIQUE` (`abbreviation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_gender`
--

LOCK TABLES `tbl_gender` WRITE;
/*!40000 ALTER TABLE `tbl_gender` DISABLE KEYS */;
INSERT INTO `tbl_gender` VALUES ('c5a6ed87-c6b9-428b-8afc-1ac0c2adf58e','Masculino','M'),('eae92947-0131-4a0b-8882-f68530e25ee5','Feminino','F'),('ffaec0dd-3fbb-4383-95f5-7c5aaae03169','Prefiro não informar','');
/*!40000 ALTER TABLE `tbl_gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ngo`
--

DROP TABLE IF EXISTS `tbl_ngo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ngo` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cnpj` varchar(17) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foundation_date` date DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photoURL` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault-user-icon-13.jpg?alt=media&token=83439f87-8b14-44fc-a4f1-d20106d9ab70',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_ngo_email_key` (`email`),
  UNIQUE KEY `tbl_ngo_cnpj_key` (`cnpj`),
  KEY `tbl_ngo_id_type_fkey` (`id_type`),
  KEY `tbl_ngo_id_idx` (`id`),
  CONSTRAINT `tbl_ngo_id_type_fkey` FOREIGN KEY (`id_type`) REFERENCES `tbl_type` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ngo`
--

LOCK TABLES `tbl_ngo` WRITE;
/*!40000 ALTER TABLE `tbl_ngo` DISABLE KEYS */;
INSERT INTO `tbl_ngo` VALUES ('0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','teste5','5712657278','2023-02-15','O Instituto Luisa Mell é uma ONG brasileira sem fins lucrativos de proteção animal e meio ambiente, que atua principalmente no resgate de animais feridos ou em situação de risco, recuperação e adoção.','test43@teste.com','$2a$08$3QtXvz/hjcBzoT8jvUEoyeif6hJNQ3XUyRBdo00WizZxfu1FRcR/i','8ce98f3a-0257-4134-9a36-6381565af537','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2F70289218_2476154552471244_2389038647451058176_n.jpeg?alt=media&token=017c86e5-3794-4ce9-930e-3591f134c3fa'),('d94365d0-4e83-4d8d-8a27-31bad8d51ba2','teste6','2345678876','2023-02-15',NULL,'test4@teste.com','$2a$08$xvWB6uQdOXenwgAWzCWGOe/WzUAOfV4tfcUj6XXXqstDTHLG.lZKO','8ce98f3a-0257-4134-9a36-6381565af537','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault-user-icon-13.jpg?alt=media&token=83439f87-8b14-44fc-a4f1-d20106d9ab70');
/*!40000 ALTER TABLE `tbl_ngo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ngo_address`
--

DROP TABLE IF EXISTS `tbl_ngo_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ngo_address` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ngo` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_address` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `tbl_ngo_address_id_ngo_key` (`id_ngo`),
  KEY `fk_tbl_ngo_address_tbl_address1_idx` (`id_address`),
  KEY `fk_tbl_ngo_address_tbl_ngo1_idx` (`id_ngo`),
  CONSTRAINT `fk_tbl_ngo_address_tbl_address1` FOREIGN KEY (`id_address`) REFERENCES `tbl_address` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_ngo_address_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ngo_address`
--

LOCK TABLES `tbl_ngo_address` WRITE;
/*!40000 ALTER TABLE `tbl_ngo_address` DISABLE KEYS */;
INSERT INTO `tbl_ngo_address` VALUES ('2f85bf07-dbd5-4cac-89da-27eacab84b13','0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb','f0f5b717-011f-47ca-b53d-c7bb6755698e'),('5d04bdd5-c9fe-4fcc-a479-67ec8d88fa6b','d94365d0-4e83-4d8d-8a27-31bad8d51ba2','240254d7-ccb3-4b48-a3bf-0f26025b3e73');
/*!40000 ALTER TABLE `tbl_ngo_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ngo_causes`
--

DROP TABLE IF EXISTS `tbl_ngo_causes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ngo_causes` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_causes` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ngo` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_tbl_ngo_causes_tbl_causes1_idx` (`id_causes`),
  KEY `fk_tbl_ngo_causes_tbl_ngo1_idx` (`id_ngo`),
  CONSTRAINT `fk_tbl_ngo_causes_tbl_causes1` FOREIGN KEY (`id_causes`) REFERENCES `tbl_causes` (`id`),
  CONSTRAINT `fk_tbl_ngo_causes_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ngo_causes`
--

LOCK TABLES `tbl_ngo_causes` WRITE;
/*!40000 ALTER TABLE `tbl_ngo_causes` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_ngo_causes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ngo_phone`
--

DROP TABLE IF EXISTS `tbl_ngo_phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ngo_phone` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ngo` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_tbl_ngo_phone_tbl_ngo1_idx` (`id_ngo`),
  KEY `fk_tbl_ngo_phone_tbl_phone1_idx` (`id_phone`),
  CONSTRAINT `fk_tbl_ngo_phone_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo` (`id`),
  CONSTRAINT `fk_tbl_ngo_phone_tbl_phone1` FOREIGN KEY (`id_phone`) REFERENCES `tbl_phone` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ngo_phone`
--

LOCK TABLES `tbl_ngo_phone` WRITE;
/*!40000 ALTER TABLE `tbl_ngo_phone` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_ngo_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_phone`
--

DROP TABLE IF EXISTS `tbl_phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_phone` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_phone`
--

LOCK TABLES `tbl_phone` WRITE;
/*!40000 ALTER TABLE `tbl_phone` DISABLE KEYS */;
INSERT INTO `tbl_phone` VALUES ('034dd9ee-353a-4851-8546-7bd5e7551385',NULL),('171b10a4-3a2f-4338-8f25-0d52fd423236',NULL),('3f71dd4f-bb71-49f6-8451-e1c15170dc15',NULL);
/*!40000 ALTER TABLE `tbl_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_post`
--

DROP TABLE IF EXISTS `tbl_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_post` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT (uuid()),
  `content` text COLLATE utf8mb4_unicode_ci,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_post_id_key` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_post`
--

LOCK TABLES `tbl_post` WRITE;
/*!40000 ALTER TABLE `tbl_post` DISABLE KEYS */;
INSERT INTO `tbl_post` VALUES ('1b4b66eb-dab3-11ed-86fe-6045bdf0a5e7','ola','2023-04-14 10:57:10.608'),('6f368f34-d9f7-11ed-86fe-6045bdf0a5e7','slaa','2023-04-13 12:33:46.128'),('7dd5679d-d794-11ed-86fe-6045bdf0a5e7','marcelo é otaro','2023-04-10 11:40:28.164'),('9323fbc7-d9fb-11ed-86fe-6045bdf0a5e7','','2023-04-13 13:03:24.383'),('b75efed1-d3bb-11ed-86fe-6045bdf0a5e7','marcelo é otaro','2023-04-05 14:11:09.333');
/*!40000 ALTER TABLE `tbl_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_post_ngo`
--

DROP TABLE IF EXISTS `tbl_post_ngo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_post_ngo` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_post` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ngo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_post_ngo_id_key` (`id`),
  KEY `tbl_post_ngo_id_ngo_fkey` (`id_ngo`),
  KEY `tbl_post_ngo_id_post_fkey` (`id_post`),
  CONSTRAINT `tbl_post_ngo_id_ngo_fkey` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tbl_post_ngo_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_post_ngo`
--

LOCK TABLES `tbl_post_ngo` WRITE;
/*!40000 ALTER TABLE `tbl_post_ngo` DISABLE KEYS */;
INSERT INTO `tbl_post_ngo` VALUES ('5001d3af-959a-41c0-8a02-3fe8ca64c5e8','1b4b66eb-dab3-11ed-86fe-6045bdf0a5e7','0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb'),('96eab470-dd28-4a6d-9141-2436894b4dd1','6f368f34-d9f7-11ed-86fe-6045bdf0a5e7','0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb'),('c3bd5335-2e51-40b3-bc3e-707efde63e0c','9323fbc7-d9fb-11ed-86fe-6045bdf0a5e7','0f68b7cd-07ae-46b2-af39-cf5df5f1e0eb');
/*!40000 ALTER TABLE `tbl_post_ngo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_post_photo`
--

DROP TABLE IF EXISTS `tbl_post_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_post_photo` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_post` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_url` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_post_photo_id_key` (`id`),
  KEY `tbl_post_photo_id_post_fkey` (`id_post`),
  CONSTRAINT `tbl_post_photo_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_post_photo`
--

LOCK TABLES `tbl_post_photo` WRITE;
/*!40000 ALTER TABLE `tbl_post_photo` DISABLE KEYS */;
INSERT INTO `tbl_post_photo` VALUES ('06ee6cf0-b77a-4e2f-a810-d6b9d6198b07','1b4b66eb-dab3-11ed-86fe-6045bdf0a5e7','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2F5fc289672cf782aaa7e5831f8e462438_4096x2730_2a60182d.webp?alt=media&token=59898b65-d436-48e9-b53b-f86b5a5236ee'),('24b54a53-9496-4437-a305-00c8ea951de7','b75efed1-d3bb-11ed-86fe-6045bdf0a5e7','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fteste.jpeg?alt=media&token=42f2e674-3edc-4f1b-886e-9f746824a7dd'),('46818951-c609-4b74-a43d-bbe351979480','7dd5679d-d794-11ed-86fe-6045bdf0a5e7','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fteste.jpeg?alt=media&token=42f2e674-3edc-4f1b-886e-9f746824a7dd'),('50511deb-7508-479a-b2a5-45a812446894','7dd5679d-d794-11ed-86fe-6045bdf0a5e7','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault-user-icon-13.jpg?alt=media&token=83439f87-8b14-44fc-a4f1-d20106d9ab70'),('94483310-3128-415d-b965-d6595f71aea4','b75efed1-d3bb-11ed-86fe-6045bdf0a5e7','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault-user-icon-13.jpg?alt=media&token=83439f87-8b14-44fc-a4f1-d20106d9ab70'),('de5ecb89-f2a2-47a2-88d2-05a1c6dd521b','1b4b66eb-dab3-11ed-86fe-6045bdf0a5e7','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fb42ed890afff0ac0c44378ee9ee3d97c.jpeg?alt=media&token=e66368c9-daad-4f6f-8948-a0870a3a5282');
/*!40000 ALTER TABLE `tbl_post_photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_post_user`
--

DROP TABLE IF EXISTS `tbl_post_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_post_user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_post` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_post_user_id_key` (`id`),
  KEY `tbl_post_user_id_post_fkey` (`id_post`),
  KEY `tbl_post_user_id_user_fkey` (`id_user`),
  CONSTRAINT `tbl_post_user_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tbl_post_user_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_post_user`
--

LOCK TABLES `tbl_post_user` WRITE;
/*!40000 ALTER TABLE `tbl_post_user` DISABLE KEYS */;
INSERT INTO `tbl_post_user` VALUES ('128251c7-bc19-488b-b596-d0be286f6990','b75efed1-d3bb-11ed-86fe-6045bdf0a5e7','62064060-e461-49cd-932f-d8fc1ff9bde5'),('8bc27880-6bc1-4001-a854-fad4b6769983','7dd5679d-d794-11ed-86fe-6045bdf0a5e7','62064060-e461-49cd-932f-d8fc1ff9bde5');
/*!40000 ALTER TABLE `tbl_post_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_type`
--

DROP TABLE IF EXISTS `tbl_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_type` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_type_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_type`
--

LOCK TABLES `tbl_type` WRITE;
/*!40000 ALTER TABLE `tbl_type` DISABLE KEYS */;
INSERT INTO `tbl_type` VALUES ('8ce98f3a-0257-4134-9a36-6381565af537','ONG'),('7ab5704c-892d-421e-a7b4-1582bb077774','USER');
/*!40000 ALTER TABLE `tbl_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(90) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cpf` varchar(17) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_gender` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` date NOT NULL,
  `rg` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photoURL` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault-user-icon-13.jpg?alt=media&token=83439f87-8b14-44fc-a4f1-d20106d9ab70',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`),
  KEY `fk_tbl_user_tbl_gender_idx` (`id_gender`),
  KEY `tbl_user_id_type_fkey` (`id_type`),
  CONSTRAINT `fk_tbl_user_tbl_gender` FOREIGN KEY (`id_gender`) REFERENCES `tbl_gender` (`id`),
  CONSTRAINT `tbl_user_id_type_fkey` FOREIGN KEY (`id_type`) REFERENCES `tbl_type` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user`
--

LOCK TABLES `tbl_user` WRITE;
/*!40000 ALTER TABLE `tbl_user` DISABLE KEYS */;
INSERT INTO `tbl_user` VALUES ('233ee485-a214-4ad3-893a-42010d8a01e8','Marcelo Sanches','marcelo@gmail.com','$2a$08$2LzS67U69rvbUd9EHPvFKuPcvab3dl3RnXYHUPb/u9E1HbBAJnluq','53986663800','c5a6ed87-c6b9-428b-8afc-1ac0c2adf58e','2005-09-20',NULL,'7ab5704c-892d-421e-a7b4-1582bb077774','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault-user-icon-13.jpg?alt=media&token=83439f87-8b14-44fc-a4f1-d20106d9ab70'),('62064060-e461-49cd-932f-d8fc1ff9bde5','teste sem imagem','testesemimg@teste.com','$2a$08$YNiOYnfhL5F/iZDw5C9umuP.QO1GuCBd5.G4Wic7DfiqUomTAlHmm','3456543567','c5a6ed87-c6b9-428b-8afc-1ac0c2adf58e','2023-02-15',NULL,'7ab5704c-892d-421e-a7b4-1582bb077774','https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault-user-icon-13.jpg?alt=media&token=83439f87-8b14-44fc-a4f1-d20106d9ab70');
/*!40000 ALTER TABLE `tbl_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_address`
--

DROP TABLE IF EXISTS `tbl_user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user_address` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_address` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `tbl_user_address_id_user_key` (`id_user`),
  KEY `fk_tbl_user_address_tbl_address1_idx` (`id_address`),
  KEY `fk_tbl_user_address_tbl_user1_idx` (`id_user`),
  CONSTRAINT `fk_tbl_user_address_tbl_address1` FOREIGN KEY (`id_address`) REFERENCES `tbl_address` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_user_address_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_address`
--

LOCK TABLES `tbl_user_address` WRITE;
/*!40000 ALTER TABLE `tbl_user_address` DISABLE KEYS */;
INSERT INTO `tbl_user_address` VALUES ('2ed68041-53f6-4fec-b303-fcb54dc62bf8','fe1adf3f-9519-472a-b2ab-2931189a1acf','62064060-e461-49cd-932f-d8fc1ff9bde5'),('a44f4214-b3df-4e2c-aa47-4cbfd3924b98','9cd89887-cccd-4675-9f74-da3a493f6540','233ee485-a214-4ad3-893a-42010d8a01e8');
/*!40000 ALTER TABLE `tbl_user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_phone`
--

DROP TABLE IF EXISTS `tbl_user_phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user_phone` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_phone` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_user_phone_id_key` (`id`),
  KEY `fk_tbl_user_phone_tbl_phone1_idx` (`id_phone`),
  KEY `fk_tbl_user_phone_tbl_user1_idx` (`id_user`),
  CONSTRAINT `fk_tbl_user_phone_tbl_phone1` FOREIGN KEY (`id_phone`) REFERENCES `tbl_phone` (`id`),
  CONSTRAINT `fk_tbl_user_phone_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_phone`
--

LOCK TABLES `tbl_user_phone` WRITE;
/*!40000 ALTER TABLE `tbl_user_phone` DISABLE KEYS */;
INSERT INTO `tbl_user_phone` VALUES ('10d945f7-7aaa-4235-9532-6d9149d95e11','3f71dd4f-bb71-49f6-8451-e1c15170dc15','233ee485-a214-4ad3-893a-42010d8a01e8'),('e95253d6-c72e-4ca7-9a70-6500afb1a077','034dd9ee-353a-4851-8546-7bd5e7551385','62064060-e461-49cd-932f-d8fc1ff9bde5');
/*!40000 ALTER TABLE `tbl_user_phone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-17  9:48:54
