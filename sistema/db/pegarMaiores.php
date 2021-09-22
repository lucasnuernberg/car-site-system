<?php

header('Content-Type: application/json');

require_once "conexao.php";

$sql = 'SELECT modelo, preco, url_foto
from carros
ORDER BY preco';

$status = $conexao->prepare($sql);
$status->execute();

$dados = $status->fetchAll(PDO::FETCH_ASSOC);

if ($status->rowCount() > 0) {
    echo json_encode($dados); 

} else {
    echo json_encode('Não existem carros');
}

?>
