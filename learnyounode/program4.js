var fs = require("fs");
fs.readFile(process.argv[2], "utf8", function(err, data){
	if (err) return console.error(err);
	var arreglo =  data.split("\n");
	console.log("El texto leído tiene :" + arreglo.length-1 + " líneas");

})

	
