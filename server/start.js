'use strict';
/* eslint-disable global-require */


// require('babel/register');

var chalk = require('chalk');

// Requires in ./db/index.js -- which returns a promise that represents
// sequelize syncing its models to the postgreSQL database.
// Create a node server instance! cOoL!
var server = require('http').createServer();

var app = require('./app');
server.on('request', app); // Attach the Express application.

server.listen(1337, function () {
    console.log(chalk.blue('Server started on port', chalk.magenta(1337)));
});

// startDb
// .then(createApplication)
// .then(startServer)
// .catch(function (err) {
//     console.error(chalk.red(err.stack));
//     process.exit(1);
// });
