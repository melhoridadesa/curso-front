(function() {
  'use strict';

  angular.module('feira-app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home.html',
          controller: 'homeController',
          css:''
        })
        .when('/sobre', {
          templateUrl: 'sobre.html',
          controller: 'sobreController',
          css:''
        })
        .when('/contato', {
          templateUrl: 'contato.html',
          controller: 'ContatoController',
          css:''
        });
    });
})();