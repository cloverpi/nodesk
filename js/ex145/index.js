let superHeroes = {
	username: 'Batman',
	password: 'Alfred1960KPO!'
};

console.log(superHeroes.username);
console.log(superHeroes.password);

//superHeroes.password = superHeroes.password.replace('1960', ' ');

console.log('\nFixed thingys');
console.log(superHeroes.username);
console.log(superHeroes.password);

if (superHeroes.username == 'Batman' && superHeroes.password == 'Alfred1960KPO!') {
	console.log('welcome back batman!');
} else {
	console.log('You are not batman, go away');
}	
