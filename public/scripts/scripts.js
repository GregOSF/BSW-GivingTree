angular.module('givingTree', ['ngRoute'])


	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/search.html',
        controller: 'MainCtrl'
      })

      .when('/favorites', {
        templateUrl: 'templates/favorites.html',
        controller: 'FavoritesCtrl'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }])

	.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
		    // controller logic
		    $('[data-toggle="tooltip"]').tooltip();

	}])

	// BOOTSTRAP TOOLTIP
	// $('[data-toggle="tooltip"]').tooltip();


