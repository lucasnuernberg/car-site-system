$('#naodeixar').submit(function(e) {
    e.preventDefault();
    var login = $('#login').val();
    var senha = $('#senha').val();
    var conferir = 0000
    if (login == 'quilunhas' && senha == conferir) {
        $('#resposta').html('')
        $('#resposta').prepend('Acesso concedido');
        window.location.replace('sistema.php')
    } else {
        $('#resposta').html('')
        $('#resposta').prepend('Login ou senha incorreto(s)');        
    }
    
})
