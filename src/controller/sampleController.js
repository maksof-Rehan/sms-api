var bodyParser = require('body-parser');
var entities = require("../entities/entities")();
var sampleEntity = entities.sampleEntity;

exports.sampleFunction = function(req,res){

	// sampleEntity.findAll().then(function(res){
		res.send({
			status : "Status Sample Controller reached",
			
		});
		res.send();
	// });
}

exports.sampleFunction2 = function(req,res){
	console.log(req.query);//if method is get use req.query if post then use req.body
	res.send({
		status : "sample api function Controller reached"
	});
}