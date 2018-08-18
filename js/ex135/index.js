const mutants = ['Professor X', 'Cyclops' ,'Iceman' ,'Angel' ,'Beast', 'Phoenix'];


console.log("Mutants\n------------------");
mutants.forEach( function(name, index) {
	console.log('#' + index + '  ' + name);
});