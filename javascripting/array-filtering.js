var numeros = [];
function multiplos3 (number) {
       return number % 3 === 0;
     }
for(i = 0; i <= 100; i++){
	if(multiplos3(i)){
		console.log(i);
		numeros.push(i);
	}
	
}
