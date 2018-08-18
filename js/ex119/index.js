const data = [42, true, function() {return 'The meaning of life is: '}];

if (data[1] == true) {
	console.log(data[2]() + data[0]);
}