const mutants = ['Professor X', 'Cyclops' ,'Iceman' ,'Angel' ,'Beast', 'Phoenix'];


console.log("Mutants\n------------------");
for(let i = 0; i < mutants.length; i++){
	console.log (mutants[i]);
}

mutants.sort();
console.log("\nSorted Mutants\n------------------");
for(let i = 0; i < mutants.length; i++){
	console.log (mutants[i]);
}

mutants.reverse();
console.log("\nReversed Mutants\n------------------");
for(let i = 0; i < mutants.length; i++){
	console.log (mutants[i]);
}


console.log("\nNonsense Mutants\n------------------");
console.log(mutants.join('*'));