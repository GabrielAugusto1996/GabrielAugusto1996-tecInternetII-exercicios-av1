function escreverNumerosAte(determinadoValor) {
	
	
	console.log("Utilizando While: \n");
	
	var contador = 1;
	
	while(contador <= determinadoValor) {
		
		console.log(contador);
		
		contador ++;
		
	}
	
	contador = 1;
	
	console.log("Utilizando Do...While: \n");
	
	
	do {
		
		console.log(contador);
		
		contador++;
		
	} while(contador <= determinadoValor);
	
	
	console.log("Utilizando For: \n");
	
	for(i = 1; i <= determinadoValor; i++) {
		
		console.log(i);
		
	}

}

escreverNumerosAte(6);