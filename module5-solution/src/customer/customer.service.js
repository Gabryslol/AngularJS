(function() {
	"use strict";

	angular.module("customer")
		.service("CustomerService", CustomerService);


	function CustomerService() {
		var service = this;

		var customer = {};

		service.setCustomer = function(customer) {
			console.log("Setting customer");
			service.customer = {
				firstName: customer.fname,
				lastName: customer.lname,
				email: customer.email,
				phone: customer.phone,
				item: customer.item
			};
			console.log("Set user!" ,customer);
		};

		service.getCustomer = function() {
			return service.customer;
		};
	}
})();
