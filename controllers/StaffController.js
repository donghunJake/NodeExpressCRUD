var mysql = require('mysql');
var conn = require('../dbconnection');
var Staff = require('../models/Staff');

var staffController = {};

// Show list of staffs
staffController.list = function(req, res) {
	Staff.find(function (err, staffs) {
	    if (err) { 
	    	console.log("Error:", err);
	    }
	    res.render("../views/staffs/index", {staffs: staffs});
	});
};

// Show staff by id
staffController.show = function(req, res) {
	Staff.findOne(req.params.id , function (err, staff) {
		if (err) { 
	    	console.log("Error:", err);
	    }
	    res.render("../views/staffs/show", {staff: staff[0]});
	});
  
};

// Create new staff
staffController.create = function(req, res) {
	res.render("../views/staffs/create");
};

// Save new staff
staffController.save = function(req, res) {
	Staff.save(req, function (err, staff) {
	    if(err) {
	    	console.log(err);
	    	res.render("../views/staffs/create");
	    } else {
	    	console.log("Successfully created an employee.");
		    res.redirect("/staffs/show/"+String(staff.insertId));
	    }
	});
};

// Edit an staff
staffController.edit = function(req, res) {
	Staff.findOne(req.params.id , function (err, staff) {
		if (err) { 
	    	console.log("Error:", err);
	    }
		res.render("../views/staffs/edit", {staff: staff[0]});
	});
};

// Update an staff
staffController.update = function(req, res) {
	var id = req.params.id;
	
	Staff.findByIdAndUpdate(req , function (err, staff) {
		if (err) { 
	    	console.log("Error:", err);
	    	res.render("../views/employees/edit", {staff: req.body});
	    }
		res.redirect("/staffs/show/"+id);
	});
};

// Delete an staff
staffController.delete = function(req, res) {
	var id = req.params.id;
	
	Staff.remove([id] , function (err, staff) {
		if (err) { 
	    	console.log("Error:", err);
	    }
		console.log("Employee deleted!");
	    res.redirect("/staffs");
	});
};

module.exports = staffController;
