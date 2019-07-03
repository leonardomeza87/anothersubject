var menu = document.getElementById('menu');
var marge = document.getElementById('marge');
var altura = menu.offsetTop + 110;
window.addEventListener('scroll', function() {
    'use strick';
    if (window.pageYOffset > altura) {
        menu.classList.add('fixed');
        marge.classList.add('marge');
    } else {
        menu.classList.remove('fixed');
        marge.classList.remove('marge');
    }
    if ((window.pageYOffset > altura + 160)) {
        menu.classList.add('hc');
    } else {
        menu.classList.remove('hc');
    }
});