function appendThings(parentTag, tag, txt, params) {
	let tmpDOMObj = document.createElement(tag);
	tmpDOMObj.textContent = txt;
	
	//add optional params
	if (params != undefined) {
		Object.keys(params).forEach(function(k) {
			let att = document.createAttribute(k);
			att.value = params[k];
			
			tmpDOMObj.setAttributeNode(att);
		});
	}
	
	parentTag.appendChild(tmpDOMObj);
}


function addObjectstoDOM(arr){
	let divParent = document.body;
	arr.forEach(function(i) {
		///console.log(i.title);
		
		appendThings(divParent, 'H3', i.title);		
		appendThings(divParent, 'b', 'Episode ID: ' + i.episode_id);
		appendThings(divParent, 'br');
		appendThings(divParent, 'i', i.opening_crawl);
		appendThings(divParent, 'br');
		appendThings(divParent, 'span', 'Directed by: ' + i.director);
		appendThings(divParent, 'br');
		appendThings(divParent, 'span', 'Produced by: ' + i.producer);
		
		
	});
}


window.onload = function() {
	
	
	//let movie = JSON.parse(jsonResponse);
	fetch('https://swapi.co/api/films/')
		.then(function(response) {
			console.log(response.ok);
			console.log(response.status);
			if (response.ok){
				return response.json();
			}
		})
		.then(function(myJson) {
			if ( myJson !== undefined ) {
				//console.log('yo dawg, im in here');
				//console.log(myJson.results);
				addObjectstoDOM(myJson.results);
			}
		})
		.catch( function(e) {
			console.error('ERROR: ' + e)
		});
	

	
}

