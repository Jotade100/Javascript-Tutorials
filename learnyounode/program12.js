var map = require('through2-map');
var http = require('http');


console.log("A través de POST se envían los datos al puerto" + process.argv[2])
var server = http.createServer(function(req, res){
	if(req.method == "POST"){
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res)
	} else {
		return res.end("ERROR");
	}
	
	
});

server.listen(process.argv[2])
