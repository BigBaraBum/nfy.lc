function menu_open() {
  jQuery("#nav-icon").toggleClass("open");
  jQuery(".left_menu_wrap").toggleClass("open");
  jQuery("html").toggleClass("menu_is_open");
}

jQuery(document).ready(function () {
  jQuery(".hero_banner").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false
  });

  jQuery(".teste_scroll").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false
        }
      }
    ]
  });
});


/*wow = new WOW(
  {
    boxClass: 'wow',
		offset: 100,
		mobile: true,
		live: true
	}
  )
  wow.init();*/

jQuery("document").ready(function ($) {
  jQuery("select").niceSelect();
  //if(jQuery(window).width() > 991)  {

  $(".toggle-button").on("change", function (){
    if($(".toggle-button").is(":checked")){
      //withdraw
      $("#deposit-scrollbox").addClass("hidden");
      $("#deposit-title").addClass("darker-title");
      $("#withdraw-title").removeClass("darker-title");
      $("#deposit-button").addClass("hidden");
      $("#withdraw-button").removeClass("hidden");
    }else{
      //deposit
      $("#deposit-title").removeClass("darker-title");
      $("#withdraw-title").addClass("darker-title");
      $("#deposit-button").removeClass("hidden");
      $("#withdraw-button").addClass("hidden");
      if($(".nice-select li.selected").index() != 1){
        $("#deposit-scrollbox").removeClass("hidden");
      }
    }
  });
  $("#deposit-asset-select").on("change", function () {
    if ($(".toggle-button").is(":checked")) {
      //withdraw
    } else {
      //deposit
      if ($(".nice-select li.selected").index() == 1) {
        $("#ssss1, #ssss2").removeClass("hidden");
        $("#deposit-scrollbox").addClass("hidden");
      } else if ($(".nice-select li.selected").index() == 2) {
        $("#ssss1").addClass("hidden");
        $(".deposit-scroll-bar").removeClass("hidden");
        $("#deposit-scrollbox, #ssss2").removeClass("hidden");
      } else if ($(".nice-select li.selected").index() == 3) {
        $("#ssss2").addClass("hidden");
        $(".deposit-scroll-bar").removeClass("hidden");
        $("#deposit-scrollbox, #ssss2").removeClass("hidden");
      }
    }
  });

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 300) {
      jQuery(".menu-container").addClass("hdr_fix");
      jQuery("header").addClass("header-is-fixed");
      jQuery("body").addClass("header-body-fixed");
    } else {
      jQuery(".menu-container").removeClass("hdr_fix");
      jQuery("body").removeClass("header-body-fixed");
    }
  });

  //}
});
