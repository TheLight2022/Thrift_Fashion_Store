app.controller('myHeader', ['$scope','dataProducts','dataCategories',function($scope,dataProducts,dataCategories) {
    if(localStorage.getItem('visit')){
        $scope.visit = JSON.parse(localStorage.getItem('visit'))
        $scope.visit.visit =+1

    }else{
        localStorage.setItem('visit',JSON.stringify({visit:1}))
    }



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
                        document.querySelectorAll('.countCart').forEach(el=>{
                            el.textContent =  $scope.countCart
                        })

                    }
                }
            }
        })
        $scope.dataProducts = $scope.products
        $scope.suggest =$scope.dataProducts.filter((el,index)=>{
            return index >=0 && index < 4
        })
        $scope.brand1 =  $scope.products.filter(el=>el.category=="Shirt")
        $scope.brand2 =  $scope.products.filter(el=>el.category=="Hats")
        $scope.brand3 =  $scope.products.filter(el=>el.category=="Shoes")
        $scope.brand4 =  $scope.products.filter(el=>el.category=="Glass")
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
            key = $scope.search.toLowerCase()
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