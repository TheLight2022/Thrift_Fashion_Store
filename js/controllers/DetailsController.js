app.controller('DetailsController',['$scope','$routeParams','dataProducts',function($scope,$routeParams,dataProducts) {
    $scope.qty = 1
    dataProducts.success(function(data){
        $scope.details = data.find(el=>{
            return el.id == $routeParams["id"]
        });
    })


    $scope.addCart = function(){
        if(localStorage.getItem('myCart')){
            mycart = JSON.parse(localStorage.getItem('myCart'));
            mycart.push({
                id : $routeParams["id"],
                qty : $scope.qty
            })
            localStorage.setItem('myCart', JSON.stringify(mycart))
        }else{
            localStorage.setItem('myCart', JSON.stringify([{
                id : $routeParams["id"],
                qty : $scope.qty-''
            }]))
        }
        
    }

    var swiper5 = new Swiper(".mySwiper5", {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: true,
    });
    
    
    
}]);