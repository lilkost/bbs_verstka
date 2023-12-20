if(document.querySelector('.header__time')) {
    let time = document.querySelector('.header__time');

    let spanDesktop = document.createElement('span');
    let spanMobile = document.createElement('span');

    spanDesktop.classList.add('text-desktop');
    spanMobile.classList.add('text-mobile'); 

    spanMobile.textContent = time.getAttribute('data-resize-text');
    spanDesktop.textContent = time.textContent;

    time.textContent = '';
    time.appendChild(spanMobile)
    time.appendChild(spanDesktop)
}

if(document.querySelector('.register')) {
    let btnLk = document.querySelector('.register-top__btn');

    let spanDesktop = document.createElement('span');
    let spanMobile = document.createElement('span');

    spanDesktop.classList.add('text-desktop');
    spanMobile.classList.add('text-mobile'); 

    spanDesktop.textContent = btnLk.textContent;
    spanMobile.textContent = btnLk.getAttribute('data-resize-text');
    
    btnLk.textContent = ''
    btnLk.appendChild(spanDesktop);
    btnLk.appendChild(spanMobile);
}

if(document.querySelector('.formalization-sidebar')) {
    const items = document.querySelectorAll('.formalization-sidebar__item');

    items.forEach(item=> {
        if(item.dataset.resizetext){
            let spanDesktop = document.createElement('span');
            let spanMobile = document.createElement('span');
            
            spanDesktop.classList.add('text-desktop');
            spanMobile.classList.add('text-mobile');

            spanDesktop.innerHTML = item.querySelector('p').textContent;
            spanMobile.innerHTML = item.getAttribute('data-resizetext');

            item.querySelector('p').textContent = ''
            item.querySelector('p').appendChild(spanDesktop)
            item.querySelector('p').appendChild(spanMobile)
        }
    });

}