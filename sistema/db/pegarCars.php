<?php

header('Content-Type: application/json');

$conexao = new PDO('mysql:host=localhost;dbname=sistema_kbca', 'root', '');

$sql = 'SELECT * FROM carros';

$status = $conexao->prepare($sql);
$status->execute();


if ($status->rowCount() > 0) {
    echo json_encode($status->fetchAll(PDO::FETCH_ASSOC));
} else {
    echo json_encode('Não existem carros');
}

