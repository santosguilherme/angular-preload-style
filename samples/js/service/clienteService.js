'use strict';

angular.module("myApp").service("clienteService",
    ["$q", function ($q) {

        this.getStyleClient = function () {
            var deferred = $q.defer();

            deferred.resolve({data: 'cliente'});

            return deferred.promise;
        };

    }]);