var http = require("http")

var sitio = "https://www.google.com.gt/";
http.get(sitio, function(response){
	response.setEncoding('utf8');
	response.on("data", function (data) { console.log(data) });
	response.on("error", function (error) { console.error(error) });
})