(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      {
        name: 'cookies1',
        quantity: 1
      },
      {
        name: 'cookies2',
        quantity: 2
      },
      {
        name: 'cookies3',
        quantity: 3
      },
      {
        name: 'cookies4',
        quantity: 4
      },
      {
        name: 'cookies5',
        quantity: 5
      }
    ];
    var itemsBought = [];

    service.buyItem = function (itemIndex) {
      var item = itemsToBuy[itemIndex];
      itemsToBuy.splice(itemIndex, 1);
      itemsBought.push(item);
    }

    service.getToBuyItems = function () {
      return itemsToBuy;
    }

    service.getBoughtItems = function () {
      return itemsBought;
    }
  }
})();
