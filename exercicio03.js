function chamaFuncao(){
	var num = document.getElementById("entrada1").value;
	num= parseInt(num);
	var resultado = numprimo(num);
	alert(resultado);
}

function numprimo(numero){
	var cont=0;
	if(numero>1)
	{
		for(var i=2;i<numero;i++)
		{
			var result=numero%i;
				if(result==0)
				cont++;
				
		}
		if(cont!=0)
		{
			return ("O número não é primo");
		}
			 return ("O número é primo");
	}
	else
		{
			if(numero==1)
			{
				return ("O número 1 não é primo");
			}
			return ("O número não pode ser 0 ou negativo");
			
		}
}

