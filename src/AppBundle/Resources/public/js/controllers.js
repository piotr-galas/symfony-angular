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
    $http.get('rest/form_in_partial').success(function(data){

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

symfonyControllers.controller('FormSymfonyTwigCtrl', function ($scope, $http, $sce, firstService) {
    $scope.hello = firstService.say();
    $scope.hello2 = 'fff';
    $scope.submitForm =  function(item, event){
        var data = {
            'animal_form_type[name]' : $scope.form.name
//            lastName : $scope.form.name
        };
        console.log(data);
//        $http.post('rest/form_in_twig_process', data, {});

        $http({
            method: "POST",
            url: 'rest/form_in_twig.json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $.param(data)
        }).success(function(response){
            console.log(response)
        });
    }
});

//symfonyControllers.controller('FormSymfonyCtrl', function ($scope, $http, $sce, firstService) {
//
//});
