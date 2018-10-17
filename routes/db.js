var mongojs = require("mongojs");
var config = require('../config'); // get our config file

let _db;

module.exports = {
    getDb,
    initDb,
    getMongojs
};

function initDb(callback) {
    //connect to db and set _db to the new connection.
    _db = mongojs(config.database);
}

function getDb() {
    return _db;
}

function getMongojs() {
    return mongojs;
}