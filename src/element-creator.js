angular.module('angular.preload.style').factory('elementCreator',
    ['$rootScope', '$document', 'preloadStyleConfiguration', '$templateRequest', '$sce', '$compile', '$templateCache',
        function ($rootScope, $document, preloadStyleConfiguration, $templateRequest, $sce, $compile, $templateCache) {

            //http://stackoverflow.com/questions/24496201/load-html-template-from-file-into-a-variable-in-angularjs
            //http://stackoverflow.com/questions/26109658/can-i-use-compile-in-an-angular-service-directly-on-a-templateurl-instead-of-on
            //http://stackoverflow.com/questions/30967382/angular-js-load-a-template-html-from-directive-on-click-of-a-button

            var createOverlayDiv = function () {
                var div = document.createElement('div'),
                    templateUrl = $sce.getTrustedResourceUrl(preloadStyleConfiguration.templateUrl);

                /*$templateRequest(templateUrl).then(function (template) {
                 $compile(angular.element(div).html(template).contents())($rootScope.$new());
                 });*/

                var template = $templateCache.get(templateUrl);
                $compile(angular.element(div).html(template).contents())($rootScope.$new());
            };


            return {
                createOverlayDiv: createOverlayDiv
            };
        }]);