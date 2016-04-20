'use strict';

angular.module("myApp", ['angular.preload.style', 'ngResource'])

    .provider("cssResolve", function CssResolveProvider() {

        this.test = function () {
            return 'cliente.css';
        };

        this.$get = function cssResolveFactory() {
            return new CssResolve();
        };
    })

    .config(['preloadStyleConfiguration', function (preloadStyleConfiguration) {

        preloadStyleConfiguration.scriptBaseUrl = 'css/';
        preloadStyleConfiguration.startOpen = true;

    }])

    .run(['clienteService', 'angularPreloadStyle', function (clienteService, angularPreloadStyle) {
        clienteService.getStyleClient().get().$promise.then(function (response) {
            angularPreloadStyle.loadStyle(true, response.path)
        });
    }]);


