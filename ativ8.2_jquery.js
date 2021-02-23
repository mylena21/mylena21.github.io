$(function () {
    $("#button").click(function () {
        let data= $("#data").val();
        let data2= $("#data2").val();
        if (data== "" || data2== 0) 
            $("#resultado").text("Insira uma data válida")
        else {
            let dia1= data.substr(8, 2);
            let ano1= data.substr(0, 4);
            let mes1= data.substr(5, 2);
            let dia2= data2.substr(8, 2);
            let ano2= data2.substr(0, 4);
            let mes2= data2.substr(5, 2);
            const now= new Date(ano1, mes1 - 1, dia1);
            const past= new Date(ano2, mes2 - 1, dia2);
            const diferenca= Math.abs(now.getTime() - past.getTime());
            const semanas= Math.ceil(diferenca / (1000 * 60 * 60 * 24 * 7)); 
            $("#resultado").text("A diferença é de " + semanas + " semanas")
        }
    })
})