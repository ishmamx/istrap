(function($) {
  "use strict";

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/

  $(window).on("load", function() {
    $(window).trigger("scroll");
    $(window).trigger("resize");
  });

  $(document).ready(function() {
    $(window).trigger("resize");
    mainMenu();
    mobileMenu();
    sideBarHeader();
    stickyHeader();
    customToggleInt();
    bootstrapInt();
    formField();
    stickyFooter();
    Scrollbar.initAll();
  });

  $(window).on("resize", function() {
    mobileMenu();
  });

  $(window).on("scroll", function() {
    stickyHeader();
  });

  $.exists = function(selector) {
    return $(selector).length > 0;
  };

  /*--------------------------------------------------------------
    1. Header Sctipt
  --------------------------------------------------------------*/

  /* Main Menu */
  function mainMenu() {
    $(".yoo-nav-toggle").on("click", function() {
      $(this).siblings(".yoo-nav").slideToggle();
      $(this).toggleClass("yoo-active");
    });
    $(".yoo-has-children").append('<span class="yoo-dropdown-btn"></span>');
    $(".yoo-dropdown-btn").on("click", function() {
      $(this).siblings("ul, .yoo-megamenu-in, .yoo-vertical-megamenu-in").slideToggle("slow");
      $(this).toggleClass("yoo-active");
    });
  }
  /* Mobile Menu */
  function mobileMenu() {
    if ($(window).width() <= 991) {
      $(".yoo-header").addClass("yoo-mobile-header");
      $(".yoo-nav").addClass("yoo-mobile-nav").removeClass("yoo-desktop-nav");
    } else {
      $(".yoo-header").removeClass("yoo-mobile-header");
      $(".yoo-nav").addClass("yoo-desktop-nav").removeClass("yoo-mobile-nav");
    }
  }
  /* Sticky Header */
  function stickyHeader() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".yoo-header").addClass("yoo-sticky-active");
    } else {
      $(".yoo-header").removeClass("yoo-sticky-active");
    }
  }
  /* Sidebar Header */
  function sideBarHeader() {
    $(".yoo-sidebar-has-children").append('<span class="yoo-dropdown-arrow"></span>');
    $('.yoo-sidebar-nav-dropdown .active').parents('.yoo-sidebar-nav-dropdown').show();
    $('.yoo-sidebar-nav-dropdown .active').parents('.yoo-sidebar-nav-dropdown').siblings('.yoo-dropdown-arrow').addClass('active');
    $(".yoo-sidebar-has-children>a").removeAttr("href").on("click", function() {
      $(this).siblings(".yoo-sidebar-nav-dropdown").slideToggle();
      $(this).siblings(".yoo-dropdown-arrow").toggleClass("active");
    });
    $(".yoo-sidebarheader-toggle").on("click", function() {
      $("body").toggleClass("yoo-sidebar-active");
    });
    // Hover To Class Toggle
    $(".yoo-sidebarheader").hover(
      function() {
        $("body").addClass("yoo-sidebar-hover-active");
      },
      function() {
        $("body").removeClass("yoo-sidebar-hover-active");
      }
    );
  }

  /*--------------------------------------------------------------
    2. Form Active Class
  --------------------------------------------------------------*/
  function formField() {
    $('.level-up .form-control').focusin(function() {
      $(this).parents('.level-up').addClass("active1");
    });
    $('.level-up .form-control').focusout(function() {
      $(this).parents('.level-up').removeClass("active1");
    });

    $('.level-up .form-control').blur(function() {
      if ($(this).val()) {
        $(this).parents('.level-up').addClass('active2');
      } else {
        $(this).parents('.level-up').removeClass('active2');
      }
    });
  }

  /*--------------------------------------------------------------
    3. Toggle Btn
  --------------------------------------------------------------*/
  function customToggleInt() {
    // Custome Toggle Button
    $(".yoo-toggle-btn").on("click", function() {
      $(this).toggleClass("active").siblings(".yoo-dropdown").toggleClass("active");
      $(this).parents("li").siblings().find(".yoo-dropdown, .yoo-toggle-btn").removeClass("active");
      $(this).parents('.yoo-toggle-body').siblings().find('.yoo-dropdown, .yoo-toggle-btn').removeClass('active');
    });
    $('.yoo-toggle-cross-btn').on('click', function() {
      $(this).parents('.yoo-toggle-body').find('.yoo-toggle-btn, .yoo-dropdown').removeClass('active');
    })
    $(document).on("click", function() {
      $(".yoo-dropdown").removeClass("active").siblings().removeClass("active");
    });
    $(".yoo-dropdown, .yoo-toggle-btn").on("click", function(e) {
      e.stopPropagation();
    });

    $('.yoo-toggle-cross').on('click', function() {
      $(this).parents('.yoo-dropdown').removeClass('active').siblings('.yoo-toggle-btn').removeClass('active');
    })
    // Star Toggle Btn
    $('.yoo-get-star, .yoo-mobile-toggle-btn').on('click', function() {
      $(this).toggleClass('active');
    })
  }


  /*--------------------------------------------------------------
    4. Bootstrap Setup Mode
  --------------------------------------------------------------*/
  function bootstrapInt() {
    // Checkbox
    $('.your-checkbox').prop('indeterminate', true);
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    // Popover
    $('[data-toggle="popover"]').popover();
    // Toast
    $('.toast').toast();
  }


  /*--------------------------------------------------------------
    5. sticky footer
  --------------------------------------------------------------*/
  function stickyFooter() {
    $('.yoo-sticky-footer').parents('.yoo-content').append('<div class="yoo-height-b40 yoo-height-lg-b0"></div>');
  }


})(jQuery); // End of use strict
