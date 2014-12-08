/**
 * Help to thunkify methods of mongoose model to work with co
 *
 * @package thunkify-mongoose-model
 * @author Roy Ling <royling0024@gmail.com>
 */

var thunkify = require('thunkify');

module.exports = function (model, method) {
  if (!isMongooseModel(model)) {
    throw new TypeError('Can only thunkify a mongoose model');
  }
  
  if ('function' != typeof model[method]) {
    throw new TypeError('No such method found on mongoose model: ' + method);
  }
  
  return thunkify(model[method].bind(model));
};

function isMongooseModel(o) {
  return o && o.model && 'model' === o.model.name;
}
