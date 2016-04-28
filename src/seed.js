/*
'use strict';

var Post = require('./models/posts');

var posts = [
    'GREAT', 'JARRÅ', 'Fyfan'
];

posts.forEach(function (post, index) {
    Post.find({'title': post}, function (err, posts) {
        if (!err && !posts.length) {
            Post.create({author: "Ludwig", date: Date.now(), title: post, text: " BLALASVBDXCSDA"})
        }
    })
});*/
