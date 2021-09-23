<?php

session_start();
if ($_SESSION['validacao'] == true) {
    echo '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="styles/deletar.css">
        
        <title>Deletar carro</title>

    </head>
    <body>
        <div class="container">
            <a style="text-decoration:none;color:white" href="sistema.php"><button type="button" id="back" class="btn btn-dark">Voltar</button></a>   
            <header>
                <h1 class="text-center">Deletando Carros</h1>
            </header>
            <div class="carrosDel" id="showCars">           
                <!-- Here is where all cars will be placed -->
            </div>        
        
        </div>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="codigos/deletarCars.js"></script>

    </body>
    </html>
    ';
} else {
    echo "Acesso Negado";
}
?>