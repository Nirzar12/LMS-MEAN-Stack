app.controller('addCourseController', function($scope, $http, $location,authService) {
    $scope.course = {};
  
    $scope.addCourse = function () {
      $http.post('http://localhost:5000/api/courses/create', $scope.course, {
        headers: {
          Authorization: 'Bearer ' + authService.getToken()
        }
      }).then(function (res) {
        alert('Course added!');
        $location.path('/courses'); // Redirect to course list
      }, function (err) {
        alert('Error: ' + err.data.message);
        console.error(err);
      });
    };
  });
  
  