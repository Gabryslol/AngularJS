(function () {
  'use strict';

  angular.module('data', [])
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {

    var service = this;

    // this method should return a promise which is a result of using the $http service
    service.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: (ApiBasePath + "/categories.json")
      }).then(function (result) {
        return result.data;
      }).catch(function (error) {
        console.log("error in service method");
      });
    };

    // this method should return a promise which is a result of using the $http service, using the following REST API
    // endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, before the call to the server,
    // your code should append whatever categoryShortName value was passed in as an
    // argument into the getItemsForCategory method
    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: (ApiBasePath + "/menu_items.json"),
        params: {category: categoryShortName}
      }).then(function (result) {
        console.log("Param " + categoryShortName);
        return  result.data.menu_items;
      }).catch(function (error) {
        console.log("error in service method");
      });
    };
  }


})();

