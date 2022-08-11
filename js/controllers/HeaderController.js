app.controller('myHeader', ['$scope','dataProducts','dataCategories','$routeParams',function($scope,dataProducts,dataCategories,$routeParams) {
    $scope.currentPage = $routeParams.id
    $scope.search = $scope.currentPage

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
        $scope.search = $scope.search.replace('\  \g',"").trim()
        key = $scope.search
        // Lọc từ khóa
        re = new RegExp(key, "gi")
        if(key !==""){
            filter = $scope.products.filter(el=>{
                isTrue = el.name.match(re) ||
                el.seller.name.match(re) ||
                el.brand.match(re) ||
                el.category.match(re) 
                return isTrue
            })
            $scope.dataProducts = filter
        }else{
            $scope.dataProducts = $scope.products
        }

        // // Lọc category
        // $scope.dataProducts = $scope.dataProducts.filter(el=>{
        //     return el.category.match($scope.categorys)
        // })

        if($scope.dataProducts.length > 9){
            $scope.dataPage = Math.ceil($scope.dataProducts.length / 9)
            $scope.noProduct = false
        }else{
            $scope.dataPage = false
            if($scope.dataProducts.length==0){
                $scope.noProduct = true
            }
        }
        
    }
}]);