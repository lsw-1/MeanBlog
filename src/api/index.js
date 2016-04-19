'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Post = require('../models/posts');

var router = express.Router();

router.get('/posts', function (req, res) {
    Post.find({}, function (err, posts) {
        if (err) {
            res.status(500).json({message: err.message});
        } else {
            res.json({posts: posts});
        }
    })
});

router.post('/posts', function (req, res) {
    var post = req.body;
    Post.create(post, function (err, post) {
        if (err) {
            return res.status(500)
        }
        res.json({'post': post})
    });

});

router.put('/posts/:id', function (req, res) {
    var id = req.params.id;
    var post = req.body;

    if(post && post._id !== id){
        return res.status(500).json({err: "ERROR ID DONT MATCH"});
    }
    Post.findByIdAndUpdate(id, post,{new: true},function (err, post) {
        if (err) {
            return res.status(500)
        }
        res.json({'post': post})
    });

});

router.delete('/posts/:id', function (req, res) {
   var id = req.params.id;  
    Post.findByIdAndRemove(id)

});


module.exports = router;

