var express = require('express');
bodyParser = require('body-parser'),
    cors = require('cors'),
    fs = require('fs'),
    mysql = require('mysql'),
    connection = require('express-myconnection'),
    auth = require('./middleware/auth'),
    config = require('./config');
var server = express();
router = express.Router();
server.use(connection(mysql, config.db, 'request'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());
server.use('/', require('./routes'));
server.use('/', express.static(__dirname + '/public/'));

server.listen(config.server.port, config.server.ip, function() {
    console.log('Servidor corriendo en ' + config.server.ip + ':' + config.server.port);
});