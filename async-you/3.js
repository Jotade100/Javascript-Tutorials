 var http = require('http')
       , async = require('async');
	 console.log("Las URL a hacer GET son " + process.argv[2], process.argv[3]);
     async.each([process.argv[2], process.argv[3]], function(item, done){
       var opts = {
         hostname: item,
         method: 'GET'
       };
       var req = http.request(opts, function(res){
         res.on('data', function(chunk){
         });
         res.on('end', function(){
          return done();
         });
       });
       req.write(item);
       req.end();
     },
     function(err){
       if (err) console.log(err);
     });