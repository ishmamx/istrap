(function($) {
  "use strict";

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/

  $(window).on("load", function() {
    $(window).trigger("scroll");
    $(window).trigger("resize");
  });

  $(document).on("ready", function() {
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
    $(".tb-nav-toggle").on("click", function() {
      $(this).siblings(".tb-nav").slideToggle();
      $(this).toggleClass("tb-active");
    });
    $(".tb-has-children").append('<span class="tb-dropdown-btn"></span>');
    $(".tb-dropdown-btn").on("click", function() {
      $(this).siblings("ul, .tb-megamenu-in, .tb-vertical-megamenu-in").slideToggle("slow");
      $(this).toggleClass("tb-active");
    });
  }
  /* Mobile Menu */
  function mobileMenu() {
    if ($(window).width() <= 991) {
      $(".tb-header").addClass("tb-mobile-header");
      $(".tb-nav").addClass("tb-mobile-nav").removeClass("tb-desktop-nav");
    } else {
      $(".tb-header").removeClass("tb-mobile-header");
      $(".tb-nav").addClass("tb-desktop-nav").removeClass("tb-mobile-nav");
    }
  }
  /* Sticky Header */
  function stickyHeader() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".tb-header").addClass("tb-sticky-active");
    } else {
      $(".tb-header").removeClass("tb-sticky-active");
    }
  }
  /* Sidebar Header */
  function sideBarHeader() {
    $(".tb-sidebar-has-children").append('<span class="tb-dropdown-arrow"></span>');
    $('.tb-sidebar-nav-dropdown .active').parents('.tb-sidebar-nav-dropdown').show();
    $('.tb-sidebar-nav-dropdown .active').parents('.tb-sidebar-nav-dropdown').siblings('.tb-dropdown-arrow').addClass('active');
    $(".tb-sidebar-has-children>a").removeAttr("href").on("click", function() {
      $(this).siblings(".tb-sidebar-nav-dropdown").slideToggle();
      $(this).siblings(".tb-dropdown-arrow").toggleClass("active");
    });
    $(".tb-sidebarheader-toggle").on("click", function() {
      $("body").toggleClass("tb-sidebar-active");
    });
    // Hover To Class Toggle
    $(".tb-sidebarheader").hover(
      function() {
        $("body").addClass("tb-sidebar-hover-active");
      },
      function() {
        $("body").removeClass("tb-sidebar-hover-active");
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
    $(".tb-toggle-btn").on("click", function() {
      $(this).toggleClass("active").siblings(".tb-dropdown").toggleClass("active");
      $(this).parents("li").siblings().find(".tb-dropdown, .tb-toggle-btn").removeClass("active");
      $(this).parents('.tb-toggle-body').siblings().find('.tb-dropdown, .tb-toggle-btn').removeClass('active');
    });
    $('.tb-toggle-cross-btn').on('click', function() {
      $(this).parents('.tb-toggle-body').find('.tb-toggle-btn, .tb-dropdown').removeClass('active');
    })
    $(document).on("click", function() {
      $(".tb-dropdown").removeClass("active").siblings().removeClass("active");
    });
    $(".tb-dropdown, .tb-toggle-btn").on("click", function(e) {
      e.stopPropagation();
    });

    $('.tb-toggle-cross').on('click', function() {
      $(this).parents('.tb-dropdown').removeClass('active').siblings('.tb-toggle-btn').removeClass('active');
    })
    // Star Toggle Btn
    $('.tb-get-star, .tb-mobile-toggle-btn').on('click', function() {
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
    $('.tb-sticky-footer').parents('.tb-content').append('<div class="tb-height-b40 tb-height-lg-b0"></div>');
  }


})(jQuery); // End of use strict
