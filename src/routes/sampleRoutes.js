var express = require('express');
var accrouter = express.Router();
var bodyParser = require('body-parser');

// add controller
var sampleController = require('../controller/sampleController');


var router = function(){

	accrouter.route('/login')
        .get(function (req, res) {
            console.log("reached in router file");
            return sampleController.sampleFunction(req,res)
        });

    accrouter.route('/sampleApi')
    	.get(function(req,res){
    		return sampleController.sampleFunction2(req,res);
    	});
    	
	return accrouter;
}

module.exports = router;