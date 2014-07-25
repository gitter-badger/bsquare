'use strict';

angular.module('projectsApp')
  .service('CustomerService', [function () {  // (5) $cookies ?
    var service = {
    	name: undefined,
    	email: undefined,
    	consoleChoice: undefined,
    };
    return service;
  }]);
