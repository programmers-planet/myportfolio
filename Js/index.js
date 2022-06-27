//===typing Js start====== //
var typed = new Typed('.type', {
  strings: ['MEHRAB HOSSAIN', 'A WEB DESIGNER', 'A FRONT-END  DEVELOPER'],
  typeSpeed: 40,
  backSpeed: 80,
  smartBackspace: true,
  cursorChar: '<i class="fas fa-mouse-pointer"></i>',
  loop: true,

});
//===typing Js stop====== //

//=====slider js start======//
$('.slick').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplayspeed: 2000,
  draggable: true,
  pauseOnHover: false,
  speed: 1400,

  // adaptiveHeight: true


});
//=====slider js stop======//

//=======pre Loader js start======//
var loader = document.querySelector(".loader")
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disspear");
};

//=======pre Loader js stop======//
//=====Nav Bar js start======//
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.topnav').addClass("sticky");
    } else {
      $('.topnav').removeClass("sticky");
    }
  })
});
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('#header').addClass("sticky");
    } else {
      $('#header').removeClass("sticky");
    }
  })
});
//=====Nav Bar js stop======//
//counting js//
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});