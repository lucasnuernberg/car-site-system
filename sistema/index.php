<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/estilo.css">
    <title>Sistema</title>
</head>
<body>
    <div class="container text-center">
        <header>
            <h1>Sistema <span>KBÇA AUTOMÓVEIS</span></h1>
        </header>

        <form action="" method="post" id="naodeixar" class="login">
            <input type="text" name="login" id="login" placeholder='login' required><br>
            <input type="password" name="senha" autocomplete="off" id="senha" placeholder='senha' required><br>
            <button id="verificar" name="validacao" type="submit">Entrar</button>
            <?php
                session_start();
                if (isset( $_POST['login'])) {
                    $login = $_POST['login'];
                    $senha = $_POST['senha'];
                    if ($login == 'quilunhas' && $senha == '1234') {
                        
                        $_SESSION['validacao'] = true;
                        header('Status: 301 Moved Permanently', false, 301);
                        header('Location: http://localhost/projeto-site/sistema/sistema.php');
                    } else {
                        echo "<p style='color: white;'>Senha ou Login inválidos</p>";
                        
                        $_SESSION['validacao'] = false;
                    }
                }
            ?>            
        </form>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script>
        localStorage.setItem("path", "http://localhost/projeto-site")
    </script>
</body>
</html>     