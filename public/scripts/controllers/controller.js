/**
 * Created by ludwi_000 on 3/30/2016.
 */
"use strict";

angular.module('blogg').controller('mainCtrl', function ($scope, dataService ) {

    dataService.getAllPosts(function (response) {
        var posts = response.data.posts;
        $scope.posts = posts;
    });
    
   
    $scope.addPost = function () {
        var post = {
            title: $scope.post.title,
            text: $scope.post.text,
            date: Date.now(),
            author: "Ludwig"
        };  
        dataService.addThePost(post);
        $scope.newpost = false;
    };

    
    $scope.deletePost = function (index) {  
        var post = $scope.posts[index];
        var id = post._id
        dataService.deletePost(id)
    }
    
    $scope.editPost = function () {
        
    }


});