var Sequelize = require('sequelize');

// sequelize = new Sequelize('database Name','database username','database pass',{
sequelize = new Sequelize('sms_api','postgres','root',{
	// host : 'host name',
	host : 'localhost',
	port : 5432,
	dialect : 'postgres',
	dialectOptions : { 
		timeout : 3000 
	},
	pool : {
		max : 5,
		min : 0,
		idle : 10000
	},
})

module.exports.sequelizeConfig = sequelize;