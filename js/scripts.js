// Javascript is confusing

document.querySelector("body").style.overflow = "auto";
document.querySelector(".header-container").classList.add('scrollFade--visible');
document.querySelector(".header-container").classList.add('scrollFade--animate');
document.querySelector(".header-container").classList.remove('scrollFade--hidden');


var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	// var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		// var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});