function exPotato(veggie) {
	let liItem = document.createElement("li");
	liItem.appendChild( document.createTextNode(veggie) )

	
	let ulElement = document.querySelector('ul');
	
	ulElement.insertBefore(liItem, ulElement.children.item(0));
	
}

function ex029() {
	let ulElement = document.querySelector('ul');
	let firstElement;
	let veggies = [];
	
	
	while (ulElement.children.length > 0){
		firstElement = ulElement.children.item(0);
		veggies.push(firstElement);
		
		ulElement.removeChild(firstElement);
	}
	console.log(veggies);
}	


function ex030() {
	let ulElement = document.querySelector('ul');
	let lastElement;
		
	while (ulElement.children.length > 0){
		lastElement = ulElement.children.item( ulElement.children.length - 1);
	
		ulElement.removeChild(lastElement);
	}
	
}


function ex031() {
	let ulElement = document.querySelector('ul');
	
	ulElement.innerHTML = '';
}


window.onload = function() {
	//ex031();
	//ex030();
	//ex029();
	exPotato('Tomaco');
	
}


