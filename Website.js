const navbar = document.querySelector('.nav-bar');
const nav1 = document.getElementById('link-1');
const nav2 = document.getElementById('link-2');
const nav3 = document.getElementById('link-3');
const nav4 = document.getElementById('link-4');
const nav5 = document.getElementById('link-5');

window.onscroll = () => {
    if (window.scrollY > 900) {
        navbar.classList.add('nav-active');
    } 
    else {
        navbar.classList.remove('nav-active');
    }
    if ( window.scrollY > 0 && window.scrollY < 900 ) {
        nav1.classList.add('nav-1')
        nav2.classList.remove('nav-2');
        nav3.classList.remove('nav-3');
    }
    else if ( window.scrollY > 900 && window.scrollY < 2000) {
        nav1.classList.remove('nav-1');
        nav2.classList.add('nav-2');
        nav3.classList.remove('nav-3');
    }
    else if ( window.scrollY > 2000 && window.scrollY < 3000 ) {
        nav2.classList.remove('nav-2');
        nav3.classList.add('nav-3');
    }
};


window.onload = pageload;
const btnall = document.getElementById('btnAll');
const btncss = document.getElementById('btnCss');
const btnjava = document.getElementById('btnJava');
function pageload() {
    const ShowAll = document.getElementById('all');
    const ShowCss = document.getElementById('css');
    const ShowJava = document.getElementById('java')

    ShowAll.style.display = 'grid';
    ShowAll.style.transitionDelay = '250ms'
    ShowCss.style.display = 'none';
    ShowJava.style.display = 'none';
}

btnall.addEventListener('click',pageload);



const ShowCssFunC = () => {
    const ShowAll = document.getElementById('all');
    const ShowCss = document.getElementById('css');
    const ShowJava = document.getElementById('java')

    ShowAll.style.display = 'none';
    ShowCss.style.display = 'grid';
    ShowJava.style.display = 'none';
}
btncss.addEventListener('click',ShowCssFunC);

const ShowJava = () => {
    const ShowAll = document.getElementById('all');
    const ShowCss = document.getElementById('css');
    const ShowJava = document.getElementById('java')

    ShowAll.style.display = 'none';
    ShowCss.style.display = 'none';
    ShowJava.style.display = 'grid';
}
btnjava.addEventListener('click',ShowJava);