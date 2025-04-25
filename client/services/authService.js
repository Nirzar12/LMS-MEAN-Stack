app.factory('authService', function() {
  // Set the token in localStorage
  const setToken = function(token) {
      localStorage.setItem('authToken', token);
  };

  // Get the token from localStorage
  const getToken = function() {
      return localStorage.getItem('authToken');
  };

  // Logout by removing the token from localStorage
  const logout = function() {
      localStorage.removeItem('authToken');
  };

  // Check if the user is logged in by verifying if a token exists in localStorage
  const isLoggedIn = function() {
      return !!localStorage.getItem('authToken');
  };

  // Return the methods to be used in other parts of the app
  return { setToken, getToken, logout, isLoggedIn };
});
