

const block1 = document.getElementById("First");
const text1 = "Jane Alderson"; //put your text here
let result1 = "";
window.addEventListener("load", () => {
	for (let i = 0; i < text1.length; i++) {
		setTimeout(function () {
			result1 += text1[i];
			block1.innerHTML = result1;
		}, 120 * i);
	}
	setTimeout(function () {
		document.querySelector(".preloader").classList.remove('Fade--visible');
		document.querySelector(".preloader").classList.add('Fade--hidden');
		document.querySelector(".preloader").classList.add('Fade--animate');
		setTimeout(function () {
			document.querySelector("body").style.overflow = "auto";
			document.querySelector(".header-container").classList.add('scrollFade--visible');
			document.querySelector(".header-container").classList.add('scrollFade--animate');
			document.querySelector(".header-container").classList.remove('scrollFade--hidden');
		}, 1000);
	}, 2500);
});


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

		// if (rect.top <= fadeOutPoint) {
		// 	element.classList.remove('scrollFade--visible');
		// 	element.classList.add('scrollFade--hidden');
		// }
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});