var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventSchema = new Schema({
    name: String
  });
var Event = mongoose.model('Event', EventSchema);

var thunkify = require('thunkify-mongoose-model');
// Event.find thunkified
var find = thunkify(Event, 'find');
// Event.findById thunkified
var findById = thunkify(Event, 'findById');

exports.list = function *(conditions) {
  var docs = yield find(conditions);
  return docs;
};

exports.fetchById = function *(id) {
  return yield findById(id);
};