<?php

header('Content-Type: application/json');

require_once "conexao.php";

$sql = 'SELECT * FROM carros';

$status = $conexao->prepare($sql);
$status->execute();


$dados = $status->fetchAll(PDO::FETCH_ASSOC);


if ($status->rowCount() > 0) {
    echo json_encode($dados);
    $fp = fopen('results.json', 'w');
    fwrite($fp, json_encode($dados));
    fclose($fp); 

} else {
    echo json_encode('Não existem carros');
}

