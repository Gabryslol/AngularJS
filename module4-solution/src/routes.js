(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })

      // Categories list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categories.template.html',
        controller: 'CategoriesController as categories',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      // Items list page
      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/menuapp/templates/items.template.html',
        controller: 'ItemController as items',
        resolve: {
          items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
            console.log($stateParams);
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      })
  }

})();
