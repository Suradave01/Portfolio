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

