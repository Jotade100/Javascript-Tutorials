var fs = require("fs");
var directorio = "./";
var extension = ".js"

fs.readdir(directorio, function(err, data){
	if (err) return console.error(err);
	console.log("Los archivos del directorio son: ");
	data.forEach(function(value){
		if(value.search(extension) > 0){
			console.log(value)
		};
	});
})