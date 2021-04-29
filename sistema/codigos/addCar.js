$('#addForm').submit(function(e){
    e.preventDefault();
    var caminho = localStorage.getItem("path"); 
    
    var carModel = $('#modeloId').val();
    var carPrice = $('#precoId').val();
    var carDescription = $('#descricaoId').val();
    var carPhoto = $('#url_fotoId').val();

    $.ajax({
        url: `${caminho}/sistema/db/inserirCar.php`,
        data: {modelo: carModel, preco: carPrice, descricao: carDescription, url_foto: carPhoto},
        dataType: 'json',
        method: 'POST',
        type: 'post'
    }).done(function(result){
        //clear all inputs
        $('#modeloId').val('');
        $('#precoId').val('');
        $('#descricaoId').val('');
        $('#url_fotoId').val('');

    }).fail(function(err){

        console.log(err)
        window.alert('Erro ao adicionar carro, consulte o console.')

    })


})