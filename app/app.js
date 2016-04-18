'use strict';

angular.module("myApp", ['ui.router'])

    .provider("cssResolve", function CssResolveProvider() {

        this.test = function () {
            return 'cliente.css';
        };

        this.$get = function cssResolveFactory() {
            return new CssResolve();
        };
    })

    .config(['$stateProvider', '$urlRouterProvider', 'cssResolveProvider',
        function ($stateProvider, $urlRouterProvider, cssResolveProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        '': {controller: 'HomeController', templateUrl: 'app/view/home.html'}
                    },
                    resolve: {
                        css: function ($rootScope, clienteService) {
                            clienteService.getStyleClient().then(function(response){
                                $rootScope.cssPath = response;
                            });
                            return '';
                        }
                    }
                });
        }]);



