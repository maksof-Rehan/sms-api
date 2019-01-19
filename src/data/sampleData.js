var Sequelize = require('sequelize');
var entities = require("../entities/entities")();
var sampleEntity = entities.sampleEntity;

exports.sampleFunction = function(){
	return sampleEntity.findAll();
}
