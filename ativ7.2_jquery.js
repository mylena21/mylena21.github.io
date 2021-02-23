$(function () {
    $("#button").click(function () {
        let data = $("#data").val();
        if (data != "") {
            let dia1 = data.substr(8, 2);
            let ano1 = data.substr(0, 4);
            let mes1 = data.substr(5, 2);
            var mes = ""
            switch (mes1) {
                case '01':
                    mes = "janeiro"
                    break;
                case '02':
                    mes = "fevereiro"
                    break;
                case '03':
                    mes = "março"
                    break;
                case '04':
                    mes = "abril"
                    break;
                case '05':
                    mes = "maio"
                    break;
                case '06':
                    mes = "junho"
                    break;
                case '07':
                    mes = "julho"
                    break;
                case '08':
                    mes = "agosto"
                    break;
                case '09':
                    mes = "setembro"
                    break;
                case '10':
                    mes = "outubro"
                    break;
                case '11':
                    mes = "novembro"
                    break;
                case '12':
                    mes = "dezembro"
                    break;
            }
            $("#data").val("");
            $("#resultado").text( dia1 + " de " + mes + " de " + ano1);
        }
    })
})