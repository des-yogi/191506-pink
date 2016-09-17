var link = document.querySelector('.search');
var popup = document.querySelector('.search-form');
var searchField = document.querySelector('#search-row');
// var close = document.querySelector('.close-btn');

link.addEventListener("click", function(event) { 
	event.preventDefault(); 
	popup.classList.add('search-form-show');
	link.classList.add('active');
	searchField.focus();
});

// close.addEventListener("click", function(event) { 
// 	event.preventDefault(); 
// 	popup.classList.remove('write-us-popup-show');
// });
window.addEventListener('keydown', function(event) {
	if(event.keyCode == 27) {
		if(popup.classList.contains('search-form-show')) {
			popup.classList.remove('search-form-show');
		}
		if(link.classList.contains('active')) {
			link.classList.remove('active');
		}
	}
} );

var mainMenuLink = document.querySelector('.main-menu-link');
var subMenuActive = document.querySelector('.sub-menu');
mainMenuLink.addEventListener("click", function(event) { 
	event.preventDefault(); 
	mainMenuLink.classList.add('active');
	subMenuActive.classList.add('active');
});
window.addEventListener('keydown', function(event) {
	if(event.keyCode == 27) {
		if(mainMenuLink.classList.contains('active')) {
			mainMenuLink.classList.remove('active');
		}
		if(subMenuActive.classList.contains('active')) {
			subMenuActive.classList.remove('active');
		}
	}
} );

var enterLink = document.querySelector('.enter');
var enterPopup = document.querySelector('.enter-container');
var loginField = document.querySelector('#login');
enterLink.addEventListener("click", function(event) { 
	event.preventDefault(); 
	enterPopup.classList.add('enter-container-show');
	enterLink.classList.add('active');
	loginField.focus();
});
window.addEventListener('keydown', function(event) {
	if(event.keyCode == 27) {
		if(enterPopup.classList.contains('enter-container-show')) {
			enterPopup.classList.remove('enter-container-show');
		}
		if(enterLink.classList.contains('active')) {
			enterLink.classList.remove('active');
		}
	}
} );

var cartLink = document.querySelector('.cart');
var cartPopup = document.querySelector('.cart-container');
var itemDeleteFirst = document.querySelector('.item-delete-first');
var itemDeleteSecond = document.querySelector('.item-delete-second');
var firstRow = document.querySelector('.first-row');
var secondRow = document.querySelector('.second-row');
cartLink.addEventListener("click", function(event) { 
	event.preventDefault(); 
	cartPopup.classList.add('cart-container-show');
	cartLink.classList.add('active');
});
itemDeleteFirst.addEventListener("click", function(event) { 
	event.preventDefault(); 
	firstRow.classList.add('hide');
});
itemDeleteSecond.addEventListener("click", function(event) { 
	event.preventDefault(); 
	secondRow.classList.add('hide');
});
window.addEventListener('keydown', function(event) {
	if(event.keyCode == 27) {
		if(cartPopup.classList.contains('cart-container-show')) {
			cartPopup.classList.remove('cart-container-show');
		}
		if(cartLink.classList.contains('active')) {
			cartLink.classList.remove('active');
		}
	}
} );

var feedbackLink = document.querySelector('.feedback-btn');
var feedbackPopup = document.querySelector('.feedback-container');
var feedbackOverlay = document.querySelector('.overlay');
var loginFeedback = document.querySelector('.login-feedback');
var closeFormFeedback = document.querySelector('.close');
feedbackLink.addEventListener("click", function(event) { 
	event.preventDefault(); 
	feedbackPopup.classList.add('feedback-container-show');
	feedbackOverlay.classList.add('overlay-show');
	loginFeedback.focus();
});
closeFormFeedback.addEventListener("click", function(event) { 
	event.preventDefault(); 
	feedbackPopup.classList.remove('feedback-container-show');
	feedbackOverlay.classList.remove('overlay-show');
});
window.addEventListener('keydown', function(event) {
	if(event.keyCode == 27) {
		if(feedbackPopup.classList.contains('feedback-container-show')) {
			feedbackPopup.classList.remove('feedback-container-show');
		}
		if(feedbackOverlay.classList.contains('overlay-show')) {
			feedbackOverlay.classList.remove('overlay-show');
		}
	}
} );