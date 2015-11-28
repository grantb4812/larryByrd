app = angular.module('larryByrd', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        
        .when('/bio', {
            templateUrl: 'views/bio.html'
        })
        
        .when('/music', {
            templateUrl: 'views/music.html'
        })
        
        .when('/shop', {
           templateUrl: 'views/music.html' 
        })
        
        .when('/gallery', {
            templateUrl: 'views/music.html'
        })
        
        .when('/contact', {
           templateUrl: 'views/contact.html' 
        });
});

app.controller('activeNavigation', ['$scope', '$location', function($scope, $location){
    $scope.isCurrentPath = function(path) {
    return $location.path() == path;
    };
}]);
