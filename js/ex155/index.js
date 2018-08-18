games = [];

games.push({
		name: 'Crash Bandicoot N. Sane Trilogy',
		price: 1060,
		sold: 20,
		console: 'PS4'
});

games.push({
		name: 'Lego Marvel Super Heroes',
		price: 700,
		sold: 25,
		console: 'XBOX'
});
games.push({
		name: 'Gta V',
		price: 1449,
		sold: 30,
		console: 'PS4'
});
games.push({
		name: 'Mortal Kombat Xl',
		price: 1190,
		sold: 34,
		console: 'PS4'
});
games.push({
		name: 'Gta V',
		price: 1250,
		sold: 60,
		console: 'XBOX'
});
games.push({
		name: 'Fifa 2017',
		price: 890,
		sold: 15,
		console: 'PS4'
});
games.push({
		name: 'Uncharted 4',
		price: 950,
		sold: 30,
		console: 'PS4'
});
games.push({
		name: 'Mortal Kombat Xl',
		price: 940,
		sold: 30,
		console: 'XBOX'
});
games.push({
		name: 'Need For Speed',
		price: 790,
		sold: 10,
		console: 'PS4'
});
games.push({
		name: 'Lego Batman',
		price: 1000,
		sold: 18,
		console: 'PS4'
});
games.push({
		name: 'Fifa 17',
		price: 1290,
		sold: 12,
		console: 'PS4'
});
games.push({
		name: 'Resident Evil 7',
		price: 1390,
		sold: 10,
		console: 'PS4'
});
games.push({
		name: 'Dragon Ball XX',
		price: 1390,
		sold: 25,
		console: 'XBOX'
});

games.forEach(function(game) {
  console.log('name: ' + game.name);
  console.log('price: ' + game.price);
  console.log('sold: ' + game.sold);
  console.log('console: ' + game.console);
  console.log('\n');
});
