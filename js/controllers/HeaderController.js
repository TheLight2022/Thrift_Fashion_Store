app.controller('myHeader', ['$scope','dataProducts','dataCategories',function($scope,dataProducts,dataCategories) {
    $scope.currentPage = 0
    $scope.noProduct = false
    if(JSON.parse(localStorage.getItem('myCart'))){
        $scope.countCart = JSON.parse(localStorage.getItem('myCart')).length
    }else{
        $scope.countCart = 0
    }
    $scope.resetValue = function(){
        $scope.search = ""
    }
    dataProducts.success(function(data) {
        $scope.products = data;
       
        $scope.products = $scope.products.map(el=>{
            return {
                ...el,
                addCart : function(){
                    
                    let myCart = localStorage.getItem('myCart')
                    if(!myCart){
                        localStorage.setItem('myCart',JSON.stringify([{
                            id : el.id,
                            qty :1
                        }]));
                        $scope.countCart = 1
                    }else{
                        myCart = JSON.parse(myCart)
                        if(myCart.find(item=>item.id==el.id)){
                            //
                            return
                        }
                        myCart = [
                            ...myCart,
                            {
                                id : el.id,
                                qty :1
                            }
                        ]
                        localStorage.setItem('myCart',JSON.stringify(myCart));
                        $scope.countCart = myCart.length

                    }
                }
            }
        })
        $scope.dataProducts = $scope.products
    })

    dataCategories.success(function(data) {
        $scope.categorys = data.map(item=>{
            return{
                ...item,
                filter : function(){
                    $scope.categories = item.name
                    $scope.filterProducts()
                }
            }
            
        })
        
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

        if($scope.categories){
            $scope.dataProducts = $scope.dataProducts.filter(el=>{
                let re = new RegExp($scope.categories,"gi")
                return el.category.match(re)
            })
        } 

        if($scope.dataProducts.length==0){
            $scope.noProduct = true
        }else{
            $scope.noProduct = false
        }

        window.location.href=`/#/products`

    }
}]);