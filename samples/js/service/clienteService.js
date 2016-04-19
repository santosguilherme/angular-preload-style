'use strict';

angular.module("myApp").service("clienteService",
    ["$resource", function ($resource) {

        this.getStyleClient = function () {
            return $resource("http://soft031-177/bpm-server-adm/areas/css");
        };

    }]);