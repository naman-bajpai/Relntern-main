CREATE TABLE `taskdata` (
  `id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `end` date DEFAULT NULL,
  `start` date DEFAULT NULL,
  `task` varchar(255) DEFAULT NULL,
  `intern_id` int DEFAULT NULL,
  `mentor_id` int NOT NULL,
  `actualend` date DEFAULT NULL,
  `actualstart` date DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoh6dbkaqfbltqrirop18w7s68` (`intern_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
/*
-- Query: SELECT * FROM login.taskdata
LIMIT 0, 1000

-- Date: 2024-02-06 17:02
*/
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (754,'add list of interns on login page ','2023-11-30','2023-11-24','dashboard ',460,0,NULL,NULL,NULL);
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (755,'hide unnecessary page for intern ','2023-11-30','2023-11-21','hide and show',457,0,NULL,NULL,NULL);
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (756,'create an API to make the login page Dynamic','2023-11-30','2023-11-22','create Api',502,0,NULL,NULL,NULL);
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (757,'add logout button on dasboard','2023-11-22','2023-11-22','logut',460,0,NULL,NULL,NULL);
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (758,'create a property to make dynamic logout','2023-11-29','2023-11-23','logout',460,0,NULL,NULL,NULL);
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (760,'to get task on Id','2023-11-26','2023-11-24','Api ',502,0,NULL,NULL,NULL);
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (802,'Intern should be able to view assigned tasks on dashboard','2024-01-09','2024-01-09','Add view task component',552,0,NULL,NULL,NULL);
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (852,'In magna qui id sint','1971-06-15','1979-06-30','Repudiandae unde ame',1206,0,NULL,NULL,'To-Do');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (952,'Dolores voluptatem o','1983-02-19','2019-01-30','Eveniet sed tempora',1206,3,NULL,NULL,'To-Do');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1056,'Voluptate suscipit s','1998-09-10','2005-12-04','Quasi et eos ipsum',1206,302,'2024-01-01','2024-01-01','Completed');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1057,'Aliquam explicabo U','2006-03-15','1980-11-26','Error saepe labore e',1206,302,'2000-03-15','1980-11-26','In Process');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1058,'Eos adipisicing vol','2003-07-02','2006-12-09','Excepturi sed eos m',1206,252,NULL,NULL,'To-Do');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1059,'Autem rerum eum ulla','2009-09-21','1970-08-03','Facilis numquam hic ',1206,252,NULL,NULL,NULL);
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1102,'Adipisci dolorem in ','1985-03-07','2009-11-09','Aut non deserunt sit',1206,302,NULL,NULL,NULL);
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1252,'Voluptas qui sapient','2024-01-18','2024-01-16','Proident minima nos',1602,302,NULL,NULL,'In Progress');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1253,'Et harum maxime ex d','2024-01-20','2024-01-18','Id eum fuga Quis a',1602,302,NULL,NULL,'To-Do');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1254,'Nulla molestiae ut i','2024-01-25','2024-01-20','Omnis reprehenderit ',1602,302,NULL,NULL,'To-Do');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1255,'Numquam itaque volup','2024-02-02','2024-01-25','Culpa eiusmod labor',1602,302,NULL,NULL,'To-Do');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1302,'nd vhufh','2024-02-06','2024-02-06','Book venue auditorium',2003,352,'2024-02-06','2024-02-06','Completed');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1303,'Dashboard changes','2024-02-10','2024-02-06','Complete dashboard',2003,352,NULL,NULL,'To-Do');
INSERT INTO `` (`id`,`description`,`end`,`start`,`task`,`intern_id`,`mentor_id`,`actualend`,`actualstart`,`status`) VALUES (1304,'hghjb ','2024-02-09','2024-02-06','dashboard',2004,352,'2024-02-08','2024-02-06','Completed');
