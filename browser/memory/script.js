let generic = [];


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

function yoDawg(obj){
	//console.log(obj);
	generic = obj;
	//console.log(generic.pws);
	
	generic = generic.pws.concat(generic.pws);
	generic.forEach( function(element, index) {
		randomIndex = Math.floor(Math.random() * generic.length);
		console.log('random index: ' + randomIndex);
		
	});
	console.log(generic);
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
		//para['class'] = 'red';
	
		appendThings(divParent,'a', 'Link ' + (index+1), para);
		appendThings(divParent,'br');
	});
	
	
	fetch('https://makemeapassword.org/api/v1/passphrase/json?wc=1&pc=8&maxCh=10')
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			yoDawg(myJson);
			//console.log(myJson);
		});
	
}

