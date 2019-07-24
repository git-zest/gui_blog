var app = angular.module('zestblog', ['ngRoute','ngAnimate']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl: '/index.html'
	});

	$routeProvider.otherwise({
       redirectTo: '/'
    });
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});

}]);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.controller('logincontrol',	function($scope,$http){

		console.log("Hello world from controller")
		console.log("Hello world from controller")
		$http({
		  method: 'GET',
		  url: '/customersearch'

		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    console.log(response);
		    $scope.datalist=response.data;
		}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
 		});
	});
