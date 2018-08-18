const mongoClient = require('mongodb').MongoClient;
const app = require('express')();


const url = 'mongodb://localhost:27017';
//const db = client.db
app.set('view engine', 'pug');



app.get('/', (req, res) => {
	
	mongoClient.connect(url, function (err, client) {
		let collection = client.db('comics').collection('superheroes');
		
		
		collection.find({}).toArray((error, documents) => {
			console.log(documents);
			client.close();
			
			//res.send(documents);
			let docu = {};
			docu.heroArray = documents;
			
			res.render('index', docu);
		});
		
	});
	
	
});


app.listen(3000, (err) => {
	if (err) {
		console.log('yo dawg, its been an error');
		return;
	}
	console.log('Example app listening on port 3000!');
});