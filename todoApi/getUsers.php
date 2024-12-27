<?php
include 'config.php';
include 'utility.php';

$conn = connessione();

$query = mysqli_query($conn, "SELECT nome , cognome , username , id_utente ,permesso FROM utenti");


$response = array();
if ($query) {
    while ($row = mysqli_fetch_assoc($query)) {
        $response[] = [
            "nome" => $row["nome"],
            "cognome" => $row["cognome"],
            "username" => $row["username"],
            "permesso" => $row["permesso"],
            'id_utente' => $row['id_utente']
        ];
    }

    echo json_encode($response);
}
