$(Document).ready(function(){
    //superslide
    $('#slides').superslides({
        animation: 'fade',
        play : 2000,
        pagination: false,
    });

    //typed js

    var typed = new Typed('.typed', {
  // Waits 1000ms after typing "First"
  strings: ['Web Development','Graphics Design' , 'Digital Marketing'],
  typeSpeed: 100,
  startDelay: 1000,
  loop: true,
  showCursor: false,
});
 // Owl Carousel
 $('.owl-carousel').owlCarousel({
  loop:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
// Easy Pie Chart
$('.chart').easyPieChart({
  easing : 'easeInOut',
  barColor : '#fff',
  trackColor : false,
  scaleColor : false,
  size : 152,
  lineWidth: 4,
  onStep(from, to, percent){
      $(this.el).find('.percent').text(Math.round(percent));
  }
});
 // Apply Sort and Filtering
 $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
        filter: selector,
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    return false;
});
// Smooth scroll
$("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

});
});