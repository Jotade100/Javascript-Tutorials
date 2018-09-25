var net = require('net');

var server = net.createServer(function (socket) {
	var date = new Date();
	socket.write("La petición fue hecha el: ");
	socket.end(date.getFullYear() + "-0" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() +"\n");
})
server.listen(process.argv[2])