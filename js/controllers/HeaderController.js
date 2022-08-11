app.controller('myHeader', ['$scope','dataProducts',function($scope,dataProducts) {
    dataProducts.success(function(data) {
        $scope.products = data;
        $scope.dataProducts = data
    })
    $scope.filterProducts = function(){
        key = $scope.search 
        re = new RegExp(key, "gi")
        if(key !==""){
            filter = $scope.products.filter(el=>{
                isTrue = el.name.match(re) ||
                el.seller[0].name.match(re) ||
                el.brand.match(re)
                return isTrue
            })
            $scope.dataProducts = filter
        }else{
            $scope.dataProducts = $scope.products
        }
        
        
    }
}]);