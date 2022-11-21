const navMenu = document.querySelector('.nav-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const listItems = document.querySelectorAll('ul.nav-menu > li');

function show() {
  navMenu.style.display = 'flex';
  navMenu.style.top = '0';
  closeMenu.style.display = 'block';
  openMenu.style.display = 'none';
}

function close() {
  navMenu.style.top = '-100%';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
listItems.forEach((item) => item.addEventListener('click', close));
