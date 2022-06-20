function welcome() {
	alert('Welcome to the Product Catalog!');
	window.location.href='katalog.html';
}

function diskon() {
	nama = prompt('Can you tell me what your name is?');
	nohp = prompt('Can you inform your mobile phone number?');

	alert('Congratulations ' + nama + " You get a 75% voucher!" + 'Voucher Code will be sent to the number : ' + nohp + "");
}