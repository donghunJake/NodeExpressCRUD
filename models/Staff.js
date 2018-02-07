/**
 * http://usejsdoc.org/
 */

var mysql = require('mysql');
var conn = require('../dbconnection');

var Staff = {};

Staff.find = function(callback){
	return conn.query("select * from employee", callback);
};

Staff.findOne = function(id, callback){
	return conn.query('select * from employee where id = ?', id, callback);
};

Staff.save = function(req, callback) {
	var name = req.body.name;
	var address = req.body.address;
	var position = req.body.position;
	var salary = req.body.salary;
		
	return conn.query("INSERT INTO `employee` (`name`,`address`,`position`,`salary`) VALUES (?, ?, ?, ?)",
			[name, address, position, salary], callback);
};

Staff.findByIdAndUpdate = function(req, callback){
	var id = req.params.id;
	var name = req.body.name;
	var address = req.body.address;
	var position = req.body.position;
	var salary = req.body.salary;
	
	return conn.query('UPDATE `employee` SET `name` = ?,`address` = ?,`position` = ?,`salary` = ? WHERE `id` = ?'
			, [name, address, position, salary, id] , callback);
};

Staff.remove = function(id, callback){
	return conn.query('delete from employee WHERE `id` = ?', [id] , callback);
};

module.exports = Staff;