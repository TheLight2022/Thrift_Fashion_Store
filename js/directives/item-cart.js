app.directive('itemCart', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        item: '=' 
      }, 
      templateUrl: 'js/directives/item-cart.html' 
    }; 
});