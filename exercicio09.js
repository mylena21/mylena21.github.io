function chamaFuncao(){
	var nota1 = document.getElementById("entrada1").value;
	var nota2 = document.getElementById("entrada2").value;
	var nota3 = document.getElementById("entrada3").value;
	nota1= parseFloat(nota1);
	nota2= parseFloat(nota2);
	nota3= parseFloat(nota3);
	var resultado = calcmediafinal(nota1, nota2,nota3);
	alert("A média final é " + resultado);
}
function calcmediafinal(nota1, nota2, nota3){
	return ((nota1*2) + (nota2*3) + (nota3*5))/10;

	
	
	
}

