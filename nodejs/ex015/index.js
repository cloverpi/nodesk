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



// configure the default route and send a text as response
app.get('/', function(request, response) {	
	const jsonObj = {
		"status": 200,
		"message": "Este request/response está OK"
	}
	
	response.send(jsonObj);
});

app.listen(3000, (err) => {
	if (err) {
		console.log('yo dawg, its been an error');
		return;
	}
	console.log('Example app listening on port 3000!');
});



