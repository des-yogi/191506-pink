var logoNoJs = document.querySelector('.main-nav__logo--nojs');
var navListNoJs = document.querySelector('.main-nav__list--nojs');
var navToggleOpen = document.querySelector('.main-nav__toggle--open');
var navToggleClosed = document.querySelector('.main-nav__toggle--closed');
var menuToggler = document.querySelector('.main-nav__toggle');


window.addEventListener('DOMContentLoaded', function(event) {

    if(logoNoJs.classList.contains('main-nav__logo--nojs')) {
      logoNoJs.classList.remove('main-nav__logo--nojs');
    }
    if(navListNoJs.classList.contains('main-nav__list--nojs')) {
      navListNoJs.classList.remove('main-nav__list--nojs');
    }
    if(navToggleOpen.classList.contains('main-nav__toggle--open')) {
      navToggleOpen.classList.remove('main-nav__toggle--open');
      //navToggleClosed.classList.add('main-nav__toggle--closed');
    }
} );

menuToggler.addEventListener("click", function(event) {
  event.preventDefault();
  logoNoJs.classList.toggle('main-nav__logo--nojs');
  navListNoJs.classList.toggle('main-nav__list--nojs');
  navToggleOpen.classList.toggle('main-nav__toggle--open');
});

window.addEventListener('keydown', function(event) {
  if(event.keyCode == 27) {
    if(logoNoJs.classList.contains('main-nav__logo--nojs')) {
      logoNoJs.classList.remove('main-nav__logo--nojs');
    }
    if(navListNoJs.classList.contains('main-nav__list--nojs')) {
      navListNoJs.classList.remove('main-nav__list--nojs');
    }
    if(navToggleOpen.classList.contains('main-nav__toggle--open')) {
      navToggleOpen.classList.remove('main-nav__toggle--open');
    }
  }
} );
