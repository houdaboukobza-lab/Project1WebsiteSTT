jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  //add cheveron down to service menu (realy pissed me)
  $('#nav-menu-container').find('.menu-has-children').find('.sf-with-ul').removeClass()
  
  //quickly hide service menu after hovering
  $('.menu-has-children').hover(function(e) {
    $(this).find('> ul').hide(e.type == 'mouseleave');
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fas fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fas fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        /*if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }*/

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#smartlogger-logo').addClass('header-scrolled');
      $('#nav-menu-container').addClass('header-scrolled');
      $('#mobile-nav-toggle').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#smartlogger-logo').removeClass('header-scrolled');
      $('#nav-menu-container').removeClass('header-scrolled');
      $('#mobile-nav-toggle').removeClass('header-scrolled');
    }
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  });

  $(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
  });

  // Skills section
  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%'} );

  // jQuery counterUp (used in Facts section)
  /*$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 500
  });*/

  //animate facts number
  var animate = 0;
  $(window).scroll(function(){
    var oTop = $('#stats').offset().top - window.innerHeight;
    if (animate == 0 && $(window).scrollTop() > oTop) {
      $('.counter-up').each(function() {
        var $this = $(this), countTo = $this.attr('data-count');
    
        $({ countNum : $this.text()}).animate({
          countNum : countTo
        },
        {
          duration : 1000,
          easing : 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      });
      animate = 1;
    }
  });
  

  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 10,
  });
  //google maps
 /*var map = new google.maps.Map(
   $('#map'),{zoom : 4, center: {lat: -25.344, lng: 131.036}}
 );*/

  //added by me!
  //Handle the collapse events and buttons
  $('#close-irrigation').on('click', function () {
    $('#collapseIrrigationDesktop').collapse('hide');
  });

  $('#close-control').on('click', function(){
    $('#collapseControlDesktop').collapse('hide');
  });

  $('#close-monitoring').on('click', function(){
    $('#collapseMonitoringDesktop').collapse('hide');
  });

  $('#close-collect').on('click', function(){
    $('#collapseCollectDesktop').collapse('hide');
  });

  $('#close-healthcare').on('click', function(){
    $('#collapseHealthcareDesktop').collapse('hide');
  });

  /**** hide the desktop collapses when one of them is open */

  $('#collapseIrrigationDesktop').on('show.bs.collapse', function(){
    //hide all the others collpses
    $('#collapseControlDesktop').collapse('hide');
    $('#collapseMonitoringDesktop').collapse('hide');
    $('#collapseCollectDesktop').collapse('hide');
    $('#collapseHealthcareDesktop').collapse('hide');
  });

  $('#collapseControlDesktop').on('show.bs.collapse', function(){
    //hide all the others collpses
    $('#collapseIrrigationDesktop').collapse('hide');
    $('#collapseMonitoringDesktop').collapse('hide');
    $('#collapseCollectDesktop').collapse('hide');
    $('#collapseHealthcareDesktop').collapse('hide');
  });

  $('#collapseMonitoringDesktop').on('show.bs.collapse', function(){
    //hide all the others collpses
    $('#collapseIrrigationDesktop').collapse('hide');
    $('#collapseControlDesktop').collapse('hide');
    $('#collapseCollectDesktop').collapse('hide');
    $('#collapseHealthcareDesktop').collapse('hide');
  });

  $('#collapseCollectDesktop').on('show.bs.collapse', function(){
    //hide all the others collpses
    $('#collapseIrrigationDesktop').collapse('hide');
    $('#collapseControlDesktop').collapse('hide');
    $('#collapseMonitoringDesktop').collapse('hide');
    $('#collapseHealthcareDesktop').collapse('hide');
  });

  $('#collapseHealthcareDesktop').on('show.bs.collapse', function(){
    //hide all the others collpses
    $('#collapseIrrigationDesktop').collapse('hide');
    $('#collapseControlDesktop').collapse('hide');
    $('#collapseMonitoringDesktop').collapse('hide');
    $('#collapseCollectDesktop').collapse('hide');
  });
/**** ****************************************************** */

/**** hide the Mobile collapses when one of them is open */

