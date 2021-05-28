$(function(){ 
    $("#calcular").click(function(){
        let soluto =$("#soluto1").val();
        let solvente =$("#solvente1").val();
        let solutoi= 120;
        let result= solutoi * solvente;
        if(result == soluto){
            /*saturada*/
            $("#calculo").html(solutoi + " (g) de K2CR2O7 ---- 1 (L) de H2O</br> x ---- " + solvente + " (L) de H2O</br>" + "</br>x = " + result + " g de K2CR2O7");
            $("#resposta").html("A solução é <strong>saturada</strong>, pois a quantidade de soluto fornecida, " + soluto + " g, é exatamente igual a quantidade de soluto necessária, " + result + " g, para dissolver a " +
            solvente +" litro (s) de água.");
        }
        else if(result > soluto){
            /*insaturada*/
            $("#calculo").html(solutoi + " (g) de K2CR2O7 ---- 1 (L) de H2O</br> x ---- " + solvente + " (L) de H2O</br>" + "</br>x = " + result + " g de K2CR2O7");
            $("#resposta").html("A solução é <strong>insaturada</strong>, pois a quantidade soluto fornecida, " + soluto +" g, é menor que a quantidade de soluto necessária, " + result +" g, para dissolver a " + 
            solvente +" litro (s) de água.");
        }
        else{
            let copfundo= soluto-result;
            /*saturada com corpo de fundo*/
            $("#calculo").html(solutoi + " (g) de K2CR2O7 ---- 1 (L) de H2O</br> x ---- " + solvente + " (L) de H2O</br>" + "</br>x = " + result + " g de K2CR2O7");
            $("#resposta").html("A solução é <strong>saturada com corpo de fundo</strong>, pois a quantidade de soluto fornecida, " + soluto + " g, é maior que a quantidade de soluto necessária, " + result + " g, para dissolver a "+ 
            solvente + " litro (s) de água.</br> Tendo corpo de fundo de " + copfundo + " g de K2CR2O7.");
        }
    })
    $("#calcular2").click(function(){
        let soluto2 =$("#soluto2").val();
        let solvente2 =$("#solvente2").val();
        let solutoi= 0.4;
        let result2= solutoi * solvente2/solvente2;
        if(soluto2 > (solutoi * solvente2)){
            $("#calculo2").html("Considerando 0.4 mol como a quantidade de K2Cr2O7 que dissolve em 1 L de H2O e a quantidade de solvente dada, temos a seguinte regra de 3: </br></br>" + solutoi + " mol de K2CR2O7 ---- 1 (L) de H2O</br> x ---- " + solvente2 + " (L) de H2O</br>" + "</br> x = " + solutoi * solvente2 + " mol de K2CR2O7 necessários");
            $("#resposta2").html("Tendo o valor de x, podemos calcular a concentração através da fórmula:</br></br>C = n/V</br>C = " + solutoi * solvente2 + "/" + solvente2 +" = " + result2 + " mol/L" + "</br></br></br>A concentração molar final é " + result2 + " mol/L" + " e há corpo de fundo pois a quantidade de solvente necessária seria " + solutoi * solvente2 + " mol e a quantidade de soluto fornecida é " + soluto2 + " mol.");
        }
        else{
            $("#calculo2").html("Considerando 0.4 mol como a quantidade de K2Cr2O7 que dissolve em 1 L de H2O e a quantidade de solvente dada, temos a seguinte regra de 3: </br></br>" + solutoi + " mol de K2CR2O7 ---- 1 (L) de H2O</br> x ---- " + solvente2 + " (L) de H2O</br>" + "</br> x = " + solutoi * solvente2 + " mol de K2CR2O7 necessários");
            $("#resposta2").html("Tendo o valor de x, podemos calcular a concentração através da fórmula:</br></br>C = n/V</br>C = " + solutoi * solvente2 + "/" + solvente2 +" = " + result2 + " mol/L" + "</br></br></br>A concentração molar final é " + result2 + " mol/L" + " e não há corpo de fundo.");
        }
    })
})