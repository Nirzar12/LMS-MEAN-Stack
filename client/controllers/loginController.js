app.controller('loginController', function($scope, $http, $location, $rootScope, authService) {
  $scope.user = {};

  $scope.login = function() {
    $http.post('http://localhost:5050/api/auth/login', $scope.user)
      .then(response => {
        authService.setToken(response.data.token);

        // 🔥 Notify the app that login state has changed
        $rootScope.$emit('authChanged');

        // Redirect after login
        $location.path('/courses');
      })
      .catch(error => {
        alert('Error logging in: ' + (error.data?.message || error.message));
      });
  };
});
  