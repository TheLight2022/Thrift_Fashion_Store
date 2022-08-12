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
    .when('/blog/:id', {
      controller: 'BlogController',
      templateUrl: 'views/blog-details.html'
  })
    .when('/login', {
      // controller: 'BlogController',
      templateUrl: 'views/login.html'
    })
    .when('/register', {
      // controller: 'BlogController',
      templateUrl: 'views/register.html'
    })
    .when('/products',{
        templateUrl: 'views/products.html',

    })
    .when('/FAQs',{
      templateUrl: 'views/FAQs.html',
    })
    .when('/checkout',{
      templateUrl: 'views/checkout.html',
      controller: 'CartController'
    })
    .when('/thanks',{
      templateUrl: 'views/thanks.html'
    })
    .when('/wishlist',{
      templateUrl: 'views/wishlist.html',
      controller : 'WishlistController'
    })
  
  
    

    
    

    .otherwise({
      redirectTo: '/home'
    });
});