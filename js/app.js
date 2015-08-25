var app = angular.module("MeanTea", ['ngRoute']);


app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/checkout', {
      templateUrl: 'partials/checkout.html',
      controller: 'CheckoutController'
    })
    // $locationProvider.html5Mode(true);
    .otherwise({redirectTo: '/'})
})
