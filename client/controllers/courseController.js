
app.controller('courseController', function($scope, $http, authService) {
    const token = authService.getToken();
    
    if (!token) {
      alert('You must be logged in to view courses');
      window.location.href = '#/login';  // Redirect to login if not authenticated
    }
  
    $scope.loading = true;
  
    // Fetch the courses
    $http.get('http://localhost:5000/api/courses', {
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(response => {
    //   console.log('Courses fetched:', response.data);  // Log the response to see data
      $scope.courses = response.data;
      $scope.loading = false;
    }).catch(error => {
    //   console.error('Error fetching courses:', error);  // Log the error if any
      alert('Error fetching courses: ' + error.message);
      $scope.loading = false;
    });
    $scope.enroll = function(courseId) {
      console.log("Course ID:", courseId);
        $http.post('http://localhost:5000/api/enroll/' + courseId, {}, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }).then(function (res) {
          alert('Enrolled successfully!');
        }, function (err) {
          alert('Error: ' + err.data.message);
        });
      };
  });
