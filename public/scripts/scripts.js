angular.module('givingTree', ['ngRoute'])


	.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './public/views/templates/givingtree.html',
        controller: 'MainCtrl'
      });
  }])

	.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
		    // controller logic
        $('map').imageMapResize();
		    $('[data-toggle="tooltip"]').tooltip();

	}])


