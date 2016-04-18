'use strict';

angular.module('angular.preload.style', [])

    .constant('preloadStyleConfiguration', {
        templateUrl: 'loading.html',
        scriptBaseUrl: '',
        cssFile: ''
    })

    .run(['preloadStyleConfiguration', '$templateCache', '$templateRequest',
        function (preloadStyleConfiguration, $templateCache, $templateRequest) {

        $templateRequest(preloadStyleConfiguration.templateUrl).then(function (template) {
            $templateCache.put(preloadStyleConfiguration.templateUrl, template)
        })

    }])

    .directive('angularPreloadStyle', ['preloadStyleConfiguration', function (preloadStyleConfiguration) {
        return {
            templateUrl: preloadStyleConfiguration.templateUrl,
            link: function (scope, element, attrs) {

            }
        };
    }]);