/**
 * Created by ludwi_000 on 3/30/2016.
 */
angular.module('blogg').service('dataService', function ($http, $q) {

        this.getAllPosts = function (callback) {
            $http.get('/api/posts').then(callback);
        };

        this.addThePost = function (post) {
            console.log(post + " has been added");
            $http.post('/api/posts', post);
        };

        this.deletePost = function (id) {
            console.log(id + " has been deleted");
            $http.delete('/api/posts/' + id)
        };

        this.editPost = function (post, id) {
            console.log(" UPDATED ")
            $http.put('/api/posts/' + id)
        };

        this.showPost = function () {
            console.log("")
        }


    }
);