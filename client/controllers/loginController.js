app.controller('loginController', function($scope, $http, $location, authService) {
    $scope.user = {};
  
    $scope.login = function() {
      $http.post('http://localhost:5000/api/auth/login', $scope.user)
        .then(response => {
          authService.setToken(response.data.token);
          $location.path('/courses');  // Redirect to courses page after login
        })
        .catch(error => {
          alert('Error logging in: ' + (error.data?.message || error.message));
        });
    };
  });
  