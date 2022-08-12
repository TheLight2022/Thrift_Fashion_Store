app.controller('CartController',['$scope','dataProducts', function($scope,dataProducts) {
    dataProducts.success(function(data){
        $scope.dataMyCart = data;
        $scope.myCart = JSON.parse(localStorage.getItem('myCart'));
        if($scope.myCart.length ==0){
            $scope.dataMyCart ={}
            return
        }

        $scope.dataMyCart = $scope.dataMyCart.filter(el=>{
            return $scope.myCart.find(item=>{
                return item.id == el.id
            })
        })

        $scope.dataMyCart = $scope.dataMyCart.map((el,index)=>{
            return {
                ...el,
                qty : $scope.myCart[index].qty,
                changeQty :  $scope.changeQty,
                removeItem : function(){
                    let localCart = []
                    $scope.dataMyCart = $scope.dataMyCart.filter(item=>{
                        return el.id !== item.id
                    })
                    $scope.dataMyCart.forEach(el=>{
                        let {id,qty} = el
                        localCart.push({id,qty})
                    })
                    localStorage.setItem('myCart',JSON.stringify(localCart));
                    $scope.countItem = $scope.getCountItems()
                    $scope.total = $scope.getTotal()
                    $scope.countCart = $scope.dataMyCart.length 
                }
            }
        })
        $scope.countItem = $scope.getCountItems()
        $scope.total = $scope.getTotal()
        
    })

    $scope.getCountItems = function(){
        let sum = 0
        $scope.dataMyCart.forEach(el=>{
            sum+=el.qty
        })
        return sum
    }
    $scope.getTotal = function(){
        let total = 0
        $scope.dataMyCart.forEach(el=>{
            total+=el.qty*el.price
        })
        return total
    }

    $scope.changeQty = function(id){
        let localCart = []
        $scope.dataMyCart.forEach(el=>{
            let {id,qty} = el
            localCart.push({id,qty})
        })
        localStorage.setItem('myCart',JSON.stringify(localCart));
        $scope.countItem = $scope.getCountItems()
        $scope.total = $scope.getTotal()
    }

    
    
}]);