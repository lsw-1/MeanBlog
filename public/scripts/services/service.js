/**
 * Created by ludwi_000 on 3/30/2016.
 */
angular.module('blogg').service('dataService', function ($http) {

        this.getAllPosts = function (callback) {
            $http.get('../mock/data.json').then(callback);
        };

        this.addthePost = function (selectedpost) {
            console.log(selectedpost + " has been added");
            $http.post('json/data.json')
        };

        this.deletePost = function (selectedpost) {
            console.log(selectedpost + " has been deleted");
            $http.delete()
        };

        this.editPost = function (selectedpost) {
            console.log(selectedpost + " has been edited");
            $http.delete()
        };

        this.showPost = function () {
            console.log("")
        }


    }
);