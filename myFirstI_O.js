var fs = require('fs');
var file = process.argv[2];

//var bufObj = fs.readFileSync('./'+file);  
// Only if file is in same directory if path provided is absolute do not add './'

//var strBufObj = bufObj.toString();
// Default type for readFileSync is a buffer, need to use toString to convert
// OR you can provide 'utf8' as the 2nd argument to readFileSync to make string

//var strBufObjArray = strBufObj.split('\n');
//console.log(strBufObjArray.length-1)

//var result = fs.readFileSync(file).toString().split('\n').length-1
//console.log(result);

var contents = fs.readFileSync(file, 'utf8');
var numLines = contents.split('\n').length - 1;
console.log(numLines);

