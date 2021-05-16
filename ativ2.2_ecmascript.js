var imposto = () =>{
    
    let sal = parseFloat(document.getElementById("sal").value);
     
    if(sal < 1903.98){
        var taxa = 0.00;
    }
    else if(sal == 1903.99 || sal <= 2826.65){
        var taxa = (sal * 0.075) - 142.8;
    }
    else if(sal == 2826.66 || sal <= 3751.05){
        var taxa = (sal * 0.15) - 354.8;
    }
    else if(sal == 3751.06 || sal <= 4664.68){
        var taxa = (sal * 0.225) - 636.13;
    }
    else{
        var taxa = (sal * 0.275) - 869.36;
    }
    document.getElementById("result").innerHTML = taxa;
}