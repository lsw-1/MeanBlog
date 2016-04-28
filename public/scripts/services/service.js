/**
 * Created by ludwi_000 on 3/30/2016.
 */
angular.module('blogg').service('dataService', function ($http) {

        this.getAllPosts = function (callback) {
            $http.get('/api/posts').then(callback);
        };

        this.addThePost = function (post, callback) {
            console.log(post + " has been added");
            $http.post('/api/posts/', post).then();
        };

        this.editPost = function (id, post) {
            console.log(post + " and " + id + " UPDATED ");
            $http.put('/api/posts/' + id, post)
        };

        this.deletePost = function (id) {
            console.log(id + " has been deleted");
            $http.delete('/api/posts/' + id)
        };

        this.showPost = function () {
            console.log("")
            }
    }
);