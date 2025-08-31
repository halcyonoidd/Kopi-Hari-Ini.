// Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');

// Ketika menu-bar di klik;
document.querySelector('#menu-bar').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menu-bar');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
