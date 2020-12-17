function chamaFuncao(){
	var sal = document.getElementById("entrada1").value;
	var perc = document.getElementById("entrada2").value;
	sal = parseFloat(sal);
	perc= parseFloat(perc);
	var resultado = calcsalario(sal,perc);
	alert("O novo salário é " + resultado);
}

function calcsalario(salario, perce){
	result= (perce/100 * salario)+ salario;
	return result;
	
}

