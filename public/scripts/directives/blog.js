/**
 * Created by ludwi_000 on 4/28/2016.
 */

angular.module('blogg').directive('blog', function () {
    return{
        templateUrl: 'templates/blog.html',
        controller: 'mainCtrl'
    }
});