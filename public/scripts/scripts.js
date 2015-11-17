angular.module('givingTree', ['ngRoute'])


	.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/templates/givingtree.html',
        controller: 'MainCtrl'
      })

      // .when('/favorites', {
      //   templateUrl: 'templates/favorites.html',
      //   controller: 'FavoritesCtrl'
      // });

  }])

	.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
		    // controller logic
		    $('[data-toggle="tooltip"]').tooltip();

	}])

	// BOOTSTRAP TOOLTIP
	// $('[data-toggle="tooltip"]').tooltip();


