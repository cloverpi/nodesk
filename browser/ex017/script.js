window.onload = function() {
	
	let colorChoice = prompt('Please enter blue, green or red');
	console.log(colorChoice);

	let ahref = document.querySelectorAll('.menu');
	
	console.log(ahref[0].classList);
	ahref[0].classList.add(colorChoice);
	
	
	console.log(ahref[0]);
	
	console.log(ahref[0].href);
	console.log(ahref[0].className);
}


function makeColor(col){
	
	let ahref = document.querySelectorAll('.menu');
	
	ahref.forEach(function (elementy) {
	
		if (col == 'red') {
			elementy.classList.remove('green');
			elementy.classList.remove('blue');
		} else if (col == 'blue') {
			elementy.classList.remove('red');
			elementy.classList.remove('green');
		} else if (col == 'green') {
			elementy.classList.remove('red');
			elementy.classList.remove('blue');
		}
	
		elementy.classList.toggle(col);
	
	});
}