$('#collapseIrrigationMobile').on('show.bs.collapse', function(){
  //hide all the others collpses
  $('#collapseControlMobile').collapse('hide');
  $('#collapseMonitoringMobile').collapse('hide');
  $('#collapseCollectMobile').collapse('hide');
  $('#collapseHealthcareMobile').collapse('hide');
});

$('#collapseControlMobile').on('show.bs.collapse', function(){
  //hide all the others collpses
  $('#collapseIrrigationMobile').collapse('hide');
  $('#collapseMonitoringMobile').collapse('hide');
  $('#collapseCollectMobile').collapse('hide');
  $('#collapseHealthcareMobile').collapse('hide');
});

$('#collapseMonitoringMobile').on('show.bs.collapse', function(){
  //hide all the others collpses
  $('#collapseIrrigationMobile').collapse('hide');
  $('#collapseControlMobile').collapse('hide');
  $('#collapseCollectMobile').collapse('hide');
  $('#collapseHealthcareMobile').collapse('hide');
});

$('#collapseCollectMobile').on('show.bs.collapse', function(){
  //hide all the others collpses
  $('#collapseIrrigationMobile').collapse('hide');
  $('#collapseControlMobile').collapse('hide');
  $('#collapseMonitoringMobile').collapse('hide');
  $('#collapseHealthcareMobile').collapse('hide');
});

$('#collapseHealthcareMobile').on('show.bs.collapse', function(){
  //hide all the others collpses
  $('#collapseIrrigationMobile').collapse('hide');
  $('#collapseControlMobile').collapse('hide');
  $('#collapseMonitoringMobile').collapse('hide');
  $('#collapseCollectMobile').collapse('hide');
});
  

  //handle the window sizing to niceley show collapses
  function addRemoveCollapse() {
    var wW = $(window).width();
  
    if ( wW >= 767) {
      $('#collapseIrrigation').attr('href','#collapseIrrigationDesktop');
      $('#collapseControl').attr('href','#collapseControlDesktop');
      $('#collapseMonitoring').attr('href','#collapseMonitoringDesktop');
      $('#collapseCollect').attr('href','#collapseCollectDesktop');
      $('#collapseHealthcare').attr('href','#collapseHealthcareDesktop');
    }
    else if (wW < 767) {
      $('#collapseIrrigation').attr('href','#collapseIrrigationMobile');
      $('#collapseControl').attr('href','#collapseControlMobile');
      $('#collapseMonitoring').attr('href','#collapseMonitoringMobile');
      $('#collapseCollect').attr('href','#collapseCollectMobile');
      $('#collapseHealthcare').attr('href','#collapseHealthcareMobile');
    }
  }
  addRemoveCollapse();

  $(window).on('resize', function() {
    addRemoveCollapse();
  })
  //Portfolio collapses (change icon)
  $('#collapsePortfolio1').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-1').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-1').html('Masquer <i class="fas fa-arrow-up"></i>');
    $('#portfolio').find('.portfolio-wrap').addClass('portfolio-wrap-margin');
  });
  $('#collapsePortfolio1').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-1').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-1').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio2').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-2').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-2').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio2').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-2').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-2').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio3').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-3').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-3').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio3').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-3').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-3').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio4').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-4').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-4').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio4').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-4').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-4').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio5').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-5').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-5').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio5').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-5').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-5').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio6').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-6').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-6').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio6').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-6').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-6').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio7').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-7').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-7').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio7').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-7').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-7').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio8').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-8').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-8').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio8').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-8').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-8').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio9').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-9').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-9').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio9').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-9').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-9').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio10').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-10').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-10').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio10').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-10').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-10').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio11').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-11').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-11').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio11').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-11').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-11').html('Détails <i class="fas fa-arrow-down"></i>');
  });

  $('#collapsePortfolio12').on('show.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-12').attr('title','Masquer');
    $('#portfolio').find('.btn-collapse-12').html('Masquer <i class="fas fa-arrow-up"></i>');
  });
  $('#collapsePortfolio12').on('hide.bs.collapse',function(){
    $('#portfolio').find('.btn-collapse-12').attr('title','Lire plus de détails');
    $('#portfolio').find('.btn-collapse-12').html('Détails <i class="fas fa-arrow-down"></i>');
    $('#portfolio').find('.portfolio-item').css({'margin-bottom' : '80px'})
  });
});


