var numeros = [];
var indice = 10;
function multiplos3 (number) {
       return number % 3 === 0;
     }
for(i = 0; i <= 100; i++){
	if(multiplos3(i)){
		numeros.push(i);
	}
}
console.log("Múltiplos de 3: " + numeros);
for(i = 0; i < numeros.length; i++){
	numeros[i] = numeros[i]*10;
}
console.log("Múltiplos de 3 y 10: " + numeros);