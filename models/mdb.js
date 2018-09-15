var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NEWS = new Schema({
    id: String,
    title: String,
    date: String,
    press: String,
    content: String,
    link: String,
    numberOfComments: Number,
    point: Number
});

module.exports = mongoose.model('book', bookSchema);
