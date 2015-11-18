app = angular.module('larryByrd', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        
        .when('/bio', {
            templateUrl: 'views/bio.html'
        })
        
        .when('/music', {
            templateUrl: 'views/music.html',
            controller: 'musicController'
            
        })
});

app.controller('musicController', function($scope){
    $scope.message = "This is working;"
});