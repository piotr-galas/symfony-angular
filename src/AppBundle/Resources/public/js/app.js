'use strict';

/* App Module */

var symfonyApp = angular.module('symfonyApp', [
    'ngRoute',
    'symfonyControllers'
]);

symfonyApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: '../../bundles/app/partials/demo.html',
                controller: 'DemoCtrl'
            }).
            when('/sample_array', {
                templateUrl: '../../bundles/app/partials/sample_array.html',
                controller: 'Demo2Ctrl'
            }).
            when('/form', {
                templateUrl: '../../bundles/app/partials/form.html',
                controller: 'FormCtrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);
