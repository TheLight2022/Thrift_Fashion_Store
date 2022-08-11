app.controller('myHeader', ['$scope','dataProducts','dataCategories','$routeParams',function($scope,dataProducts,dataCategories,$routeParams) {
    $scope.currentPage = $routeParams.id
    $scope.search = $scope.currentPage
    $scope.noProduct = false
    $scope.resetValue = function(){
        $scope.search = ""
    }
    dataProducts.success(function(data) {
        $scope.products = data;
        $scope.dataProducts = data
        if($scope.dataProducts.length > 9){
            $scope.dataPage = Math.ceil($scope.dataProducts.length / 9)
            $scope.noProduct = false
        }else{
            $scope.dataPage = false
            if($scope.dataProducts.length==0){
                $scope.noProduct = true
            }
        }
    })

    dataCategories.success(function(data) {
        $scope.categorys = data
    })
    
    
    $scope.filterProducts = function(){
        if(!$scope.search){
            $scope.dataProducts = $scope.products
        }else{
            key = $scope.search
            re = new RegExp(key,"gi")

            $scope.dataProducts = $scope.products.filter(el=>{
                isTrue = el.name.match(re)||
                el.category.match(re) 
                return isTrue
            })
        }

        

        if($scope.dataProducts.length > 9){
            $scope.dataPage = Math.ceil($scope.dataProducts.length/9)
            $scope.noProduct = false
        }else{
            $scope.dataPage = false
            if($scope.dataProducts.length == 0){
                $scope.noProduct = true
            }
        }
        
    }
}]);