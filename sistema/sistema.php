<?php
session_start();
if ($_SESSION['validacao'] == true) {
    echo '
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/estilo.css">
    <title>Sistema de Carros</title>
</head>
<body>
    <div class="container">
        <h1 class="text-center"><span>KBÇA AUTOMÓVEIS</span></h1>

        <div class="buttons-area">    
            <a href="addCar.php"><button class="btn btn-light"> Adicionar carros</button></a>
            <a href="delCar.php"><button class="btn btn-light">  Deletar carros</button></a>
            <a href="modCar.php"><button class="btn btn-light">  Modificar carros</button></a>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script>
  
    </script>
</body>
</html>
    ';
} else {
    echo "Acesso Negado";
}
?>

