app.factory('blog', ['$http', function($http) {
    return $http.get('../.././json/blog-details.json')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
}]);