let car = {type:"Fiat", model:"500", color:"white"};

let data = [42, true, car];

let dataSlice = [];
dataSlice = data.slice(0);

data[2]['type'] = 'pontiac'



console.log(data[2]);
console.log(dataSlice[2]);