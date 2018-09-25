var bl = require('bl')
var http = require("http")

var sitio = "https://www.google.com.gt/";
console.log("El sitio regresa: ")

http.get(sitio, function(response){
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
	if (err) return console.error(err);
	console.log(data.length);
	console.log(data.toString())
}))
})

