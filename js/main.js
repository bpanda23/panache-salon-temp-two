 // AOS.init({
 // 	duration: 800,
 // 	easing: 'slide'
 // });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: true,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
	  verticalOffset: 0,
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-work').owlCarousel({
			autoplay: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding:0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1,
					stagePadding: 0
				},
				600:{
					items: 2,
					stagePadding: 50
				},
				1000:{
					items: 3,
					stagePadding: 100
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 750) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 750) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 800 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 800 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('#appointment_time').timepicker();

	// Service Filter and Carousel Functionality
	var serviceFilter = function() {
            var categories = ['haircuts', 'spa', 'skincare', 'bridal', 'party', 'wellness'];
            var currentCategory = 'haircuts';
            var cardGroups = {};
            var isAnimating = false;
            
            // Initialize card groups by category
            $('.staff-card').each(function() {
                var category = $(this).data('category');
                if (!cardGroups[category]) {
                    cardGroups[category] = [];
                }
                cardGroups[category].push($(this));
            });
            
            function changeCategory(category, direction) {
                if (category === currentCategory && direction) return;
                isAnimating = true;
                
                // Update active filter button visually
                $('.filter-btn').removeClass('active');
                $('.filter-btn[data-filter="' + category + '"]').addClass('active');
                
                var currentCards = $('.staff-card:visible');
                var nextCards = cardGroups[category] || [];
                
                // If there's no direction provided (initial load), skip animation
                if (!direction) {
                    $('.staff-card').hide();
                    nextCards.forEach(function(card) { card.show(); });
                    currentCategory = category;
                    updateDots();
                    isAnimating = false;
                    return;
                }
                
                // Add slide-out class based on direction
                currentCards.addClass(direction === 'next' ? 'slide-out-left' : 'slide-out-right');
                
                setTimeout(function() {
                    $('.staff-card').hide().removeClass('slide-out-left slide-out-right slide-in-left slide-in-right');
                    
                    nextCards.forEach(function(card) {
                        card.show().addClass(direction === 'next' ? 'slide-in-right' : 'slide-in-left');
                    });
                    
                    currentCategory = category;
                    updateDots();
                    
                    setTimeout(function() {
                        $('.staff-card').removeClass('slide-in-left slide-in-right');
                        isAnimating = false;
                    }, 500); // Wait for CSS animation to finish
                }, 300); // Matches slide out animation duration
            }
            
            // Update dots
            function updateDots() {
                var dotsContainer = $('#carouselDots');
                if (dotsContainer.length === 0) {
                    dotsContainer = $('.carousel-dots');
                }
                
                if (dotsContainer.length > 0) {
                    dotsContainer.empty();
                    for (var i = 0; i < categories.length; i++) {
                        var dotClass = categories[i] === currentCategory ? 'dot active' : 'dot';
                        dotsContainer.append('<span class="' + dotClass + '" data-category="' + categories[i] + '"></span>');
                    }
                }
            }
            
            // Filter button click handler
            $('.filter-btn').on('click', function() {
                if (isAnimating) return;
                var targetCategory = $(this).data('filter');
                if (targetCategory === currentCategory) return;
                
                var currentIndex = categories.indexOf(currentCategory);
                var targetIndex = categories.indexOf(targetCategory);
                var direction = targetIndex > currentIndex ? 'next' : 'prev';
                
                changeCategory(targetCategory, direction);
            });
            
            // Previous button handler
            $('#prevBtn, .carousel-control.prev, .carousel-prev').on('click', function(e) {
                e.preventDefault();
                if (isAnimating) return;
                var idx = categories.indexOf(currentCategory);
                idx = (idx - 1 + categories.length) % categories.length;
                changeCategory(categories[idx], 'prev');
            });
            
            // Next button handler
            $('#nextBtn, .carousel-control.next, .carousel-next').on('click', function(e) {
                e.preventDefault();
                if (isAnimating) return;
                var idx = categories.indexOf(currentCategory);
                idx = (idx + 1) % categories.length;
                changeCategory(categories[idx], 'next');
            });
            
            // Dot click handler
            $(document).on('click', '.dot', function() {
                if (isAnimating) return;
                var targetCategory = $(this).data('category');
                if (targetCategory === currentCategory) return;
                
                var currentIndex = categories.indexOf(currentCategory);
                var targetIndex = categories.indexOf(targetCategory);
                var direction = targetIndex > currentIndex ? 'next' : 'prev';
                
                changeCategory(targetCategory, direction);
            });
            
            // Initialize display without animation
            changeCategory('haircuts', null);
	};
	serviceFilter();

})(jQuery);


    // View Details Scroll Modal Logic
    $(document).on('click', '.btn-view-details', function(e) {
        e.preventDefault();
        $('#scrollModal').addClass('active');
    });
    
    $(document).on('click', '#closeScroll, #scrollModal', function(e) {
        if (e.target.id === 'scrollModal' || e.target.id === 'closeScroll') {
            $('#scrollModal').removeClass('active');
        }
    });
