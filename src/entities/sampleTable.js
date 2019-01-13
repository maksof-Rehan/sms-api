module.exports = function(sequelize,DataType){
	return sequelize.define('DB_Test',{
		id : {
			type : DataType.DOUBLE,
			allowNull : false,
			primaryKey : true
		},
		name : {
			type : DataType.STRING,
			allowNull : true,
		},
		email : {
			type : DataType.STRING,
			allowNull : true,
		}
	},{
		tableName : "DB_Test"
	});
}