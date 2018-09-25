var numeros = [];
var indice = 6;
function multiplos3 (number) {
       return number % 3 === 0;
     }
for(i = 0; i <= 100; i++){
	if(multiplos3(i)){
		numeros.push(i);
	}
}

console.log("El " + indice+"° múltiplo de 3 es " + numeros[6])