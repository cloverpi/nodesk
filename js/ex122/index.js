let ingredients = ['Pork','Pomato', 'Chiken', 'Lettuce','Beef','Carrots','Cucumber'];

let vegetarian = [];

vegetarian[0] = ingredients[1];
vegetarian[1] = ingredients[3];
vegetarian[2] = ingredients[5];
vegetarian[3] = ingredients[6];

console.log("Vegetarian ingredients\n-----------------------------\n");

for(let i = 0; i < vegetarian.length; i++){
	console.log (vegetarian[i]);
}

console.log("\n\n\n\nDelicious ingredients\n-----------------------------\n");
for(let i = 0; i < ingredients.length; i++){
	console.log (ingredients[i]);
}