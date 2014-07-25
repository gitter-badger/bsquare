'use strict';

angular.module('projectsApp')
  .controller('MainController', ['$scope', 'CustomerService', '$location', function ($scope, CustomerService, $location) {
  	$scope.customer = CustomerService;

  	$scope.moveTo = function(url) {
  		$location.path(url);
  	};
  }]);
