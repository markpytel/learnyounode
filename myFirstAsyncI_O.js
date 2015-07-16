var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf-8', function(err,data){

	if(err) throw err;
	
	var numLines = data.split('\n').length-1;
	console.log(numLines);
	

});


