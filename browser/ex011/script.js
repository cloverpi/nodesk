let uName = prompt('Enter your name');
let uPass = prompt('Enter your super secret password');

alert(`Hello ${uName}`);

const greet = function() {
	if (confirm('Yo, still there dawg?')) {
		alert("You're still logged in my dude");
	} else {
		alert("You've been logged out dawg");
		clearInterval(blah);
	}
}

var blah = setInterval(greet, 15000);


