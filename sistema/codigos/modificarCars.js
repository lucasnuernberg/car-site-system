$(document).ready(function(){
    //Ajax com metodo get para mostrar todos os carros
    $.ajax({
        url: 'http://localhost/projeto-site/sistema/db/pegarCars.php',
        method: 'GET',
        type: 'get',
        dataType: 'json'
    }).done(function(result){
        //result é uma lista com vários objetos
        for(let i = 0; result.length > i; i++) {
            
            var divCar = `<div id="car${result[i]['id']}" class="card" style="width: 18rem">
                <img src="${result[i]['url_foto']}" class="card-img-top">
                <div class="card-body">
                    <p id="model${result[i]['id']}">${result[i]['modelo']}</p>
                    <p id="descript${result[i]['id']}">${result[i]['descricao']}</p>
                    <p id="price${result[i]['id']}">R$${result[i]['preco']},00</p>                    
                </div>
                <button class="btn btn-primary" id="${result[i]['id']}">Editar veículo</button>
            </div>`;

            $('.carrosMod').append(divCar);

        }  

        //função é disparada ao clicar no botão de editar
        $('button').click(function(){
            
            var idCar = $(this).attr('id');
            let content = $(`#car${idCar} .card-body p`);

            let modelo = content[0].textContent;
            //let preco = content[1].textContent;
            let foto = $(`#car${idCar}`).children()[0].currentSrc;
            let descricao = content[1].textContent;
            
            
            $(`button#${idCar}`).remove();
            
            let contentLocal = $(`#car${idCar} .card-body`)
                            
            contentLocal.empty()      
            

            contentLocal.append(`<input type="text" placeholder="modelo" value"" id='inputModelCars${idCar}'>`)
            contentLocal.append(`<input type="text" placeholder="descrição" value"" id='inputDescriptCars${idCar}'>`)
            contentLocal.append(`<input type="number" placeholder="preço" id='inputPriceCars${idCar}'>`)
            contentLocal.append(`<input type="text" placeholder="Endereço da imagem" id='inputPhotoCars${idCar}'>`)
            

            $(`#inputModelCars${idCar}`).val(modelo)
            $(`#inputDescriptCars${idCar}`).val(descricao)
            //$(`#inputPriceCars${idCar}`).val(preco)
            $(`#inputPhotoCars${idCar}`).val(foto)

            //
            let buttonMod = `<button id="confirm${idCar}">Confirmar edição</button>`;
            $(`#car${idCar}`).append(buttonMod)
            
            $(`#confirm${idCar}`).click(function(){
                let inputModel = $(`#inputModelCars${idCar}`);
                let inputPrice = $(`#inputPriceCars${idCar}`);
                let inputUrl = $(`#inputPhotoCars${idCar}`);
                let inputDescript = $(`#inputDescriptCars${idCar}`);                
                
                if (inputModel.val() != '' && inputPrice.val() != '' && inputUrl.val() != '') {  
                    
                    $.ajax({
                        url: 'http://localhost/projeto-site/sistema/db/modificarCar.php',
                        data: 
                        {modelo: inputModel.val(),
                        preco: inputPrice.val(),
                        foto: inputUrl.val(),
                        id: idCar,
                        descricao: inputDescript.val()},
                        method: 'POST',
                        type: 'post',
                        dataType: 'json'
                    }).done(function(result){
                        console.log(result)
                       
                        $(`#car${idCar} img`)[0].src = inputUrl.val()

                        var apagar = $(`div#car${idCar} div`)[0]
                        apagar.innerHTML = `
                        <div class="card-body">
                            <p id="model${idCar}">${inputModel.val()}</p>
                            <p id="descript${idCar}">${inputDescript.val()}</p>
                            <p id="price16">R$${inputPrice.val()},00</p>
                        </div>
                        <button class="btn btn-primary" id="${idCar}">Veículo editado</button>
                        
                        `
                        $(`#confirm${idCar}`).remove()


                        
                    })

                } else {
                    window.alert('Preencha todos os campos');
                }
            })
            
        })

    }).fail(function(err){
        window.alert('Não foi possível mostrar os carros, cosulte o console')
        console.log(err);
    })
})