app.directive('itemBlog', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        item: '=' 
      }, 
      templateUrl: 'js/directives/item-blog.html' 
    }; 
});