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
        <p><a href="sistema.php">Voltar</a></p>
        <header>
            <h1>Adicionando Carros</h1>
        </header>
        <form id="addForm">
            
            <input type="text" name="modelo" id="modeloId" placeholder="modelo do carro" required><br>
            <input type="number" name="preco" id="precoId" placeholder="preço" required><br>
            <input type="text" name="descricao" id="descricaoId" placeholder="descrição" required><br>
            <input type="text" name="foto" id="url_fotoId" placeholder="endereço da imagem" required><br>
            
            <input type="submit" form="addForm" value="Adicionar carro">            
        </form>

        <div class="showCars">
            
        </div>
        <a href="../site/index.php">Acessar site</a>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="codigos/addCar.js"></script>
</body>
</html>