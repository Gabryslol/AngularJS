(function() {
	"use strict";

	angular.module('customer')
		.controller('FormController', FormController);
	//.directive('categoryValidation', CategoryValidationDirective);

	FormController.$inject = ['MenuService', 'CustomerService'];

	function FormController(MenuService, CustomerService) {
		var fCtrl = this;

		fCtrl.submit = function() {
			fCtrl.completed = true;
			console.log(fCtrl);
			var customer = fCtrl.customer;

			MenuService.getMenuItem(fCtrl.customer.itemId)
				.then(function(data) {
					console.log("Data found:", data);
					fCtrl.menuFound = true;
					fCtrl.registration = true;
					fCtrl.customer.item = data;
					CustomerService.setCustomer(customer);
					console.log("OK found");
				}, function(err) {
					console.log("Cat not found");
					fCtrl.menuFound = false;
					fCtrl.registration = true;
				});

		};

	}

	// CategoryValidationDirective.$inject = ['MenuService'];
	//
	// function CategoryValidationDirective(MenuService) {
	// 	var ddo = {
	// 		// restrict to an attribute type.
	// 		restrict: 'A',
	// 		require: 'ngModel',
	// 		link: function(scope, elm, attrs, ctrl) {
	// 			// view -> model
	// 			elm.on('blur', function() {
	// 				if (!ngModel || !elm.val()) return;
	// 				var currentValue = elm.val();
	// 				MenuService.getMenuItems(currentValue)
	// 					.then(function(server) {
	//
	// 						//Ensure value that being checked hasn't changed
	// 						//since the Ajax call was made
	// 						if (currentValue == element.val()) {
	// 							ngModel.$setValidity('server', server);
	// 						}
	// 					}, function() {
	// 						//Probably want a more robust way to handle an error
	// 						//For this demo we'll set unique to true though
	// 						ngModel.$setValidity('server', true);
	// 					});
	// 			});
	//
	// 			// model -> view
	// 			ctrl.$render = function() {
	// 				elm.html(ctrl.$viewValue);
	// 			};
	//
	// 			// load init value from DOM
	// 			ctrl.$setViewValue(elm.html());
	// 		}
	// 	};
	//
	// 	return ddo;
	//
	// }

})();
