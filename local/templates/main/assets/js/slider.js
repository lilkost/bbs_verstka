if(document.querySelector('.slider-top__slider')){
  const sliderTop = new Swiper('.slider-top__slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.slider-top__pagination',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.slider-top__btn_next',
      prevEl: '.slider-top__btn_prev',
    },
  });
}

if(document.querySelector('.home-news-slider')) {
  const newsHomeSlider = new Swiper('.home-news-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween:30,
    // Navigation arrows
    navigation: {
      nextEl: '.home-news-slider__btn_next',
      prevEl: '.home-news-slider__btn_prev',
    },
    // padination
    pagination: {
      el: '.home-news__padination'
    },
    // breakpoints
    breakpoints:{
      993: {
        slidesPerView:3,
      }, 
      992:{
        slidesPerView: 2.39,
        spaceBetween: 20,
      },
      680:{
        slidesPerView: 2.39,
        spaceBetween: 20,
      },
      568:{
        slidesPerView: 1.5, 
        spaceBetween: 20,
      },
      481: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      480: {
        slidesPerView:1,
        spaceBetween:20
      },
      270: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  
  });
}

if(document.querySelector('.catalog-mount-slider__slider')) {
  const catalogMountSlider = new Swiper('.catalog-mount-slider__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween:40,
    // Navigation arrows
    navigation: {
      nextEl: '.catalog-mount-slider__btn-next',
      prevEl: '.catalog-mount-slider__btn-prev',
    },
    // pagination
    pagination:{
      el:'.catalog-mount-slider__pagination'
    },
    // breakpoints
    breakpoints:{
      1441: {
        spaceBetween: 40,
      },
      993:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
      680:{
        slidesPerView: 2.39,
        spaceBetween: 20,
      },
      568:{
        slidesPerView: 1.5, 
        spaceBetween: 20,
      },
      481: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      480: {
        slidesPerView:1,
        spaceBetween:20
      },
      270: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });
}

if(document.querySelector('.catalog-banner__slider')){
  const sliderTop = new Swiper('.catalog-banner__slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.catalog-banner__pagination',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.catalog-banner__btn_next',
      prevEl: '.catalog-banner__btn_prev',
    },
  });
}

if(document.querySelector('.catalog-recommendations__slider')) {
  const recommendationsSlider = new Swiper('.catalog-recommendations__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween:40,
    // Navigation arrows
    navigation: {
      nextEl: '.catalog-mount-slider__btn-next',
      prevEl: '.catalog-mount-slider__btn-prev',
    },
    // pagination
    pagination:{
      el:'.catalog-recommendations__pagination'
    },
    // breakpoints
    breakpoints:{
      1441: {
        spaceBetween: 40,
      },
      993:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
      680:{
        slidesPerView: 2.39,
        spaceBetween: 20,
      },
      568:{
        slidesPerView: 1.5, 
        spaceBetween: 20,
      },
      481: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      480: {
        slidesPerView:1,
        spaceBetween:20
      },
      270: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });
}

if(document.querySelector('.product__slider-min')) {
  const productDetailMin = new Swiper('.product__slider-min', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 12,
    // Navigation arrows
    navigation: {
      nextEl: '.product__slider-min-btn-next',
      prevEl: '.product__slider-min-btn-prev',
    },
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      481: {
        direction: 'vertical',
        spaceBetween:12
      },
      360: {
        slidesPerView: 4,
      },
      359:{
        slidesPerView: 3.5
      },
      280:{
        direction: 'horizontal',
        spaceBetween: 10
      }
    }
  });
  const productDetailBig = new Swiper('.product__slider-big', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: productDetailMin,
    },
  });
}

if(document.querySelector('.news-slider')) {
  const recommendationsSlider = new Swiper('.news-slider__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween:40,
    // Navigation arrows
    navigation: {
      nextEl: '.news-slider__btn_next',
      prevEl: '.news-slider__btn_prev',
    },
    // pagination
    pagination:{
      el: '.news-slider__pagination'
    },
    // breakpoints
    breakpoints: {
      993:{
        spaceBetween: 40,
      },
      992:{
        slidesPerView: 2.39,
        spaceBetween: 20,
      },
      680:{
        slidesPerView: 2.39,
        spaceBetween: 20,
      },
      568:{
        slidesPerView: 1.5, 
        spaceBetween: 20,
      },
      481: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      480: {
        slidesPerView:1,
        spaceBetween:20
      },
      270: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  
  });
}

