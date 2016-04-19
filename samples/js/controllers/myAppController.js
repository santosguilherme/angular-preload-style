'use strict';

angular.module("myApp").controller("MyAppController", ["angularPreloadStyle", function (angularPreloadStyle) {

    this.show = function () {
        angularPreloadStyle.show();
    };

    this.hide = function () {
        angularPreloadStyle.hide();
    };
}]);