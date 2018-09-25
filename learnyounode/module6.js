var fs = require("fs");
module.exports = function(directorio, extension, callback) {
	fs.readdir(directorio, function(err, data){
		if (err) return callback(err);
		//console.log("Los archivos del directorio son: ");
		var result = [];
		data.forEach(function(value){
			if(value.search(extension) > 0){
				result.push(value);
			};
		})
		callback(null, result);
	});
}