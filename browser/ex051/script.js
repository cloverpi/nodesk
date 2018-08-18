
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

window.onload = function() {
	const jsonResponse = `{
	  "title": "A New Hope", 
	  "episode_id": 4, 
	  "species": [
		"https://swapi.co/api/species/5/", 
		"https://swapi.co/api/species/3/", 
		"https://swapi.co/api/species/2/", 
		"https://swapi.co/api/species/1/", 
		"https://swapi.co/api/species/4/"
	  ]
	}`
	
	let movie = JSON.parse(jsonResponse);
	
	
	let divParent = document.getElementById('jsonresponse');
	
	appendThings(divParent, 'H3', movie.title);
	appendThings(divParent, 'p', 'Episode ID: ' + movie.episode_id);

	movie.species.forEach(function(specie, index) {
		let para = {};
	
		para['href'] = specie;
		para['style'] = 'color: red';
		para['class'] = 'red';
	
		appendThings(divParent,'a', 'Link ' + (index+1), para);
		appendThings(divParent,'br');
	});
	
}

