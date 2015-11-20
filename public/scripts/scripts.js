angular.module('givingTree', ['ngRoute','ngAnimate'])


	.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './public/views/templates/splash.html',
        controller: 'MainCtrl'
      })
      .when('/water', {
        templateUrl: './public/views/templates/water.html',
        controller: 'MainCtrl'
      })
      .when('/education', {
        templateUrl: './public/views/templates/education.html',
        controller: 'MainCtrl'
      })
      .when('/teachers', {
        templateUrl: './public/views/templates/teachers.html',
        controller: 'MainCtrl'
      });
  }])

	.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
		    // controller logic
		    $('[data-toggle="tooltip"]').tooltip();
        // var $map = $('#treemap')
        // $map.imageMapResize();
  }]);
        



