var symfonyControllers = angular.module('symfonyControllers', []);



symfonyControllers.controller('DemoCtrl', function ($scope, $http) {
    $http.get('../bundles/app/data/phones.json').success(function(data){
        $scope.phones = data
    });

    $scope.some_variable = 'value of variable';
});

symfonyControllers.controller('Demo2Ctrl', function ($scope, $http) {
    $http.get('../bundles/app/data/phones.json').success(function(data){
        $scope.phones = data
    });

    $scope.some_variable = 'value of variable';
});