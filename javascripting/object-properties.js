var helados = [{
	   name: "Banana Split",
       toppings: ['crema batida', 'anicillos', 'banano', 'chocolate'],
       precio: 20.00,
       bolas: 3,
     },
	 {
	   name: "Banana Hawaiana",
       toppings: ['banano', 'chocolate'],
       precio: 20.00,
       bolas: 4, 
     },
	 {
	   name: "Cono simple",
       toppings: [],
       precio: 7.50,
       bolas: 1, 
     }];

for(i = 0; i < helados.length; i++){
	console.log(helados[i].name + " Q" + helados[i].precio);
}	 