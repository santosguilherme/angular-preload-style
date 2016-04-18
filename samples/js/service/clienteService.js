'use strict';

angular.module("myApp").service("clienteService",
    ["$q", "$timeout", function ($q, $timeout) {

        this.getStyleClient = function () {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve('cliente.css');
            }, 1000);
            return deferred.promise;
        };

    }]);