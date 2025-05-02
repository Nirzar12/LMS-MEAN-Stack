
app.controller(
  "courseController",
  function ($scope, $http, $window, authService) {
    const token = authService.getToken();

    if (!token) {
      alert("You must be logged in to view courses");
      window.location.href = "#!/login";
      return;
    }

    // Initial states
    $scope.loading = true;
    $scope.courses = [];
    $scope.enrolledCourseIds = [];

    // Load all data
    function init() {
      loadCourses();
      loadEnrolledCourses();
    }

    // Fetch all available courses
    function loadCourses() {
      $http
        .get("http://localhost:5000/api/courses", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          $scope.courses = response.data;
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
          alert(
            "Error fetching courses: " + (error.data?.message || error.message)
          );
        })
        .finally(() => {
          $scope.loading = false;
        });
    }

    // Fetch user's enrolled courses
    function loadEnrolledCourses() {
      $http
        .get("http://localhost:5000/api/my-courses", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          $scope.enrolledCourseIds = response.data.map((course) => course._id);
        })
        .catch((error) => {
          console.error("Error fetching enrolled courses:", error);
        });
    }

    // Stripe Payment and then Enroll
    $scope.enrollCourse = function (course) {
      console.log("👉 Course object received on enroll click:", course);
      if ($scope.isAlreadyEnrolled(course._id)) {
        alert("You are already enrolled in this course.");
        return;
      }

      $http
        .post(
          "http://localhost:5000/api/stripe/create-checkout-session",
          {
            title: course.title,
            price: course.price * 100, // cents
            courseId: course._id, // 🔥 Important: courseId bhi bhejna
            description: course.description, // ✅ Send description
            instructor: course.instructor, // ✅ Send instructor
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          const stripe = Stripe(
            "pk_test_51RIQYy2eyGOv0bxFXoCtXxGMQmftnFkXazcToU9VI5fRT5T45mspTO09djpuIJD2uakI814HON81PzPUvOayPekC004Dd0Wmw6"
          );
          stripe.redirectToCheckout({ sessionId: res.data.id });
        })
        .catch((err) => {
          console.error("Stripe checkout error:", err);
          alert("Payment failed: " + (err.data?.error || err.message));
        });
    };

    // Enroll after payment
    function enrollAfterPayment(courseId) {
      $http
        .post(
          "http://localhost:5000/api/enroll/" + courseId,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => {
          alert("✅ Enrollment successful!");
          loadEnrolledCourses(); // Refresh enrolled courses list
          $window.location.href = "#!/my-courses"; // Redirect to My Courses page
        })
        .catch((err) => {
          alert("❌ Enrollment failed: " + (err.data?.message || err.message));
        });
    }

    // Check if already enrolled
    $scope.isAlreadyEnrolled = function (courseId) {
      return $scope.enrolledCourseIds.includes(courseId);
    };

    // Initialize on load
    init();
  }
);
