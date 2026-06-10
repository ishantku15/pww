// global-auth.js — As Multiverse Access Guard
// Include this script at the TOP of every protected page via <script src="global-auth.js"></script>
// It runs immediately, before the page renders anything.

(function() {
  'use strict';
  
  var ACCESS_KEY = 'multiverse_access_expiry';
  var ACCESS_PAGE = 'get-access.html';
  
  function checkAccess() {
    var expiry = localStorage.getItem(ACCESS_KEY);
    var now = Date.now();
    
    // No token exists, or it's expired
    if (!expiry || parseInt(expiry, 10) <= now) {
      // Aggressively nuke the expired token
      localStorage.removeItem(ACCESS_KEY);
      
      // Don't redirect if we're already on the access page
      if (window.location.pathname.indexOf(ACCESS_PAGE) === -1) {
        window.location.href = ACCESS_PAGE;
      }
    }
  }
  
  // Execute immediately — blocks rendering until access is confirmed
  checkAccess();
  
  // Also expose globally so pages can re-check on demand
  window.checkAccess = checkAccess;
})();
