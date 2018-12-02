module.exports = function(sequelize,DataType){
	return sequelize.define('tblbtcdebit',{
		id : {
			type : DataType.DOUBLE,
			allowNull : false,
			primaryKey : true
		},
		userId : {
			type : DataType.DOUBLE,
			allowNull : false,
		},
		btc_address : {
			type : DataType.STRING,
			allowNull : false,
		},
		recieved_amount : {
			type : DataType.STRING,
			allowNull : false
		},
		status : {
			type : DataType.STRING,
			allowNull : false
		},
		created_at : {
			type : DataType.STRING,
			allowNull : false
		},
		expiry : {
			type : DataType.STRING,
			allowNull : false,
		},
		last_Updated_at : {
			type : DataType.STRING,
			allowNull : false
		},
		is_cancel : {
			type : DataType.DOUBLE,
			allowNull : true
		}

	},{
		tableName : "tblbtcdebit"
	});
}