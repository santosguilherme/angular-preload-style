'use strict';

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}

angular.module('angular.preload.style', ['AngularCommunicator', 'ngAnimate'])

    .constant('preloadStyleConfiguration', {
        templateUrl: 'loading.html',
        scriptBaseUrl: '',
        cssFile: ''
    })

    .constant('PRELOAD_STYLES_EVENTS', {
        SHOW_LOADING_OVERLAY: 'SHOW_LOADING_OVERLAY',
        HIDE_LOADING_OVERLAY: 'HIDE_LOADING_OVERLAY'
    })

    .service('angularPreloadStyle', ['PRELOAD_STYLES_EVENTS', 'angularCommunicatorService', 'preloadStyleConfiguration', 'styleInjector',
        function (PRELOAD_STYLES_EVENTS, angularCommunicatorService, preloadStyleConfiguration, styleInjector) {
            var self = this;


            self.show = function () {
                angularCommunicatorService.exec(PRELOAD_STYLES_EVENTS.SHOW_LOADING_OVERLAY);
            };

            self.hide = function () {
                angularCommunicatorService.exec(PRELOAD_STYLES_EVENTS.HIDE_LOADING_OVERLAY);
            };

            self.loadStyle = function (forceHideOverlay, cssFile, scriptBaseUrl) {
                var base = scriptBaseUrl || preloadStyleConfiguration.scriptBaseUrl,
                    css = cssFile || preloadStyleConfiguration.cssFile;

                styleInjector.inject(base, css).then(function () {
                    forceHideOverlay && self.hide();
                });
            };
        }])

    .
    directive('angularPreloadStyle', ['preloadStyleConfiguration', 'PRELOAD_STYLES_EVENTS', 'angularCommunicatorService',
        function (preloadStyleConfiguration, PRELOAD_STYLES_EVENTS, angularCommunicatorService) {
            return {
                templateUrl: preloadStyleConfiguration.templateUrl,
                link: function (scope, element) {

                    angularCommunicatorService.on(PRELOAD_STYLES_EVENTS.SHOW_LOADING_OVERLAY, function () {
                        scope.showOverlay = true;
                    });

                    angularCommunicatorService.on(PRELOAD_STYLES_EVENTS.HIDE_LOADING_OVERLAY, function () {
                        scope.showOverlay = false;
                    });
                }
            };
        }]);