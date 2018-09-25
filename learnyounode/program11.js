var fs = require("fs");
var http = require('http')
console.log("El archivo a madar es: " + process.argv[3] + "a través del puerto" + process.argv[2]);
	var server = http.createServer(function (req, res) {
		res.writeHead(200, { 'content-type': 'text/plain' })
		fs.createReadStream(process.argv[3]).pipe(res);
})
server.listen(process.argv[2])
