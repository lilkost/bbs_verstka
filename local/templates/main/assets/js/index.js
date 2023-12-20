document.addEventListener('DOMContentLoaded', ()=> {
  // wrapper
  let body = document.body,
      header = document.querySelector('.header')
      html = document.documentElement,
      footer = document.querySelector('.footer')
      wrapper = document.querySelector('.wrapper');
  // marquee
  if(document.querySelector('.marquee')) {
    $(function(){
      $('.marquee').marquee({
        //duration in milliseconds of the marquee
        duration: 15000,
        //gap in pixels between the tickers
        gap: 50,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
      });   
    });
  }
  // header fix 
  if(document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const main   = document.querySelector('.main');
    // расчет отступа    
    window.setTimeout(()=> {
      let headerHeight = document.querySelector('.marquee') ? ( header.clientHeight + document.querySelector('.marquee').clientHeight) : header.clientHeight
      main.style.paddingTop = `${headerHeight}px`;
    },1)
    window.addEventListener('resize', ()=> {
      window.setTimeout(()=> {
        headerHeight = document.querySelector('.marquee') ? ( header.clientHeight + document.querySelector('.marquee').clientHeight) : header.clientHeight
        main.style.paddingTop = `${headerHeight}px`;
      },);
    });
    // scroll страницы
    let lastScrollTop = 0;
    window.onscroll = onScroll;
    // направление вверх/вниз
    function onScroll (e) {
      let top = window.pageYOffset,
          topPx

      let height = Math.max( body.scrollHeight, body.offsetHeight, 
          html.clientHeight, html.scrollHeight, html.offsetHeight );
      
      if (lastScrollTop > top) {
        header.style.top = '0px'
        if(scrollY < 30) {
          if(document.querySelector('.marquee')) {
            header.style.top = document.querySelector('.marquee').clientHeight + 'px'
          }
          else {
            header.style.top = '0px'
          }
        }
        document.querySelector('.header__row_bottom').style.borderRadius = '20px';
      } 
      else if (lastScrollTop < top) {
        // bottom
        if(document.querySelector('.marquee')) {
          if(window.innerWidth > 480){
            topPx = (
              Number(getComputedStyle(header).marginTop.replace('px', '')) +
              Number(getComputedStyle(document.querySelector('.haeder__row_top')).height.replace('px', '')) +
              document.querySelector('.marquee').clientHeight
            );
          }
          else {
            topPx = (
              Number(getComputedStyle(document.querySelector('.haeder__row_top')).height.replace('px', '')) +
              (Number(getComputedStyle(document.querySelector('.header__row_bottom')).marginTop.replace('px', '')) * 2)
            );
          }
        }
        else {
          topPx = (
            Number(getComputedStyle(header).paddingTop.replace('px', '')) +
            Number(getComputedStyle(document.querySelector('.header__row_bottom')).marginTop.replace('px', '')) +
            document.querySelector('.haeder__row_top').clientHeight 
          );
        }
        header.style.top = (topPx * -1) + 'px';
        document.querySelector('.header__row_bottom').style.borderRadius = '0px 0px 20px 20px'
      }
                        
      if(scrollY > (height - footer.clientHeight - 150)){
        header.classList.add('top-hidden')
      }
      else {
        header.classList.remove('top-hidden')
      }

      lastScrollTop = top;
    }
  }
  // header burger 
  if(document.querySelector('.header__burger')) {
    const headerBurger = document.querySelector('.header__burger');
    const headerCatalog = document.querySelector('.header-catalog');
    const headerCatalogClose = document.querySelector('.header-catalog__close');
    
    // open
    headerBurger.addEventListener('click', ()=> {
      headerCatalog.style.top = '0px';
      
      window.setTimeout(()=> {
        body.style.paddingRight = (window.innerWidth - body.clientWidth) + 'px';
        body.style.overflow = 'hidden'
      },200)
    });
    // close

    headerCatalogClose.addEventListener('click', ()=> {
      body.style.paddingRight = '';
      body.style.overflow = ''

      headerCatalog.style.top = '-200svh';
    });
  }
  // Fancybox
  if(document.querySelector('[data-fancybox="gallery"]')) {
    Fancybox.bind('[data-fancybox="gallery"]');
  }  
  if(document.querySelector('[data-fancybox]')) {
    Fancybox.bind('[data-fancybox]');
  }
  // catalog counter
  if(document.querySelector('.catalog__item-buttons')) {
    const btnParentList = document.querySelectorAll('.catalog__item-buttons');

    btnParentList.forEach(element=> {
      let plus   = element.querySelector('.count__btn-plus');
      let minus  = element.querySelector('.count__btn-minus');
      let number = element.querySelector('.count__number');

      plus.addEventListener('click', ()=> {
        number.innerHTML = Number(number.innerHTML) + 1;
      });

      minus.addEventListener('click', ()=> {
        if(Number(number.innerHTML) >0) {
          number.innerHTML = Number(number.innerHTML) - 1;
        }
      })
    });
  }
  // btn favorites
  if(document.querySelector('.btn-favorites')) {
    const btnsFavorites = document.querySelectorAll('.btn-favorites');

    btnsFavorites.forEach(btn=> {
      btn.addEventListener('click', ()=> {
        btn.classList.toggle('add-favorites');
      })
    });
  }
  if(document.querySelector('.product__btn-favorites')){
    const btnFavoritesDetail = document.querySelector('.product__btn-favorites');

    btnFavoritesDetail.addEventListener('click', ()=> {
      btnFavoritesDetail.classList.toggle('add-favorites')
    });
  }
  // view mode catalog
  if(document.querySelector('.catalog__filters-view-btn')) {
    const btnViewMode = document.querySelectorAll('.catalog__filters-view-btn');
    const catalogList = document.querySelector('.catalog__list');

    btnViewMode.forEach(btn=> {
      btn.addEventListener('click', ()=>{
        if(btn.getAttribute('data-view-mode') == 'cube') {
          catalogList.classList.remove('catalog__list_line');
        }
        else if(btn.getAttribute('data-view-mode') == 'line') {
          catalogList.classList.add('catalog__list_line')
        }
       });
    });
  }
  // btn basket add basket 
  // if(document.querySelector('.basket-btn')) {
  //   const btnBasket = document.querySelectorAll('.basket-btn');
  //   btnBasket.forEach(btn=> {
  //     btn.addEventListener('click', ()=> {
  //       btn.classList.add('add-basket');
  //       let count = btn.parentElement.querySelector('.count__number').innerHTML
  //       btn.querySelector('span').innerHTML = `В корзине ${Number(count) == 0 ? 1 : count}`;
  //     });
  //   })
  // }
  // remove item basket
  if(document.querySelector('.basket__item')) {
    const btnsClose = document.querySelectorAll('.basket__item');
    
    btnsClose.forEach(item=> {
      item.querySelector('.basket__item-close').addEventListener('click', ()=> {
        window.setTimeout(()=> {
          item.style.transform = 'rotateX(90deg)'
        }, 200);
        window.setTimeout(()=> {
          item.style.opacity = '0'
        }, 250);
        window.setTimeout(()=> {
          item.style.height = '0';
          item.remove();
        }, 550);
      });
    });
  }
  function toggleClassAccordion (parent, elem) {
    parent.forEach(item=> {
      item.querySelector(elem).addEventListener('click', ()=> {
        item.classList.toggle('accordion-open');
      });
    });
  }
  // accordion 
  if(document.querySelector('.answers__accordion')) {
    const accordions = document.querySelectorAll('.answers__accordion');
    toggleClassAccordion (accordions, '.answers__accordion-top');
  }
  // accordion
  if(document.querySelector('.vacancies__accordion')) {
    const accordions = document.querySelectorAll('.vacancies__accordion');
    toggleClassAccordion (accordions, '.vacancies__accordion-top');
  }
  // modal
  function openAnimateModal(modal) {
    window.setTimeout(()=> {
      modal.style.opacity = 1;
      modal.style.zIndex = '103'
    }, 200);
    window.setTimeout(()=> {
      modal.style.transform = 'translate(-50%, -50%)'
    }, 300);
    window.setTimeout(()=> {
      modal.style.transform = 'translate(-50%, -50%) scale(1)'
    },350);
  }
  function closeAnimateModal(modal,wrapper){
    window.setTimeout(()=> {
      modal.style.transform = 'translate(-50%, -50%) scale(0.9)';
    },200);
    window.setTimeout(()=> {
      modal.style.transform = 'translate(-50%, -45%) scale(0.9)';
    },300);
    window.setTimeout(()=> {
      modal.style.opacity = '0';
      modal.style.zIndex = '-1';
      wrapper.classList.remove('wrapper_bg');
    },350);
  }
  // modal vacancies
  if(document.querySelector('.vacancies__accordion-body-btn')){
    const btnOpenModal = document.querySelectorAll('.vacancies__accordion-body-btn');
    const modal = document.querySelector('.vacancies-modal');
    const modalCloseBtn = document.querySelector('.vacancies-modal__btn-close');
    const inputPosition = document.querySelector('#input-position');

    btnOpenModal.forEach(btn=> {
      btn.addEventListener('click', ()=> {
        wrapper.classList.add("wrapper_bg");
        
        let text = (btn.closest('.vacancies__accordion').querySelector('.vacancies__accordion-title').innerHTML).trim();
        inputPosition.value = text;

        openAnimateModal(modal);
      });
    });
    
    modalCloseBtn.addEventListener('click', ()=> {
      closeAnimateModal(modal,wrapper);
    });
  }
  // phone-input
  if(document.querySelector('#phone-input')) {
    const input = document.querySelector('#phone-input');
    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(input, maskOptions);
  }
  // modal personal area
  if(document.querySelector('.btn-personal-area')) {
    const btnModal = document.querySelectorAll('.btn-personal-area');
    const modal = document.querySelector('.register-modal');
    const btnCloseBtn = document.querySelector('.register-modal__btn-close');

    btnModal.forEach(btn=> {
      btn.addEventListener('click', ()=> {
        wrapper.classList.add('wrapper_bg')
        openAnimateModal(modal)
      });
    })

    btnCloseBtn.addEventListener('click',()=> {
      closeAnimateModal(modal,wrapper)
    });
  }
  // ИИН input
  if(document.querySelector('#iin')) {
    const input = document.querySelector('#iin')
    const maskOptions = {
      mask: '00000000000'
    };
    const mask = IMask(input, maskOptions);
  }
});