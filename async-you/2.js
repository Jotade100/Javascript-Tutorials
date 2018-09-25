     var http = require('http'), async = require('async');
	 var fs = require("fs");
	 
	 console.log("los resultados son: ")
	 function llamar(data, cb){
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
	   
     async.series({
		 requestOne: function(callback){
			 llamar(process.argv[2], callback);
		 },
		 requestTwo: function(callback){
			 llamar(process.argv[3], callback);
	 }},
       function callback(err, resultado){
         if (err) return console.error(err);
		 console.log(resultado)
       }
     );
	 
	 