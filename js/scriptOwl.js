$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        1180:{
          items:3
        }
      }
    });
  });
  $(".next_button").click(function(){
    owl.trigger("next.owl.carousel");
  });
   
  $(".prev_button").click(function(){
    owl.trigger("prev.owl.carousel");
  });