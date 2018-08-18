// require the express module
const express = require('express');
//import fetch from 'node-fetch';
const fetch = require('node-fetch');

// then create a express server
const app = express()
const requestTime = (req, res, next) => {
  const message = `Request: ${req.baseUrl} ${Date.now()}`;
  console.log(message);
  
  next();
};


app.use(requestTime);
app.use('/assets', express.static('public'));
app.set('view engine', 'pug');


app.get('/', (req, res) => {
	res.render('index', {title: 'Hey there guy', message: 'this is a thing', product: 'dawg wings', pdesc: 'wings that let your dawg fly yo.'});
});

app.get('/loganpaul', (req, res) => {
	res.render('index', {title: 'Dab on dem h8ers', message: 'dead meme', product: 'logan paul', pdesc: 'wings that let your dawg fly yo.'});
});

app.get('/about.html', (req, res) => {
	fetch('https://makemeapassword.org/api/v1/passphrase/json?wc=1&pc=8&maxCh=10')
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			console.log(myJson);
			//console.log(myJson);
		});
	res.render('index', {title: 'Dab on dem h8ers', message: 'dead meme', product: 'logan paul', pdesc: 'wings that let your dawg fly yo.'});
});





// configure the default route and send a text as response

app.listen(3000, (err) => {
	if (err) {
		console.log('yo dawg, its been an error');
		return;
	}
	console.log('Example app listening on port 3000!');
});



