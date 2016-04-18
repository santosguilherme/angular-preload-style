'use strict';

angular.module('angular.preload.style', ['templates'])

    .constant('preloadStyleConfiguration', {
        templateUrl: 'loading.html',
        scriptBaseUrl: '',
        cssFile: ''
    })

    .directive('angularPreloadStyle', ['preloadStyleConfiguration', function (preloadStyleConfiguration) {
        return {
            templateUrl: preloadStyleConfiguration.templateUrl,
            link: function (scope, element, attrs) {

            }
        };
    }]);