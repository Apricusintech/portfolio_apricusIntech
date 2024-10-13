$(document).ready(function() {
    // Set the interval for auto slide
    setInterval(function() {
      $('#home-carousel').carousel('next'); // Move to the next item
    }, 5000); // 5000 milliseconds = 5 seconds
  });