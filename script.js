const navMenu = document.querySelector('.nav-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const listItems = document.querySelectorAll('ul.nav-menu > li');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const formMessage = document.getElementById('message');
const form = document.getElementById('form');
const submitButton = document.getElementById('submit-button');
const errorElement = document.getElementById('error');

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

// ==== JS form validation ====

form.addEventListener('submit', (e) => {
  const messages = [];

  if (formName.value.trim() === '' || formName.value.trim() === null) {
    messages.push('Name is required!!!');
  }
  if (/[A-Z]/.test(formEmail.value.trim())) {
    messages.push('Emails should be in LowerCase');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});

function createLocalStorage() {
  const myObject = {
    name: formName.value,
    email: formEmail.value,
    message: formMessage.value,
  };

  const myObjectSerialized = JSON.stringify(myObject);

  localStorage.setItem('myObject', myObjectSerialized);

  const myObjectDeSerialized = JSON.parse(localStorage.getItem('myObject'));

  if (myObjectDeSerialized) {
    formName.value = myObjectDeSerialized.name;
    formEmail.value = myObjectDeSerialized.email;
    formMessage.value = myObjectDeSerialized.message;
  } else {
    formName.value = '';
    formEmail.value = '';
    formMessage.value = '';
  }
}

submitButton.addEventListener('click', createLocalStorage);
