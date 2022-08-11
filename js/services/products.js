app.factory('dataProducts', ['$http', function($http) {
    return $http.get('../../json/main.json')
      .success(function(data) {
        console.log(data);
        return data;
      })
      .error(function(err) {
        return err;
      });
}]);