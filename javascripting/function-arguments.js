function promedio(arreglo) {
	var suma = 0
	for(i = 0; i < arreglo.length; i++){
		suma = suma + arreglo[i];
	}
	return suma/arreglo.length
}

var arreglo = [1,2,3,4,5,6,7,8,9,0]
console.log(promedio(arreglo))