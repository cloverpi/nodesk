//szThings = 'yoDawg'

function clickHandler() {
	//console.log(this)		// this is the button that we clicked
	this.style.backgroundColor = 'black';
	//console.log(yo);
}

function dblclickHandler() {
	this.style.backgroundColor = 'red';
}

function DoStuff() {
	window.alert('Yo dawg, I\'m doing stuff');
}


window.onload = function() {
	const button = document.querySelector('button');
	button.addEventListener('click', clickHandler);
	//button.addEventListener('click', function() { clickHandler('yodawg')}, true);

	button.addEventListener('dblclick', dblclickHandler);

}

