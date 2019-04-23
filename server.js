// add module
var  express = require('express');
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3030;
var cors = require('cors');
const requestIp = require("request-ip")

// use modules

app.use(cors());
app.options('*',cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(requestIp.mw());

// add required file 
var sequelize = require('./sequelizeConfig').sequelizeConfig;


// add routes 

var sampleRoutes = require("./src/routes/sampleRoutes")();
app.use('/test',sampleRoutes);

app.use(express.static('app'));

app.get("/testNode",function(req,res){
	sequelize.query('select * from DB_User').then(function(result){
		res.send({
			res : result
		});
	});
});


sequelize.authenticate().then(() => {
	app.listen(port , function(err){
		if(err) console.log(err);
		console.log("port runnig on",port);
	})
	console.log("connection has been established sucessfully");
}).catch(error => {
	console.log("Unable to connect database " ,port);
});
