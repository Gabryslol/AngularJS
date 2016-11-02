(function() {
	"use strict";

	angular.module('customer')
		.controller('InfoController', InfoController);

	InfoController.$inject = ['customer', 'ApiPath'];


	function InfoController(customer, ApiPath) {
		var ctrl = this;
		ctrl.basePath = ApiPath;
		ctrl.signedUp = false;
		console.log("Customer controller:", customer);
		if (customer) {
			ctrl.signedUp = true;
			ctrl.firstName = customer.firstName;
			ctrl.lastName = customer.lastName;
			ctrl.email = customer.email;
			ctrl.phone = customer.phone;
			ctrl.item = customer.item;
			console.log("Menu:", ctrl);
		} else {
			ctrl.signedUp = false;
		}
	}

})();
