var http = require('http');
var bl = require('bl');


var sitios = ["https://www.google.com.gt/", "https://www.google.com.gt/", "https://www.google.com.gt/"];
console.log("El sitio regresa: ")
http.get(sitios[0], function(response){
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
	if (err) return console.error(err);
	console.log(data.toString())
}))
})

http.get(sitios[1], function(response){
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
	if (err) return console.error(err);
	console.log(data.toString())
}))
})

http.get(sitios[2], function(response){
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
	if (err) return console.error(err);
	console.log(data.toString())
}))
})