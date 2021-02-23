$(function () {
    $("#button").click(function () {
        let data = $("#data").val();
        if (data != "") {
            let dia1 = data.substr(8, 2);
            let ano1 = data.substr(0, 4);
            let mes1 = data.substr(5, 2);
            const agora = new Date();
            const nascimento = new Date(ano1, mes1 - 1, dia1);
            const diferenca = Math.abs(agora.getTime() - nascimento.getTime());
            const days = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
            $("#resultado").text(days + " dias de vida");
            $("#data").val("");
        }
    })
})