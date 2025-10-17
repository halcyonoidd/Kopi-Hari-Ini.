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

// Fitur pencarian menu
const searchInput = document.getElementById('menu-search');
const menuCards = document.querySelectorAll('.menu-card');

if (searchInput) {
  searchInput.addEventListener('keyup', function () {
    const keyword = this.value.toLowerCase();

    menuCards.forEach(card => {
      const title = card.querySelector('.menu-card-title').textContent.toLowerCase();
      if (title.includes(keyword)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}


