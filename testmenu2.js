var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope, $http) {
 $http.get('treemenu.json').success(function(data) {
           $scope.menuList = data;
        });
 
});