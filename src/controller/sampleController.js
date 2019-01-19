var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var entities = require("../entities/entities")();
var sampleService = require('../service/sampleService');
var sampleEntity = entities.sampleEntity;

exports.sampleFunction = function(req,res){
	sampleService.sampleData().then(function(results){		
		return res.status(200).json({data : results });
	});
	// sampleEntity.findAll().then(function(result){
	// });
}

exports.sampleFunction2 = function(req,res){
	res.send({
		status : "sample api function Controller reached"
	});
}