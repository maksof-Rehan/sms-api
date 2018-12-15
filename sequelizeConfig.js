var Sequelize = require('sequelize');

// sequelize = new Sequelize('database Name','database username','database pass',{
sequelize = new Sequelize('id7989057_smsapi','id7989057_rehan102','Rehan@123',{
	// host : 'host name',
	host : 'https://databases-auth.000webhost.com',
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