// require the express module
const express = require('express');
const oneLineJoke = require('one-liner-joke');

// then create a express server
const app = express()

// configure the default route and send a text as response
app.get('/', function(request, response) {
  response.send('<!DOCTYPE html><html lang="en"><head> <title>Potatos</title> <meta charset="UTF-8"> <script src="script.js" type="text/javascript" defer></script></head><body> <div id="jsonresponse"></div></body></html>');
});

app.get('/script.js', function(request, response) {
  response.send(`function appendThings(parentTag,tag,txt,params){let tmpDOMObj=document.createElement(tag);tmpDOMObj.textContent=txt;if(params!=undefined){Object.keys(params).forEach(function(k){let att=document.createAttribute(k);att.value=params[k];tmpDOMObj.setAttributeNode(att)})}
parentTag.appendChild(tmpDOMObj)}
function addObjectstoDOM(arr){let divParent=document.body;arr.forEach(function(i){appendThings(divParent,'H3',i.title);appendThings(divParent,'b','Episode ID: '+i.episode_id);appendThings(divParent,'br');appendThings(divParent,'i',i.opening_crawl);appendThings(divParent,'br');appendThings(divParent,'span','Directed by: '+i.director);appendThings(divParent,'br');appendThings(divParent,'span','Produced by: '+i.producer)})}
window.onload=function(){fetch('https://swapi.co/api/films/').then(function(response){console.log(response.ok);console.log(response.status);if(response.ok){return response.json()}}).then(function(myJson){if(myJson!==undefined){addObjectstoDOM(myJson.results)}}).catch(function(e){console.error('ERROR: '+e)})}`);
});

app.get('/joke', function(request, response) {
	response.send(oneLineJoke.getRandomJoke().body);
});

app.get('/jokes', function(request, response) {
	let tmpJoke = '';
	let maxJokes = Math.floor(Math.random() * 8) + 2;
	for (let i =0; i < maxJokes; i++){
		tmpJoke = tmpJoke + oneLineJoke.getRandomJoke().body + '<br>'
	}
	response.send(tmpJoke);
});

app.get('/api/:genre', function(request, response) {
	let tmpJson = {
		description: 'Products',
		items: [
		{ name: 'Star Wars jacket' , price: 100},
		{ name: 'FIFA 22 PS4' , price: 79},
		{ name: 'Superheore t-shirt' , price: 10},
		{ name: 'Jets game shirt' , price: 200},
		{ name: 'Large Meat lovers pizza' , price: 12},
		{ name: 'Canada Dry  bottle' , price: 2}
		]
	}
	response.json(tmpJson);
});

app.post('/jokes', function(request, response) {
	response.send('My jokes are too funny, I\'m not getting new ones from you..');
});

app.put('/jokes', function(request, response) {
	response.send('no, no, no.. not changing my act dude!');
});

app.delete('/jokes', function(request, response) {
	response.send('good jokes never get to old');
});

app.all('/jokes', function(request, response) {
	response.send('I know I\'m so good that you\'re looking for jokes everywhere');
});



app.listen(3000, (err) => {
	if (err) {
		console.log('yo dawg, its been an error');
		return;
	}
	console.log('Example app listening on port 3000!');
});