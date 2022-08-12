app.controller('BlogController', ['$scope','blog','$routeParams', function($scope,blog,$routeParams) {
    blog.success(function(data) {
        $scope.dataBlog = data ;
        $scope.itemBlog = data.find(itemBlog=> itemBlog.id === $routeParams.id)
    })
}]);