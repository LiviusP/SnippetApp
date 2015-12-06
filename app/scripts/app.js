'use strict';

/**
 * @ngdoc overview
 * @name snippetAppApp
 * @description
 * # snippetAppApp
 *
 * Main module of the application and state configarion
 *
 */
angular
  .module('snippetApp', ['ui.router' , 'firebase' , 'slugifier'])
  .config(function($stateProvider, $urlRouterProvider){
 
 
  $urlRouterProvider.otherwise("/list");

  $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "partials/list.html",
	  controller : "ListCtrl as listCtrl"
    })
    .state('details', {
      url: "/list/details/{id}",   
      templateUrl: "partials/details.html",
      controller: "DetailsCtrl as detailsCtrl"
    })
    .state('add', {
      url: "/add",
      templateUrl: "partials/add.html",
	  controller : "AddCtrl as addCtrl"
    });
});
  

