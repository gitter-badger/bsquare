'use strict';

angular.module('projectsApp')
	.service('CustomerService', [function () {  // (5) $cookies ?
		var service = {
			name: undefined,
			email: undefined,
			city: undefined,
			interest: undefined,
		};
		return service;
	}]);