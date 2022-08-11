app.directive('itemProduct', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        item: '=' 
      }, 
      templateUrl: 'js/directives/item-product.html' 
    }; 
});