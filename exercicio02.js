function chamaFuncao(){
	var op1 = document.getElementById("entrada1").value;
	var op2 = document.getElementById("entrada2").value;
	op1= parseInt(op1);
	op2= parseInt(op2);
	var resultado = maior(op1, op2);
	alert("O número maior é " + resultado);
}

function maior(num1,num2){
	if(num1> num2)
	{
		return num1;
	}
	else
		return num2;
	

}