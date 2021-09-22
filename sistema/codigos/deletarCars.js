
$(document).ready(function(){     
    //Ajax usando metodo get para pegar os dados dos carros 
    var caminho = localStorage.getItem("path");
    $.ajax({
        url: `${caminho}/sistema/db/pegarCars.php`,
        method: 'GET',
        type: 'get',
        dataType: 'json'
    }).done(function(result){   

        //result is a list with a lot of cars in format of object     
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

        $('button').click(function(){            
            var idDelete = $(this).attr('id');    
            
            if(idDelete=='back'){}else{
                var confirmar = window.confirm('Você tem certeza que quer deletar esse carro?')
                if (confirmar == true) {
        
                    $.ajax({
                        url: `${caminho}/sistema/db/deletarCar.php`,
                        data: {'id': idDelete},
                        method: 'POST',
                        type: 'post',
                        dataType: 'json',
                        success: function (response) {
                            $(`#card${idDelete}`).remove()                      
                            
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            
                            window.alert('Erro ao deletar carro, consulte o console')
                            console.log(xhr, ajaxOptions, thrownError)
                        }    
                    })
                }            
            }
        })
        

    }).fail(function(err){

        console.log(err)
        window.alert('Erro ao carregar carros, consulte o console')
    });

});

