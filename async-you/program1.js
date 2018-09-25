
     var http = require('http'), async = require('async');
	 var fs = require("fs");
	 
	 


     async.waterfall([
		function(cb){
		fs.readFile(process.argv[2], "utf8", function(err, data){
			if (err) return cb(err);
			console.log("La URL a utilizar es: "+ data)
		cb(null, data);});},
       function(data, cb){
         var body = '';
		 

		 
         http.get(data, function(res){
           res.on('data', function(chunk){
             body += chunk.toString();
           });
           res.on('end', function(){
             cb(null, body);
           });
         }).on('error', function(err) {
           cb(err);
         });
       }
     ], function(err, result){
       if (err) return console.error(err);
       console.log(result);
     });
