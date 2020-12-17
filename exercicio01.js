function chamaFuncao(){
	var op1 = document.getElementById("entrada1").value;
	var op2 = document.getElementById("entrada2").value;

	op1 = parseInt(op1);
	op2 = parseInt(op2);
	
	var resultado = soma(op1, op2);
	alert("O resultado da soma entre " + op1 + " e " + op2 + " é " + resultado);
}

function soma(operando1, operando2){
	return operando1 + operando2;
}