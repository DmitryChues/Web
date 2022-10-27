document.querySelector('.wrapper').classList.add('loaded');
document.querySelector('.icon-menu').click(function (event) {
	document.querySelector(this).classList.toggle('active');
	document.querySelector('.menu__body').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
});

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();