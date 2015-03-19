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
            when('/phones2', {
                templateUrl: '../../bundles/app/partials/demo.html',
                controller: 'Demo2Ctrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);
