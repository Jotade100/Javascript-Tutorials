var http = require('http')
  , async = require('async');

var resultado = '';

var contador = 0;

async.whilst(
  function() {
    return !/meerkat/.test(resultado.trim());
  },

  function(done){
    var body = '';
    http.get(process.argv[2], function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });

      res.on('end', function(){
        ++contador;
        resultado = body;
        done();
      });
    }).on('error', done);
  },

  function(err){
    if (err) return console.log(err);
    console.log("El número de intentos es: " +contador);
  }
)