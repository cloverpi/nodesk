


const form = document.querySelector('form');
form.onsubmit = function() {
	//console.log('yodawg');
	let email = document.getElementById('email').value;
	let pass = document.getElementById('pass').value;
	
	
	const validateEmail = function(email) {
		// this is a simple email validation regex
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
		// this text method will return a true/false value depending if the string matches the regex or not
		return emailRegex.test(email);
	}
	
	if (pass.length != 0 && email.length != 0  && validateEmail(email) ){
		alert(email + " " + pass);
		return true;
	}
	
	document.getElementById('errordiv').innerText = "You PHAIL TRY AGAIN";
	return false;
}




window.onload = function() {


}

