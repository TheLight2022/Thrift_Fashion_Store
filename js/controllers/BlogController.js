app.controller('BlogController', ['$scope','blog', function($scope,blog) {
    blog.success(function(data) {
        $scope.dataBlog = data;
    })
}]);