        var minusculas = /[a-z]/;
        var maiusculas = /[A-Z]/;
        var numeros = /[1-9]/;
        var especiais = /[@#!$%&*()-+.,=]/;
$(function () {
            $("#frase").keyup(function () {
                if ($("#senha").val() == "") {
                    $("#resultado").text("");
                    $("#resultado").css('color', 'black');
                }
            })

            $("#button").click(function () {
                let senha = $("#senha").val();
                if ($("#senha").val() == "") {
                    $("#resultado").text("Insira uma senha");
                    $("#resultado").css('color', 'black');
                }
                if (minusculas.test(senha) || maiusculas.test(senha)) {
                    $("#resultado").text("Fraca");
                    $("#resultado").css('color', 'red');
                }
                if (minusculas.test(senha) && maiusculas.test(senha) && numeros.test(senha)) {
                    $("#resultado").text("Média");
                    $("#resultado").css('color', 'orange');
                }
                if (minusculas.test(senha) && maiusculas.test(senha) && numeros.test(senha) && especiais.test(senha)) {
                    $("#resultado").text("Forte");
                    $("#resultado").css('color', 'green');
                }
            })
        })