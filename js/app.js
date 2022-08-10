var app = angular.module('myStore', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .when('/about', {
        controller: 'AboutController',
        templateUrl: 'views/about.html'
    })
    .when('/contacts', {
        controller: 'ContactsController',
        templateUrl: 'views/contacts.html'
    })
    .when('/shop', {
        controller: 'ShopController',
        templateUrl: 'views/shop.html'
    })
    .when('/cart', {
        controller: 'CartController',
        templateUrl: 'views/cart.html'
    })
    .when('/blog', {
        controller: 'BlogController',
        templateUrl: 'views/blog.html'
    })
    .when('/login', {
      // controller: 'BlogController',
      templateUrl: 'views/login.html'
    })
    .when('/register', {
      // controller: 'BlogController',
      templateUrl: 'views/register.html'
  })
    

    
    

    .otherwise({
      redirectTo: '/home'
    });
});