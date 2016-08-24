'use strict';

angular.module("myApp").controller("MyAppController", ['$state', function ($state) {
    var self = this;

    self.goToState = function (state) {
        state && $state.go(state);
    };
}]);