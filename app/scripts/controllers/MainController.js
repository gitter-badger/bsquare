'use strict';

angular.module('projectsApp')
	.controller('MainController', function ($scope, CustomerService, $location, $cookieStore) {
		$scope.customer = CustomerService;
    $scope.interests = [
      { value: 1, name: 'XBOX'},
      { value: 2, name: 'Playstation'}
    ];
		$scope.moveTo = function(url) {
			$location.path(url);
		};
    $scope.test = function() {
      $scope.saveCookie();
      $scope.moveTo('/payment');
    };
    $scope.saveCookie = function() {
      $cookieStore.put('name', $scope.customer.name);
    };
		$scope.isActive = function(route) {
			return route === $location.path();
    };
    $scope.getCookieName = function() {
      return $cookieStore.get('name');
    };
	});