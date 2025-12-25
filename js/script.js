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

// Load Menu dari JSON
let menuData = [];

async function loadMenu() {
    try {
        const response = await fetch('data/menu.json');
        const data = await response.json();
        menuData = data.menu;
        displayMenu(menuData);
    } catch (error) {
        console.error('Error loading menu:', error);
        document.getElementById('menu-container').innerHTML = 
            '<p style="color: red; text-align: center; width: 100%;">Gagal memuat menu. Silakan refresh halaman.</p>';
    }
}

function displayMenu(items) {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';
    
    items.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        menuCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-card-img">
            <h3 class="menu-card-title">-${item.name}-</h3>
            <p class="menu-card-price">IDR ${formatPrice(item.price)}</p>
        `;
        menuContainer.appendChild(menuCard);
    });
}

function formatPrice(price) {
    return (price / 1000) + 'K';
}

// Fitur pencarian menu
const searchInput = document.getElementById('menu-search');

if (searchInput) {
    searchInput.addEventListener('keyup', function () {
        const keyword = this.value.toLowerCase();
        
        const filteredMenu = menuData.filter(item => 
            item.name.toLowerCase().includes(keyword) || 
            item.description.toLowerCase().includes(keyword)
        );
        
        displayMenu(filteredMenu);
    });
}

// Load menu saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadMenu);


