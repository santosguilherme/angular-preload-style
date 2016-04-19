'use strict';

angular.module('angular.preload.style', ['AngularMessenger', 'templates'])

    .constant('preloadStyleConfiguration', {
        templateUrl: 'loading.html',
        scriptBaseUrl: '',
        cssFile: ''
    })

    .constant('EVENTS', {
        SHOW_LOADING_OVERLAY: 'SHOW_LOADING_OVERLAY',
        HIDE_LOADING_OVERLAY: 'HIDE_LOADING_OVERLAY'
    })

    .service('angularPreloadStyle',
    ['preloadStyleConfiguration', 'EVENTS',
        function (preloadStyleConfiguration, EVENTS) {

        }])

    .directive('angularPreloadStyle',
    ['preloadStyleConfiguration', 'angularMessengerService', 'EVENTS', function (preloadStyleConfiguration, angularMessengerService, EVENTS) {
        return {
            templateUrl: preloadStyleConfiguration.templateUrl,
            link: function (scope, element, attrs) {

                scope.$on(EVENTS.SHOW_LOADING_OVERLAY, function () {
                    console.log('mostrar');
                });

                scope.$on(EVENTS.HIDE_LOADING_OVERLAY, function () {
                    console.log('mostrar');
                });
            }
        };
    }]);