//Função do Exercicio 01
function obterMedia(primeiroNumero, segundoNumero) {
	
	var media = parseFloat((parseInt(primeiroNumero) + parseInt(segundoNumero)) / 2);
	
	console.log("A média é:" + media);
	
}

//Função do Exercicio 02
function deveFazerAV3(valorAv1, valorAv2) {
	
	var media = parseFloat((valorAv1 + valorAv2) / 2);
	
	if(valorAv1 < 4 || valorAv2 < 4) {
		return true;
	} else if(media < 6.0) {
		
		return true;
	}
	
	return false;
	
	
	
}


//Função do Exercicio 03
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

//Função do Exercicio 04
function divisiveisPor(x, y) {

	for (i = 1; i < y; i++) {
		
		
		if(i%x == 0) {
			
			console.log(i);
			
		}
	}

}


//Função do Exercicio 05
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



console.log("Exercicio 01");
obterMedia(2, 5);

console.log("Exercicio 02");

console.log("Deverá fazer Av3? \n");
deveFazerAV3(4, 8);

console.log("Exercicio 03");

escreverNumerosAte(6);

console.log("Exercicio 04");
divisiveisPor(7,50);

console.log("Exercicio 05");
maiorVetor(valorVetor);