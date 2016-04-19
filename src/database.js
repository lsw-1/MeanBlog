'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MeanBlog', function (err) {
    if (err){
        console.error("FAIL! DB");
    } else {
        console.log("SUCCESS DB")
    }
});
