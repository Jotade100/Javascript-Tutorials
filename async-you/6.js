 var http = require('http')
       , async = require('async');
     async.map(['one', 'two', 'three'], function(item, done){
       var body = 0;
       http.get(process.argv[2] +"?number=" + item, function(res){
         res.on('data', function(chunk){
           body += Number(chunk.toString());
         });
         res.on('end', function(){
          return done(null, body);
         });
       });
      
     },
     function(err, results){
       if (err) return console.log(err);
	   var resultado = 0;
	   for (i = 0; i < results.length; i++){
		   resultado += results[i]
	   }
       console.log("La sumatoria es: " + resultado);
     });