if(document.querySelector('.license__list')) {
  function sliderActiveAndDisabled() {
    if(window.innerWidth > 680){
      licenseList.destroy();
      document.querySelector('.license__list .swiper-wrapper').classList.add('flex-col')
    }
    else {
      document.querySelector('.license__list .swiper-wrapper').classList.remove('flex-col')
      const licenseList = new Swiper('.license__list', {
        direction: 'horizontal',
        slidesPerView: 1, 
        spaceBetween:10,
        pagination: {
          el: '.license__pagination',
          clickable: true
        },
        autoHeight: true,
        effect: 'creative',
        creativeEffect: {
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
          },
          next: {
            // will set `translateX(100%)` on next slides
            translate: ['100%', 0, 0],
          },
        }
      });
    }
  }

  sliderActiveAndDisabled();

  window.addEventListener('resize', ()=> {
    sliderActiveAndDisabled();
  });

}

if(document.querySelector('.comand__list-user')) {
  const lists = document.querySelectorAll('.comand__list-user');

  function sliderActiveAndDisabled() {
    if(window.innerWidth < 992){
      lists.forEach(list=>{
        list.querySelector('.swiper-wrapper').classList.remove('grid-col');
        const comandList = new Swiper(list, {
          direction: 'horizontal',
          slidesPerView: 3.01, 
          spaceBetween:20,
          pagination: {
            el: list.querySelector('.comand__list-user-pagination'),
          },
          breakpoints: {
            881:{
              slidesPerView: 3.01
            }, 
            740: {
              slidesPerView: 2.5,
            },
            568:{
              slidesPerView: 2.01
            },
            480:{
              slidesPerView: 1.7
            },
            340: {
              slidesPerView: 1.2
            }, 
            280: {
              slidesPerView: 1
            }
          }
        });
      });
    }
    else {
      comandList.destroy();
      lists.forEach(list=> {
        list.querySelector('.swiper-wrapper').classList.add('grid-col');
      });
    }
  }

  sliderActiveAndDisabled();

  window.addEventListener('resize', ()=> {
    sliderActiveAndDisabled();
  });
}

if(document.querySelector('.formalization-content__slider')) {
  const formalizationSlider = new Swiper('.formalization-content__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'fade',
    autoHeight: true,
    grabCursor: false,
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    spaceBetween:1,
    // Navigation arrows
    navigation: {
      nextEl: '.formalization__next-btn',
      prevEl: '.formalization__prev-btn ',
    },
  });

  const slidesLength = document.querySelectorAll('.step').length,
        btnSubmit = document.querySelector('.formalization__submit'),
        commercialOfferInner = document.querySelector('.commercial-offer__inner'),
        sidebar = document.querySelector('.formalization-sidebar');

  let titleParentCount = document.querySelector('.formalization__title span');

  titleParentCount.innerHTML = `${formalizationSlider.activeIndex + 1}/${slidesLength}`

  if(formalizationSlider.activeIndex === 0) {
    sidebar.classList.add('sidebar-hidden-992');
  }
  else {
    sidebar.classList.remove('sidebar-hidden-992');
  }

  formalizationSlider.on('slideChange', ()=> {
    titleParentCount.innerHTML = `${formalizationSlider.activeIndex + 1}/${slidesLength}`

    if(formalizationSlider.activeIndex+1 === slidesLength) {
      btnSubmit.style.display = 'flex';

      if(commercialOfferInner) {
        commercialOfferInner.classList.add('col-one');
        sidebar.classList.add('sidebar-disabled');
      }
    }
    else {
      btnSubmit.style.display = 'none';
    
      if(commercialOfferInner) {
        commercialOfferInner.classList.remove('col-one');
        sidebar.classList.remove('sidebar-disabled');
      }
    }

    if(formalizationSlider.activeIndex === 0) {
      sidebar.classList.add('sidebar-hidden-992');
    }
    else {
      sidebar.classList.remove('sidebar-hidden-992');
    }
  });
}