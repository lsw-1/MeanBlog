/**
 * Created by ludwi_000 on 3/30/2016.
 */
"use strict";

angular.module('blogg').controller('mainCtrl', function ($scope, dataService) {

    dataService.getAllPosts(function (response) {
        $scope.posts = response.data;
    });
    
    $scope.addPost = function () {
        var thepost = {
            title: $scope.post.title,
            text: $scope.post.text,
            date: Date.now(),
            author: "Ludwig"
        };  
        $scope.posts.unshift(thepost);
        $scope.newpost = false;
    };

    
    $scope.deleteAPost = function () {
        
    }


});