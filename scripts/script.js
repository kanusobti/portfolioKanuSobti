// /*Initializer for typed Library */
let typed = new Typed(".typed", {
  strings: [
    "Front-End Developer",
    "Problem Solver",
    "Always Learning!",
    "Super Mom!",
    "Spicy Food Lover!"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  startDelay: 100,
  smartBackspace: true,
  loop: true,
  loopcount: Infinity
});

/*hamburger menu*/
$(document).ready(function() {
  $(".hamburger").on("click", function() {
    // toggle class show on the menu
    $(".menu").toggleClass("show");
  });

  $(".navLink").on("click", function() {
    // toggle class show on the menu
    console.log("hello");
    $(".menu").toggleClass("show");
  });
});
