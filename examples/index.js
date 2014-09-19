var co = require('co');
var query = require('./query');

require('./connect')();

co(query.list)({}); // find all document
co(query.fetchById)('541bbc16f9cf1264094a9524');