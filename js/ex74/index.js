let maxAst = 20;

let rowAst = 1;
let sAst = "";

//rows
while (rowAst < maxAst){
	//cols
	let colAst = 1;
	while (colAst <= rowAst){
		sAst = sAst + "*";
		colAst++;
	}
	
	console.log(sAst);
	
	sAst = ""
	rowAst++;
}

//Row
//1

//Col
//1