var mymodule = require("./module6.js");
console.log("Los archivos del directorio especificado son:")
mymodule("./", ".js", function(err, data){
	if (err) {return console.error(err);}
	data.forEach(function(value){
		console.log(value);
	});
});