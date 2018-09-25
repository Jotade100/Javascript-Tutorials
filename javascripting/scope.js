
function operacionesAritmeticas(a, b) {
	function suma(a, b){
		return a+b;
	}
	function resta(a, b){
		return a-b;
	}
	function multiplicacion(a, b){
		return a*b;
	}
	function division(a, b){
		return a/b;
	}
	
	console.log("Multiplicación: " + multiplicacion(a,b))
	console.log("Suma: " + suma(a,b))
	console.log("Resta: " + resta(a,b))
	console.log("División: " + division(a,b))
}

operacionesAritmeticas(10,5)