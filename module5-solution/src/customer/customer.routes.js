(function() {
	"use strict";

	angular.module('customer')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {

		// Routes
		$stateProvider

		// Contain base state for customer
			.state('customer', {
			url: '/customer',
			abstract: true,
			templateUrl: 'src/customer/customer.html'
		})

		.state('customer.form', {
			url: '',
			templateUrl: 'src/customer/form/customer-form.html',
			controller: 'FormController',
			controllerAs: 'formCtrl'
		})

		.state('customer.info', {
			url: '/info',
			templateUrl: 'src/customer/info/customer-info.html',
			controller: 'InfoController',
			controllerAs: 'infoCtrl',
			resolve: {
				customer: ['CustomerService', function(CustomerService) {
					return CustomerService.getCustomer();
				}]
			}
		});


	}

})();
