let body = document.querySelector("body")
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  body.classList.toggle("stop");
})

const swiper = new Swiper('.services-sliders', {
    navigation: {
      nextEl: '.services .swiper-next',
      prevEl: '.services .swiper-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 50,
      },
      375: {
        spaceBetween: 20,
      },
      1440: {
        spaceBetween: 75,
      }
    }
  });


  const swiperTwo = new Swiper('.reviews-slider', {
    navigation: {
      nextEl: '.reviews .swiper-next',
      prevEl: '.reviews .swiper-prev',
    },
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 27
      },
      1440: {
        spaceBetween: 45
      }
    }
  });

  //   // Optional parameters
  //   direction: 'vertical',
  //   slidesPerView: 1,
  //   // If we need pagination
  //   pagination: {
  //     el: '.control .swiper-pagination',
  //     clickable: true,
  //     renderBullet: function(index, className) {
  //       return '\
  //         <div class="box ' + className + '">\
  //         <div class="bigNumber">' + (index < 10 ? '0' + (index + 1) : (index + 1)) + '</div>\
  //         <div class="text">' + (menus[index]) + '</div>\
  //         </div>';
  //     },
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.control .swiper-button-next',
  //     prevEl: '.control .swiper-button-prev',
  //   },
  // });

var menus = ['Круглосуточный контроль', 'СМС уведомление', 'Оперативное реагирование', 'Личный кабинет', 'Мобильное приложение Android', 'Мобильное приложение IPhone']

  window.onload = function() {
    var mySwiper = new Swiper('.control-sliders', {
      loop: true,
      direction: 'vertical',
      slidesPerView: 1,
      pagination: {
        el: '.control .swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return '\
            <div class="box ' + className + '">\
            <div class="bigNumber">' + (index < 10 ) + '</div>\
            <div class="text">' + (menus[index]) + '</div>\
            </div>';
        },
      },
      navigation: {
        nextEl: '.control .control-arrow-next',
        prevEl: '.control .control-arrow-prev',
      }
    })
  };