var express = require('express');
var router = express.Router();
// var employee = require("../controllers/EmployeeController.js");
var conn = require('../dbconnection');

// Get all employees
router.get('/', function(req, res) {
	conn.query('select * from employee', function (err, staffs) {
	    if (err) { 
	    	console.log("Error:", err);
	    }
	    console.log(staffs[0].id);
	    res.render("../views/staffs/index", {staffs: staffs});
	});
});

// Get single employee by id
router.get('/show/:id', function(req, res) {
	conn.query('select * from employee where id = ?', req.params.id , function (err, staff) {
		if (err) { 
	    	console.log("Error:", err);
	    }
	    console.log(staff[0].id);
// res.json(staff);
		res.render("../views/staffs/show", {staff: staff[0]});
	});
});

// Create employee
router.get('/create', function(req, res) {
	res.render("../views/staffs/create");
});

// Save employee
router.post('/save', function(req, res) {
	var name = req.body.name;
	var address = req.body.address;
	var position = req.body.position;
	var salary = req.body.salary;
	
	conn.query("INSERT INTO `employee` (`name`,`address`,`position`,`salary`) VALUES (?, ?, ?, ?)", [name, address, position, salary] , function (err, staff) {
	    if(err) {
	    	console.log(err);
	    	res.render("../views/staffs/create");
	    } else {
	    	console.log("Successfully created an employee.");
		    res.redirect("/staffs/show/"+String(staff.insertId));
	    }
	});
	
});

// Edit employee
router.get('/edit/:id', function(req, res) {
	conn.query('select * from employee where id = ?', req.params.id , function (err, staff) {
		if (err) { 
	    	console.log("Error:", err);
	    }
//		res.json(staff);
		res.render("../views/staffs/edit", {staff: staff[0]});
	});
});

// Edit update
router.post('/update/:id', function(req, res) {
	var id = req.params.id;
	var name = req.body.name;
	var address = req.body.address;
	var position = req.body.position;
	var salary = req.body.salary;
	
	conn.query('UPDATE `employee` SET `name` = ?,`address` = ?,`position` = ?,`salary` = ? WHERE `id` = ?'
			, [name, address, position, salary, id] , function (err, staff) {
		if (err) { 
	    	console.log("Error:", err);
	    	res.render("../views/employees/edit", {staff: req.body});
	    }
		res.redirect("/staffs/show/"+id);
	});
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
	var id = req.params.id;
	
	conn.query('delete from employee WHERE `id` = ?', [id] , function (err, staff) {
		if (err) { 
	    	console.log("Error:", err);
	    }
		console.log("Employee deleted!");
	    res.redirect("/staffs");
	});
});

module.exports = router;
