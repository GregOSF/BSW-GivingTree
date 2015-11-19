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
		    $('[data-toggle="tooltip"]').tooltip();
        var $map = $('#treemap')
        $map.imageMapResize();
        

	}])


