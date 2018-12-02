var Sequelize = require('sequelize');
var sequelize = require('../../sequelizeConfig').sequelizeConfig;

var entity = function(){
	var entities = {};
	entities.sampleEntity = sequelize.import('./sampleTable');

	return entities;
}

module.exports = entity;