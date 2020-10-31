const links = document.querySelectorAll('.nav-link');

for (const link of links) {
    link.addEventListener('click', ScrollTo);
}

function ScrollTo(e) {
    e.preventDefault();

    const checkDesktop = window.matchMedia('screen and (min-width: 992px)');

    if (!checkDesktop.matches) {
        document.querySelector('.navbar-toggler').click();
    }

    var clicked = document.querySelector('.active');
    if (clicked !== null) {
        clicked.classList.remove('active');
    }
    e.target.className += ' active';

    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - document.querySelector('.navbar').scrollHeight;

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}

topButton = document.querySelector('.back-to-top');

window.onscroll = function () { scrolling() };

function scrolling() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function toTop() {
    scroll({
        top: 0,
        behavior: 'smooth'
    });
}