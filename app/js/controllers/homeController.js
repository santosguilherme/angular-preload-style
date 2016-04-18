'use strict';

angular.module("myApp").controller("HomeController",
    ["$rootScope", "$scope", function ($rootScope, $scope) {
        $scope.titleText = 'Test Styles';

        $scope.init = function () {
            console.log('test');
        };
    }]);