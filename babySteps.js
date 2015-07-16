var numbers = process.argv.slice(2);

numbers = numbers.map(function(a) {return parseInt(a)});

console.log(numbers.reduce(function(a,b){return a+b}));