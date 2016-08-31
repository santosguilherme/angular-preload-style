'use strict';

angular.module('angular.preload.style').factory('styleInjector', ['$q', function ($q) {
    var styleInjector = {};

    var createLink = function (url) {
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        return link;
    };

    var checkLoaded = function (url, deferred, tries) {
        for (var script in document.styleSheets) {
            var href = document.styleSheets[script].href || '';
            if (href.split("/").slice(-1).join() === url) {
                deferred.resolve();
                return;
            }
        }
        tries++;
        setTimeout(function () {
            checkLoaded(url, deferred, tries);
        }, 50);
    };

    var normalizeUrl = function (scriptBaseUrl, cssFile) {
        var URL_SEPARATOR = '/',
            EXT_CSS = '.css',
            base = scriptBaseUrl.endsWith(URL_SEPARATOR) ? scriptBaseUrl : scriptBaseUrl + URL_SEPARATOR,
            file = cssFile.endsWith(EXT_CSS) ? cssFile : cssFile + EXT_CSS;

        file.startsWith(URL_SEPARATOR) && (file = file.substr(1));

        return base + file;
    };

    styleInjector.inject = function (scriptBaseUrl, cssFile) {
        var tries = 0,
            deferred = $q.defer(),
            url = normalizeUrl(scriptBaseUrl, cssFile),
            link;

        link = createLink(url);
        link.onload = deferred.resolve;
        link.onerror = deferred.reject;
        angular.element('head').append(link);

        checkLoaded(url, deferred, tries);

        return deferred.promise;
    };

    return styleInjector;
}]);