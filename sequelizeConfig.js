var Sequelize = require('sequelize');

// sequelize = new Sequelize('database Name','database username','database pass',{
sequelize = new Sequelize('sql12273980','sql12273980','WzBfclbhKU',{
	// host : 'host name',
	host : 'sql12.freemysqlhosting.net',
	port : 3306,
	dialect : 'mysql',
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