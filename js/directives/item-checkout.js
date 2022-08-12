app.directive('itemCheckout', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        item: '=' 
      }, 
      templateUrl: 'js/directives/item-checkout.html' 
    }; 
});