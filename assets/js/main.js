// $(".slick-slider").slick({
//   dots: true,
//   // infinite: true,
//   speed: 300,
//   autoplay: true,
//   rtl: true,
//   autoplaySpeed: 1000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });

$(".slick-slider2").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerMode: true,
  // cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".team-swiper").slick({
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',

  // cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// let swiperInstance;
// function initSwiperIfDesktop() {
//   const isDesktop = window.innerWidth >= 992;
//     // console.log(swiperInstance)
//   if (isDesktop && !swiperInstance) {
//  swiperInstance = new Swiper(".team-swiper", {
//         direction: "horizontal",
//         loop: false,
//         speed: 800, // 800ms = 0.8 seconds
//         slidesPerView: 4,
//         // spaceBetween: 10,
//         navigation:true,
//         effect: "material",

//       });
//   } else if (!isDesktop && swiperInstance) {
//     console.log($(".swiper-wrapper .col-md-3"));
//     swiperInstance.destroy(true, true);
//     swiperInstance = undefined;
//   }else{
//     $(".swiper-wrapper .col-md-3").each(function(){
//         $(this).removeClass('swiper-slide')
//     });
//   }
// }

// window.addEventListener('load', initSwiperIfDesktop);
// window.addEventListener('resize', initSwiperIfDesktop);

// let Swiperrr = new Swiper(".team-swiper", {
//   spaceBetween: 0,
//   slidesPerView: 4,
//   group:1,
//   slidesPerGroup: 4,
//   slidesRows: 1,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next2",
//     prevEl: ".swiper-button-prev2",
//   },

// });

// Swip[er End]

const slideTitles = [];
document.querySelectorAll(".swiper-slide").forEach((slide) => {
  slideTitles.push(slide.getAttribute("data-title"));
  const bg = slide.getAttribute("data-image");
  slide.style.backgroundImage = `url('${bg}')`;
});

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  lazy: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><span class="buttet-text">${slideTitles[index]}</span></span>`;
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      // Remove animation classes from all slides
      document.querySelectorAll(".swiper-slide").forEach((slide) => {
        // console.log(slide);
        slide.querySelectorAll(".animate__animated").forEach((el) => {
          el.classList.remove(
            "animate__animated",
            "animate__fadeInDown",
            "animate__fadeInUp"
          );
        });
      });

      // Add animation classes to the active slide
      const activeSlide = this.slides[this.activeIndex];

      if (activeSlide) {
        activeSlide.querySelectorAll("h1").forEach((el) => {
          console.log(el);
          // console.log(activeSlide.getAttribute("data-title"));
          el.classList.add("animate__animated", "animate__fadeInDown");
        });

        activeSlide.querySelectorAll("p").forEach((el) => {
          el.classList.add("animate__animated", "animate__fadeInUp");
          console.log(el.getAttribute("style"));
        });
      }
    },
  },
});

// jQuery

// $(window).on("scroll", function () {
//   const header = $("#navbarchange");
//   const targetSection = $("#division");
//   const logo = $("#logo");

//   if (targetSection.length) {
//     const sectionTop = targetSection.offset().top;
    
//     if ($(window).scrollTop() + 400 >= sectionTop) {
//       header.addClass("fixed ").removeClass("position-absolute");
//       // how to change the logo src
//       console.log(logo.attr("src"));
//       logo.attr("src", "assets/images/logo-black.png");
//       $("#mobile-logo").attr("src", "assets/images/logo-black.png");
//       if (window.location.pathname.includes("product_detail")){
//         header.find("ul li a").css("color", "#000");
//       }
//       header.find("ul.bordered").css("border-color", "#000");
//       header.find(".btn-main").addClass("btn-black");
//       header.find(".line").css("stroke", "#000");

//     } else {
//       header.removeClass("fixed ").addClass("position-absolute");
//       logo.attr("src", "assets/images/logo-black.png");
//       $("#mobile-logo").attr("src", "assets/images/logo-black.png");

//       // header.find("ul li a.nav-link").css("color", "#000");
//       header.find(".line").css("stroke", "#fff");
//       header.find("ul.bordered").css("border-color", "#fff");
//       header.find(".btn-main").removeClass("btn-black");
//     }
//   }else{
//     if ($(window).scrollTop() >= 200) {
//       header.addClass("fixed ").removeClass("position-absolute");
//       // how to change the logo src
//       console.log(logo.attr("src"));
//       logo.attr("src", "assets/images/logo-black.png");
//       $("#mobile-logo").attr("src", "assets/images/logo-black.png");
//       // if (!window.location.pathname.includes("product")){
//         header.find("ul li a").css("color", "#000");
//       // }
//       header.find("ul.bordered").css("border-color", "#000");
//       header.find(".btn-main").addClass("btn-black");
//       header.find(".line").css("stroke", "#000");

//     } else {
//       header.removeClass("fixed ").addClass("position-absolute");
//       logo.attr("src", "assets/images/logo-black.png");
//       $("#mobile-logo").attr("src", "assets/images/logo-black.png");

//      if (window.location.pathname.includes("product_detail")){
//       // alert("d")
//         header.find("ul li a").css("color", "#fff");
//       }
      
//       header.find(".line").css("stroke", "#fff");
//       header.find("ul.bordered").css("border-color", "#fff");
//       header.find(".btn-main").removeClass("btn-black");
      
//     }
//   }
  
// });

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  if (window.location.pathname.includes("product_detail")) {
    navLinks.forEach(link => {
      link.style.color = "white";
    });
  }
});

$(document).ready(function () {
  var counted = false;
  if (window.location.pathname.includes("product_detail")) {


  }
  $(window).scroll(function () {
    if($('.counter-number').length){
    var oTop = $('.counter-number').offset().top - window.innerHeight;
    console.log(oTop,$(window).scrollTop());
    if (!counted && $(window).scrollTop() > oTop) {
      $('.counter-number').each(function () {
        // alert("h")
        var $this = $(this),
            countTo = parseInt($this.text(), 10);

        $({ countNum: $this.text() }).animate(
          { countNum: countTo },
          {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum)+'+');
            },
            complete: function () {
              $this.text(this.countNum+'+');
            }
          }
        );
      });
      counted = true;
    }
  }
  });
});


$("#resumeModalbtn").on("click",function () {
  $("#resumeModal").modal("show");
});

$(".resumeModalclose,#resumeModalclose").on("click",function () {
  $("#resumeModal").modal("hide");
});




