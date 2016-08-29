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

angular.module('angular.preload.style', ['ngAnimate', 'ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('ANGULAR_PRELOAD_STYLE_LOADING', {
            url: 'loading',
            templateUrl: 'loading.html'
        });
    }])

    .run(['$state', '$preloadStyleConfig', function ($state, $preloadStyleConfig) {
        $preloadStyleConfig.startOpen && $state.go('ANGULAR_PRELOAD_STYLE_LOADING');
    }])

    .constant('$preloadStyleConfig', {
        scriptBaseUrl: '',
        cssFile: '',
        startOpen: true,
        state: ''
    })

    .service('$preloadStyleService', ['$preloadStyleConfig', 'styleInjector', '$state', function ($preloadStyleConfig, styleInjector, $state) {

        var loadToConfiguratedState = function (state) {
            state && $state.go(state);
        };

        this.loadStyle = function (cssFile, scriptBaseUrl, state) {
            var base = scriptBaseUrl || $preloadStyleConfig.scriptBaseUrl;
            var css = cssFile || $preloadStyleConfig.cssFile;
            var state = state || $preloadStyleConfig.state;

            css && styleInjector.inject(base, css).then(function () {
                loadToConfiguratedState(state);
            });

            !css && loadToConfiguratedState(state);
        };
    }]);