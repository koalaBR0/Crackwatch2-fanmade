function salvar() {
    var json,
        data = {}

        data.img    = document.getElementById('img').value;
        data.nome   = document.getElementById('nome').value;
        data.lanc   = document.getElementById('date').value;
        data.crack  = document.querySelector('input[name="crack"]:checked').value;
        json        = JSON.stringify(data);

        alert.json

        $.ajax({
            url : "http://localhost:8080/api/v1/game",
            type: "POST",
            contentType:"application/json; charset=utf-8",
            data: json
        }).done( function( response ){
            //$('#registerForm') [].reset(); //Limpa todos os campos do form
            toastr.success('Cadastro realizada com sucesso!');
        }).fail(function(){
            toastr.error('Falhou!');
        });
}

function alterar() {
    var json,
        data = {}

        data.id     = document.getElementById('id').value;
        data.img    = document.getElementById('img').value;
        data.nome   = document.getElementById('nome').value;
        data.lanc   = document.getElementById('date').value;
        data.crack  = document.querySelector('input[name="crack"]:checked').value;
        json        = JSON.stringify(data);

        $.ajax({
            url : "http://localhost:8080/api/v1/game",
            type: "PUT",
            contentType:"application/json; charset=utf-8",
            data: json
        }).done( function( response ){
            //$('#registerForm') [].reset(); //Limpa todos os campos do form
            toastr.success('Alteração realizada com sucesso!');
        }).fail(function(){
            toastr.error('Falhou!');
        });
}

function excluir() {
    var data = {}

        data.id     = document.getElementById('id').value;

        $.ajax({
            url : "http://localhost:8080/api/v1/game"+'/'+data.id,
            type: "DELETE",
            contentType:"application/json; charset=utf-8"
        }).done( function( response ){
            //$('#registerForm') [].reset(); //Limpa todos os campos do form
            toastr.success('Exclusão realizada com sucesso!');
        }).fail(function(){
            toastr.error('Falhou!');
        });
}

function listar() {
    var i,
        txt = "";

        $.ajax({
            url : "http://localhost:8080/api/v1/game",
            type: "GET",
            contentType:"application/json; charset=utf-8"
        }).done( function( response ){
            //$('#registerForm') [].reset(); //Limpa todos os campos do form
            
            txt += "<table border='0'  class='table table-hover table-dark'>"
            txt += "<thead class='thead-dark'>"
            txt += "<tr><th style='text-align:center'>Código<th></th><th>Nome</th><th>Data de Lançamento</th><th>Crack</th></tr></thead>"

            for (i=0; i < response.length; i++) { // Caso o jogo não tenha crack
                if(response[i].crack == 0){
                txt += "<tr><td style='text-align:center'>" + response[i].id + "</td>";
                txt += "<td><img src='" + response[i].img + "'></td>"
                txt += "<td>" + response[i].nome + "</td>"
                txt += "<td>" + response[i].lanc + "</td>"
                    txt += "<td style = 'color: red;'>Sem crack</td>"
                }
            }

            for (i=0; i < response.length; i++) {  // Caso o jogo tenha crack
                if(response[i].crack == 1){
                txt += "<tr><td style='text-align:center'>" + response[i].id + "</td>";
                txt += "<td><img src='" + response[i].img + "'></td>"
                txt += "<td>" + response[i].nome + "</td>"
                txt += "<td>" + response[i].lanc + "</td>"
                    txt += "<td style = 'color: green;'>Crackeado</td>"
                }
            }

            txt += "</table>"
            document.getElementById('tabela').innerHTML = txt;

        })
    }

function consultar() {
    var data = {},
        txt =  "";

    data.id = document.getElementById('id').value;

    $.ajax({
        url : "http://localhost:8080/api/v1/game"+'/'+data.id,
        type: "GET",
        contentType:"application/json; charset=utf-8"
    }).done( function( response ){
        //$('#registerForm') [].reset(); //Limpa todos os campos do form
        
        txt += "<table style = 'width:75%; color:white; background-color: black;' border='0'  class='table table-hover table-dark'>"
        txt += "<thead class='thead-dark'>"
        txt += "<tr><th style='text-align:center'>Código<th>Nome</th><th>Data de Lançamento</th><th>Crack</th></tr></thead>"

        txt += "<td style='text-align:center'>" + response.id + "</td>";
        txt += "<td>" + response.nome + "</td>";
        txt += "<td>" + response.lanc + "</td>";

        if(response.crack == 1){
            txt += "<td style = 'color: green;'>Crackeado</td>"
        } else{
            txt += "<td style = 'color: red;'>sem crack</td>"
        }
                              
        txt += "</table>"
        document.getElementById('tabela').innerHTML = txt;

    })
}