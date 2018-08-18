

function fib(prevnum, num) {
	let tmpnum = prevnum;
	prevnum = num;
	num += tmpnum;
	
	console.log(num);

	if (num < 1000) {
		return fib(prevnum, num);
	} else {
		return 0;
	}
	
	
}

function fibb(prevnum, num) {
	console.log(num);
	if (num < 1000) {
		fibb(num, num + prevnum);
	}
	
}



//fib(1, 0);

fibb(0,1)