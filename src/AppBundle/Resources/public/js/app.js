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
            when('/form_html', {
                templateUrl: '../../bundles/app/partials/form_html.html',
                controller: 'FormHtmlCtrl'
            }).
            when('/form_symfony', {
                templateUrl: '../../bundles/app/partials/form_symfony.html',
                controller: 'FormSymfonyCtrl'
            }).
//            when('/form_symfony/', {
//                templateUrl: 'rest/print',
//                controller: 'FormSymfonyCtrl'
//            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);
