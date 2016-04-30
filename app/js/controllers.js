var shopApp = angular.module('shopApp', []);

shopApp.controller('ProductListCtrl', function ($scope) {
	$scope.products = [
		{
			name: 'phone',
			description: 'Samsung S6',
			price: 325.99
		},
		{
			name: 'phone',
			description: 'Samsung S4',
			price: 125.99

		},
		{
			name: 'phone',
			description: 'Samsung A5',
			price: 225.99
		},
		{
			name: 'phone',
			description: 'HTC One S',
			price: 199.99
		}
	];
});
