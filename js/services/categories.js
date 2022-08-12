app.factory('dataCategories', ['$http', function($http) {
    return $http.get('../../json/categories.json')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
}]);