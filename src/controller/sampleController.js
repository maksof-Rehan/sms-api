var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var entities = require("../entities/entities")();
var sampleEntity = entities.sampleEntity;

exports.sampleFunction = function(req,res){

	sampleEntity.findAll().then(function(res){
		// res.send({
		// 	status : "Status Sample Controller reached",
			
		// });
		return res.status(200).json({data : res });
	});
}

exports.sampleFunction2 = function(req,res){
	console.log(req.query);//if method is get use req.query if post then use req.body
	res.send({
		status : "sample api function Controller reached"
	});
}