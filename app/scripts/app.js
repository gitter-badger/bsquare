'use strict';

angular
  .module('projectsApp', [
    'ngRoute',
    'ngCookies',
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
      .otherwise({
        redirectTo: '/profile'
      });
  });
