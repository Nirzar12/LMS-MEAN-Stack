app.controller("courseContentController", function ($scope, $http,$window, $routeParams) {
   // Redirect to login if the user is not authenticated
   if (!localStorage.getItem("authToken")) {
    $location.path("/login");
  }
  const courseId = $routeParams.courseId;
  $scope.contents = [];
  $scope.showModal = false;
  $scope.selectedContent = null;
  $scope.contents.forEach(content => {
    content.read = false; // default as unread
  });
  
  $scope.toggleRead = function(content) {
    content.read = !content.read;
  };
  $scope.goBack = function() {
    $window.history.back();
  };
   

  // Load content
  $http
    .get(`http://localhost:5050/api/content/${courseId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    })
    .then(
      function (res) {
        // console.log("Course content data:", res.data); // Log the response

        // Since res.data is an array, directly assign it to $scope.contents
        if (Array.isArray(res.data)) {
          // Update filePath to use forward slashes
          $scope.contents = res.data.map(content => {
            if (content.filePath) {
              content.filePath = content.filePath.replace(/\\/g, '/'); // Replace backslashes with forward slashes
            }
            return content;
          });
        } else {
          console.error("Expected an array but received:", res.data);
          alert("No content found for this course.");
        }
      },
      function (err) {
        console.error("Failed to load content:", err); // Log error details
        alert("Failed to load content.");
      }
    );

  // Open Modal
  $scope.openModal = function (content) {
    if (content) {
      $scope.selectedContent = content;
      $scope.showModal = true;
    }
  };

  // Close Modal
  $scope.closeModal = function () {
    $scope.showModal = false;
    $scope.selectedContent = null;
  };
});


