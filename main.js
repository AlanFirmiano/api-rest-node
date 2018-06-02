var http = require('http');
var config_express = require('./config/express.js');
var db = require('./config/database.js');

let app = config_express();
http.createServer(app)
    .listen(app.get('port'), function(){
        console.log('Express Server escutando na porta '+app.get('port'))
});

db('mongodb://localhost:27017/sistemamatricula');