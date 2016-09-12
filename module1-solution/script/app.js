(function (window) {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.foodList = "";
    $scope.message = "";
    $scope.status = "";
    $scope.formStatus = "";

    $scope.showMessage = function () {
      var list = $scope.foodList;
      var foods = list.toString().trim().replace(/,$/, ''); //remove last semicolon if present
      if (foods === "") {
        $scope.message = "Please enter data first";
        $scope.status = "alert alert-danger";
        $scope.formStatus = "has-error";
      }
      else if (foods.split(',').length > 3) {
        $scope.message = "Too much!";
        $scope.status = "alert alert-success";
        $scope.formStatus = "has-success";
      }
      else {
        $scope.message = "Enjoy!";
        $scope.status = "alert alert-success";
        $scope.formStatus = "has-success";
      }
    }
  }
})(window);
