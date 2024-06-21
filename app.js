angular.module('myAnime', [])
       .controller('AppController', function($scope, $http) {

        $http.get('app-details.json').then(function(response) {
            $scope.appName = response.data.name;
            $scope.appDetils = response.data.details;
            $scope.appIcon = response.data.icon;
        }, function(error) {console.error('Error frtching App Details:', error);});
       });