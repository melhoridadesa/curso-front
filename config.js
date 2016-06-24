(function() {
  'use strict';

  angular.module('feira-app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home.html',
          controller: 'homeController'
        })
        .when('/quemsomos', {
          templateUrl: 'quemsomos.html',
          controller: 'quemSomosController'
        });
    });
})();