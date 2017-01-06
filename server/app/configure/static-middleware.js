'use strict';

var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');

module.exports = function (app) {

  // var root = app.getValue('projectRoot');

  // var npmPath = path.join(root, './node_modules');
  // var publicPath = path.join(root, './public');
  // var browserPath = path.join(root, './browser');
  console.log('static');
  app.use(express.static(path.join(__dirname, '../../../node_modules')));
  app.use(express.static(path.join(__dirname, '../../../public')));
  // app.use(express.static(browserPath));

};
