'use strict';

var mongoose = require('mongoose');

var PostsSchema = new mongoose.Schema({
    title: String,
    text: String,
    author: String,
    date: { type: Date }
});

var model = mongoose.model('Posts', PostsSchema);

module.exports = model;