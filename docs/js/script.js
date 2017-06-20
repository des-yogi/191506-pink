var pHeaderNoJs = document.querySelector('.page-header--nojs');
var mainNavNoJs = document.querySelector('.main-nav--nojs');
var mainNavLogoNoJs = document.querySelector('.main-nav__logo--nojs');
var navListNoJs = document.querySelector('.main-nav__list--nojs');
var navToggleOpen = document.querySelector('.main-nav__toggle--open');
var navToggleClosed = document.querySelector('.main-nav__toggle--closed');
var menuToggler = document.querySelector('.main-nav__toggle');


window.addEventListener('DOMContentLoaded', function(event) {

    if(mainNavNoJs.classList.contains('main-nav--nojs')) {
      mainNavNoJs.classList.remove('main-nav--nojs');
    }
    if(pHeaderNoJs.classList.contains('page-header--nojs')) {
      pHeaderNoJs.classList.remove('page-header--nojs');
    }
    if(mainNavLogoNoJs.classList.contains('main-nav__logo--nojs')) {
      mainNavLogoNoJs.classList.remove('main-nav__logo--nojs');
    }
    if(navListNoJs.classList.contains('main-nav__list--nojs')) {
      navListNoJs.classList.remove('main-nav__list--nojs');
    }
    if(navToggleOpen.classList.contains('main-nav__toggle--open')) {
      navToggleOpen.classList.remove('main-nav__toggle--open');
    }
} );

menuToggler.addEventListener("click", function(event) {
  event.preventDefault();
  mainNavNoJs.classList.toggle('main-nav--nojs');
  pHeaderNoJs.classList.toggle('page-header--nojs');
  mainNavLogoNoJs.classList.toggle('main-nav__logo--nojs');
  navListNoJs.classList.toggle('main-nav__list--nojs');
  navToggleOpen.classList.toggle('main-nav__toggle--open');
});

window.addEventListener('keydown', function(event) {
  if(event.keyCode == 27) {
    if(pHeaderNoJs.classList.contains('page-header--nojs')) {
      pHeaderNoJs.classList.remove('page-header--nojs');
    }
    if(mainNavNoJs.classList.contains('main-nav--nojs')) {
      mainNavNoJs.classList.remove('main-nav--nojs');
    }
    if(mainNavLogoNoJs.classList.contains('main-nav__logo--nojs')) {
      mainNavLogoNoJs.classList.remove('main-nav__logo--nojs');
    }
    if(navListNoJs.classList.contains('main-nav__list--nojs')) {
      navListNoJs.classList.remove('main-nav__list--nojs');
    }
    if(navToggleOpen.classList.contains('main-nav__toggle--open')) {
      navToggleOpen.classList.remove('main-nav__toggle--open');
    }
  }
} );
