var valorVetor = [6542, 1235, 3215, 6251, 3215, 3225, 4583, 2151, 2356, 1325, 9965, 1230, 4458, 6352]

var maiorNumero;

var menorNumero;

function maiorVetor(valorVetor) {
	
	for(var i in valorVetor) {
		
		if(valorVetor[i] > maiorNumero) {
			
			maiorNumero = valorVetor[i];
		}
		
		if(valorVetor[i] < menorNumero) {
			
			menorNumero = valorVetor[i];
			
		}
		
	}
	
	console.log("Maior: " + maiorNumero);
	
	console.log("Menor: " + menorNumero);

}

maiorVetor(valorVetor);