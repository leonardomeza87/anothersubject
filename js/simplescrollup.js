document.addEventListener("DOMContentLoaded", function() {
  // Variables
  var buttonUp = document.querySelector('a[href="#up"]');
  var easings = {
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  };

  // Functions
  //Animated scroll to up
  function scrollUp(duration, easing) {
    var start = window.pageYOffset;
    var startTime = "now" in window.performance ? performance.now() : new Date().getTime();
    var documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;

    if ("requestAnimationFrame" in window === false) {
      window.scroll(0, 0);
      return;
    }
    // Animation
    function scroll() {
      var now = "now" in window.performance ? performance.now() : new Date().getTime();
      var time = Math.min(1, (now - startTime) / duration);
      var timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil(timeFunction * (0 - start) + start));
      if (window.pageYOffset === 0) {
        return;
      }
      requestAnimationFrame(scroll);
    }
    // Move
    scroll();
  }

  // Events
  // Click button
  buttonUp.addEventListener("click", function() {
    // Get attributes
    var duration = 1000;
    var easing = "easeInOutCubic";
    // Run
    scrollUp(duration, easing);
  });
});
