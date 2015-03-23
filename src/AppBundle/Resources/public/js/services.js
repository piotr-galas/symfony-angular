var symfonyServices = angular.module('symfonyServices', []);

symfonyServices.factory('firstService', function(){
    return {
        say: function(){
            return "hello world"
        }
    }
});