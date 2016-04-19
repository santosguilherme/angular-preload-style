'use strict';

angular.module("myApp", ['angular.preload.style'])

    .provider("cssResolve", function CssResolveProvider() {

        this.test = function () {
            return 'cliente.css';
        };

        this.$get = function cssResolveFactory() {
            return new CssResolve();
        };
    })

    .config(['cssResolveProvider', 'preloadStyleConfiguration', function (cssResolveProvider, preloadStyleConfiguration) {

        //preloadStyleConfiguration.templateUrl = 'test.html';

    }])

    .run(['angularPreloadStyle', function (angularPreloadStyle) {

    }]);



