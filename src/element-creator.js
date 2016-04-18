angular.module('angular.preload.style').factory('elementCreator',
    ['$document', 'preloadStyleConfiguration', '$templateRequest', '$sce', '$compile', function ($document, preloadStyleConfiguration, $templateRequest, $sce, $compile) {

        //http://stackoverflow.com/questions/24496201/load-html-template-from-file-into-a-variable-in-angularjs
        //http://stackoverflow.com/questions/26109658/can-i-use-compile-in-an-angular-service-directly-on-a-templateurl-instead-of-on
        //http://stackoverflow.com/questions/30967382/angular-js-load-a-template-html-from-directive-on-click-of-a-button

        var createOverlayDiv = function () {
            /*var $div = angular.element('div');

            $div.html('tempalte: ' + preloadStyleConfiguration.templateUrl);

            angular.element(document.body).append($div);*/
        };


        return {
            createOverlayDiv: createOverlayDiv
        };
    }]);