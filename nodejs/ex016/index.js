// require the express module
const express = require('express');
//const oneLineJoke = require('one-liner-joke');
// then create a express server
const app = express()
const requestTime = (req, res, next) => {
  const message = `Request: ${req.baseUrl} ${Date.now()}`;
  console.log(message);
  
  next();
};

app.use(requestTime);
app.use('/assets', express.static('public'));
app.use('/', express.static('root'));



// configure the default route and send a text as response

app.listen(3000, (err) => {
	if (err) {
		console.log('yo dawg, its been an error');
		return;
	}
	console.log('Example app listening on port 3000!');
});



