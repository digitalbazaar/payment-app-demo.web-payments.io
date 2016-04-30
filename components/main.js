define([
  'angular'
], function(angular) {

'use strict';

var module = angular.module('payment-app-demo', []);

/* @ngInject */
module.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      title: 'Payment App Demo',
      templateUrl: requirejs.toUrl('payment-app-demo/landingPage.html')
    });
});

return module.name;

});
