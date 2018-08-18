window.onload = function() {
	const dalist = document.querySelector('#dalist');


	dalist.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>'
	console.log(dalist.innerHTML);
	
	console.log('look at my chillens, yo');
	console.log(dalist.children);
}


function addMOAR(){
	const blah = document.querySelector('li');
	
	console.log(blah.innerText);
	blah.innerText = 'hey there';
	
	dalist.innerHTML = dalist.innerHTML + '<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>'
}