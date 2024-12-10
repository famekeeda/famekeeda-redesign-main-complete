$(document).ready(function () {
    const slider = $('.testimonial-slider');
  
    // Initialize the Slick slider with proper settings
    slider.slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  
    // Arrow button handlers
    $('#testimonial-next').click(function () {
      slider.slick('slickNext');
    });
  
    $('#testimonial-prev').click(function () {
      slider.slick('slickPrev');
    });
  });
  