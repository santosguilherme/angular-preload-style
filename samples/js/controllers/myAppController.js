'use strict';

angular.module("myApp").controller("MyAppController",
    ["$rootScope", "$scope", "angularPreloadStyle", function ($rootScope, $scope, angularPreloadStyle) {
        $scope.titleText = 'Test Styles';

        $scope.show = function () {
            $scope.$broadcast('SHOW_LOADING_OVERLAY');
        };

        $scope.hide = function () {
            $scope.$broadcast('HIDE_LOADING_OVERLAY');
        };
    }]);