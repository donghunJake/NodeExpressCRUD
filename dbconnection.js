/**
 * http://usejsdoc.org/
 */
var mysql = require('mysql');

var connection = mysql.createPool({

	host : 'localhost',
	user : 'root',
	password : 'cs0319',
	database : 'o2'

});

module.exports = connection;


//CREATE TABLE IF NOT EXISTS `employee` (
//		 `id` int(11) NOT NULL AUTO_INCREMENT,
//		 `name` varchar(50) NOT NULL,
//		 `address` varchar(500) DEFAULT NULL,
//		 `position` varchar(100) DEFAULT NULL,
//		 `salary` int(11) DEFAULT NULL,
//		 `update_at` timestamp DEFAULT current_timestamp,
//		 PRIMARY KEY (`id`)
//		 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//INSERT INTO `o2`.`employee`
//(`name`,`address`,`position`,`salary`)
//VALUES
//('kim so young','Seoul','CEO',1000),
//('kim dong hun','Seoul','Director',1000);