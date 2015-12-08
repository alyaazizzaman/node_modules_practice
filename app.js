//This is where you should incorporate your modules and execute your app
var fs = require('fs');
var respond = require('./autoResponse.js');
var moment = require('moment');

respond.AutoResponse(moment().format('dddd'));
