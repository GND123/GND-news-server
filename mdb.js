var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NEWS = new Schema({
    title: String,
    date: String,
    press: String,
    content: String,
    numberOfComments: Number,
    point: Number
});

var USERS = new Schema({
    name: String,
    id: String,
    pw: String,
    email: String,
    nickname: String
})

module.exports = mongoose.model('book', bookSchema);
