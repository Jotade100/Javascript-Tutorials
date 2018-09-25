var http = require('http');
const url = require('url');
console.log("La fecha es:");
var server = http.createServer(function(req, res){
	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	if (/^\/api\/parsetime/.test(req.url)) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify({hour: time.getHours(), minute: time.getMinutes(),second: time.getSeconds()}));
		console.log(JSON.stringify({hour: time.getHours(), minute: time.getMinutes(),second: time.getSeconds()}));
	} else if (/^\/api\/unixtime/.test(req.url)) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify({unixtime: time.getTime()}));
		console.log(JSON.stringify({unixtime: time.getTime()}));
	} else {
		res.end("ERROR")
	}
	
});

server.listen(process.argv[2])