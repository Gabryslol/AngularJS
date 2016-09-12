(function (window) {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.foodList = "";
    $scope.message = "";

    $scope.showMessage = function () {
      var list = $scope.foodList;
      var foods = list.toString().trim().replace(/,$/, ''); //remove last semicolon if present
      if (foods === "") {
        $scope.message = "Please enter data first";
        document.querySelector(".message").className = "form-group message alert alert-danger";
        document.querySelector(".form-group").className = "form-group has-error";
      }
      else if (foods.split(',').length > 3) {
        $scope.message = "Too much!";
        document.querySelector(".message").className = "form-group message alert alert-success";
        document.querySelector(".form-group").className = "form-group has-success";
      }
      else {
        $scope.message = "Enjoy!";
        document.querySelector(".message").className = "form-group message alert alert-success";
        document.querySelector(".form-group").className = "form-group has-success";
      }
    }
  }
})(window);
