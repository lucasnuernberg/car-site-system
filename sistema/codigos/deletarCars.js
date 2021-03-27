
$(document).ready(function(){     
    //Ajax usando metodo get para pegar os dados dos carros 
    $.ajax({
        url: 'http://localhost/projeto-site/sistema/db/pegarCars.php',
        method: 'GET',
        type: 'get',
        dataType: 'json'
    }).done(function(result){   

        //(result é uma lista com varios carros que são objetos)     
        for (let i = 0; result.length > i; i++){

            $('#showCars').prepend(`
            <div class="card" id="card${result[i]['id']}" style="width: 18rem;">
                <img src="${result[i]['url_foto']}" class="card-img-top" alt="imagem do carro" >            
                <div class="card-body" id="carro${result[i]['id']}">
                    <h5 class="card-title"><p>${result[i]['modelo']}</p></h5>                    
                    <p class="card-text">${result[i]['descricao']}</p>
                    <p class="card-text">${result[i]['preco']}</p>
                    <button class="btn btn-primary" id="${result[i]['id']}">Deletar</button>          
                </div>
            `);
        }

        //ao clicar no botão de excluir é executada a função
        $('button').click(function(){

            var confirmar = window.confirm('Você tem certeza que quer deletar esse carro?')
            if (confirmar == true) {
                var idDelete = $(this).attr('id');    
    
                $.ajax({
                    url: 'http://localhost/projeto-site/sistema/db/deletarCar.php',
                    data: {'id': idDelete},
                    method: 'POST',
                    type: 'post',
                    dataType: 'json',
                    success: function (response) {
                        console.log(response)
                        $(`#card${idDelete}`).remove()                      
                        
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        window.alert('Erro ao deletar carro, consulte o console')
                        console.log(xhr, ajaxOptions, thrownError)
                    }    
                })
            }            
        })

    }).fail(function(err){
        window.alert('Erro ao carregar carros, consulte o console')
        console.log(err)
    });

});

