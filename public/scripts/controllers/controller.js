"use strict";
angular.module('blogg').controller('mainCtrl', function ($scope, dataService) {
    
        dataService.getAllPosts(function (response) {
        var posts = response.data.posts;
        $scope.posts = posts;
    });

    $scope.addPost = function () {
        var post = {
            title: $scope.post.title,
            text: $scope.post.text,
            date: Date.now(),
            author: "Ludwig Stråle Wirén"
        };
        $scope.posts.push(post);
        dataService.addThePost(post);
        $scope.newpost = false;
    };

    
    $scope.editPost = function (index) {
        var post = $scope.posts[index];
        var id = $scope.posts[index]._id;
        console.log(post);
        dataService.editPost(id, post)
    };

    $scope.deletePost = function (index) {
        var id = $scope.posts[index]._id;
        dataService.deletePost(id);
        $scope.posts.pop(index);
    };




});