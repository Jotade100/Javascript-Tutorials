		var http = require('http')
       , async = require('async');
	   console.log("Usando MAP las peticiones son para:" + process.argv[2] +	   process.argv[3]);
     async.map([process.argv[2], process.argv[3]], function(item, done){
		 var body = "";
       http.get(item, function(res){
         res.on('data', function(chunk){
           body += chunk.toString();
         });
         res.on('end', function(){
          return done(null, body);
         });
       });
     },
     function(err, results){
       if (err) return console.log(err);
       console.log(results);
     });