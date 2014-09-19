var mongoose = require('mongoose');
var db;

var connect = module.exports = function () {
  mongoose.connect('mongodb://localhost/test');
  db = mongoose.connection;
  db.on('error', function(err) {
    console.error('Error', err);
  });
  db.once('open', function() {
    console.log('connected successfully!');
  });
};