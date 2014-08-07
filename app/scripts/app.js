'use strict';

angular
  .module('projectsApp', [
    'ngRoute',
    'ngCookies',
    'ngAutocomplete',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'MainController'
      })
      .when('/interests', {
        templateUrl: 'views/interests.html',
        controller: 'MainController'
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/profile'
      });
  });
  