app.controller("logoutController", function ($scope, $location) {
    // Logout function
    $scope.logout = function () {
      // Remove the auth token from localStorage
      localStorage.removeItem("authToken");
      
      // Redirect to login page
      $location.path("/login"); // Redirect to login route
    };
  
    // Check if user is logged in
    $scope.isLoggedIn = function () {
      return !!localStorage.getItem("authToken"); // Returns true if authToken exists
    };
  });
  

// app.controller('logoutController', function($scope, $http, $location) {
//     // Logout functionality
//     $scope.logout = function() {
//         // console.log("Logout triggered"); 
//       // Remove the auth token from localStorage
//       localStorage.removeItem('authToken');
      
//       // Redirect to login page or any other public page
//       $location.path('/login');
//     };
//   });