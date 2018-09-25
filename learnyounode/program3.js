var fs = require("fs");
var texto = fs.readFileSync(process.argv[2]).toString().split("\n");
console.log("El texto leído tiene :" + texto.length + " líneas");