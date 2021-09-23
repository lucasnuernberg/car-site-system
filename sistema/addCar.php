
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
        <link rel="stylesheet" href="styles/estilo.css">
        <title>Adicionar carro</title>
        
    </head>
    <body>
        <div class="container">
            <a style="text-decoration:none" href="sistema.php"><button type="button" class="btn btn-light">Voltar</button></a>
            <header>
                <h1 class="text-center">Adicionando Carros</h1>
            </header>
    
            <form id="addForm" class="text-center" enctype="multipart/form-data">
                
                <input type="text" class="m-2" name="modelo" id="modeloId" placeholder="modelo do carro" required><br>
                <input type="number" class="m-2" name="preco" id="precoId" placeholder="preço" required><br>
                <input type="text" class="m-2" name="descricao" id="descricaoId" placeholder="descrição" required><br>
                <input type="file" class="m-2" name="arquivoFoto" id="arquivoFoto" accept="image/*">            
                <input class="m-2 btn btn-primary" type="submit" form="addForm" value="Adicionar carro">
                <p class="m-5"><a class="text-decoration-none text-light" href="../site/index.html">Acessar site</a></p>
            </form>
    
    
        </div>
    
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="codigos/addCar.js"></script>
    </body>
    </html>
    ';
} else {
    echo "Acesso Negado";
}
?>