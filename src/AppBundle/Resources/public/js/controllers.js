var symfonyControllers = angular.module('symfonyControllers', []);



symfonyControllers.controller('DemoCtrl', function ($scope, $http) {
    $http.get('../bundles/app/data/phones.json').success(function(data){
        $scope.phones = data
    });

    $scope.some_variable = 'value of variable';
});

symfonyControllers.controller('Demo2Ctrl', function ($scope, $http) {
    $http.get('rest/index.json').success(function(data){
        $scope.phones = data
    });

    $scope.some_variable = 'value of variable';
});

symfonyControllers.controller('FormHtmlCtrl', function ($scope, $http) {
    $scope.form = {};
    $scope.form.firstName = 'wpisz imie';
    $scope.form.lastName = 'wpisz nazwisko';

    $scope.submitForm =  function(item, event){
        var data = {
            firstName : $scope.form.firstName,
            lastName : $scope.form.lastName
        };
        console.log(data);
        $http.post('rest/register', data, {});
    }
});

symfonyControllers.controller('FormSymfonyCtrl', function ($scope, $http, $sce) {
    $http.get('rest/print').success(function(data){

        $scope.form = $sce.trustAsHtml(data)
    });

    $scope.submitForm =  function(item, event){
        var data = {
            firstName : $scope.form.name,
            lastName : $scope.form.name
        };
        console.log(data);
        $http.post('rest/register', data, {});
    }


});