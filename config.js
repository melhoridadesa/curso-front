(function() {
  'use strict';

  angular.module('feira-app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          css:''
        })
        .when('/sobre', {
          templateUrl: 'views/sobre.html',
          controller: 'sobreController',
          css:''
        })
        .when('/contato', {
          templateUrl: 'views/contato.html',
          controller: 'ContatoController',
          css:''
        });
    });
})();