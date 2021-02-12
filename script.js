let navbar = document.querySelector('#navbar-menu');
let headLogo = document.querySelector('#main-logo-menu');
let buttonMenu = document.querySelector('#button-menu');

buttonMenu.addEventListener('click', menuBar);


function menuBar() {
  navbar.classList.toggle('open-menu');
  headLogo.classList.toggle('open-menu');
}