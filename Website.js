
const navbar = document.querySelector('.nav-bar');
window.onscroll = () => {
    if (window.scrollY > 900) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

