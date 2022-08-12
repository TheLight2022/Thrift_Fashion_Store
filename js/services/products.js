app.factory('dataProducts', ['$http', function($http) {
    return $http.get('../../json/main.json')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
}]);