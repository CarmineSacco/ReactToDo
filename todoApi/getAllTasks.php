<?php
include 'config.php';
include 'utility.php';

$request = getRequest();
$conn = connessione();

$id_utente = $request['id_utente'];

$query = mysqli_query($conn, "SELECT * FROM tasks WHERE id_utente = '$id_utente'");
$response = array();
if ($query) {
    while ($row = mysqli_fetch_assoc($query)) {
        $response[] = [
            'id_task' => $row['id_task'],
            'titolo' => $row['titolo'],
            'argomento' => $row['argomento'],
            'stato' => $row['stato']
        ];
    }
    echo json_encode($response);
}
