angular.module('angular.preload.style', [])

    .constant('preloadStyleConfiguration', {
        templateUrl: 'loading.html',
        scriptBaseUrl: '',
        cssFile: ''
    })

    .run(['preloadStyleConfiguration', 'elementCreator', function (preloadStyleConfiguration, elementCreator) {

        elementCreator.createOverlayDiv();

    }]);