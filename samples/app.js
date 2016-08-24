'use strict';

angular.module("myApp", ['angular.preload.style', 'ui.router'])

    .config(['$preloadStyleConfig', '$stateProvider', function ($preloadStyleConfig, $stateProvider) {

        $preloadStyleConfig.scriptBaseUrl = 'css/';
        $preloadStyleConfig.startOpen = true;
        $preloadStyleConfig.state = 'one';

        $stateProvider
            .state('one', {
                url: 'one',
                templateUrl: 'views/one.html'
            })
            .state('two', {
                url: 'two',
                templateUrl: 'views/two.html'
            });
    }])

    .run(['clienteService', '$preloadStyleService', function (clienteService, $preloadStyleService) {
        clienteService.getStyleClient().then(function (response) {
            $preloadStyleService.loadStyle(response.data);
        });
    }]);


