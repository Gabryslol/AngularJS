(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'menuList.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      bindToController: true,
      controllerAs: 'menu'

    };

    return ddo;

  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";

    menu.narrow = function () {
      MenuSearchService.getMatchedMenuItems(menu.searchTerm)
        .then(function (response) {
          menu.found = response;
        })
        .catch(function (error) {
          console.log("Error in click");
        })
    }


    menu.removeItem = function(itemIndex) {
      menu.found.splice(itemIndex, 1);
      console.log("item removed");
      menu.title = (menu.found.length+" item(s) found");
      console.log(menu.title);
    };


  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service = this;


    service.getMatchedMenuItems = function (searchTerm) {

      return $http({
        method: 'GET',
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
        var foundItems = [];
        var allItems = result.data.menu_items;

        if (searchTerm) {
          for (var i = 0; i < allItems.length; i++) {
            if (allItems[i].description.toLowerCase().indexOf(searchTerm) > -1)
              foundItems.push(allItems[i]);
          }
        }
        console.log(foundItems);
        return foundItems;
      }).catch(function (error) {
        console.log("error in service method");
      });

    };


  }

})();
