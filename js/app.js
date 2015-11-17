app = angular.module('larryByrd', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        
        .when('/bio', {
            templateUrl: 'views/bio.html'
        })
});

app.controller('navigationController', function($scope){
    $scope.message = "This is working;"
});