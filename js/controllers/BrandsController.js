app.controller('BrandsController', ['$scope','dataProducts', function($scope,dataProducts) {

    dataProducts.success(function(data) {
        $scope.brand_1 = data.filter(el=>el.brand=="No Brand")
        $scope.brand_2 = data.filter(el=>el.brand=="No Brand")
        $scope.brand_3 = data.filter(el=>el.brand=="No Brand")
        $scope.brand_4 = data.filter(el=>el.brand=="No Brand")
        $scope.brand_5 = data.filter(el=>el.brand=="No Brand")

    })


}]);