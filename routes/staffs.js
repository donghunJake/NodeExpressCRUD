var express = require('express');
var router = express.Router();
var staffController = require("../controllers/StaffController.js");
var conn = require('../dbconnection');

// Get all employees
router.get('/', function(req, res) {
	staffController.list(req, res);
});

// Get single employee by id
router.get('/show/:id', function(req, res) {
	staffController.show(req, res);
});

// Create employee
router.get('/create', function(req, res) {
	staffController.create(req, res);
});

// Save employee
router.post('/save', function(req, res) {
	staffController.save(req, res);
	
});

// Edit employee
router.get('/edit/:id', function(req, res) {
	staffController.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
	staffController.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
	staffController.delete(req, res);
});

module.exports = router;
