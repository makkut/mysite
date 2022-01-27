let btnUp = document.querySelector('.btnUp');
// let menuBtn = document.querySelector('.menu-btn');
// let menuList = document.querySelector('.menu-list');

// menuBtn.addEventListener('click', function(){
// 	menuList.classList.toggle('menu-btn-open');
// })

btnUp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', function () {
    let pos = window.pageYOffset;

    if (pos > window.innerHeight / 2) {
        btnUp.classList.add('btnUp-open');
    } else {
        btnUp.classList.remove('btnUp-open');
    }
});
