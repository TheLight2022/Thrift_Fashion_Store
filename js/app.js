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
      templateUrl: 'views/login.html'
    })
    .when('/register', {
      templateUrl: 'views/register.html'
    })
    .when('/products',{
        templateUrl: 'views/products.html',
    })
    .when('/products/:id',{
        templateUrl: 'views/products-detail.html',
        controller: 'DetailsController'
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