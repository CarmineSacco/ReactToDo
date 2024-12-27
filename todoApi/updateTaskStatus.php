<?php
include 'config.php';
include 'utility.php';
$conn = connessione();

$request = getRequest();
$id_utente = $request['id_utente'];
$id_task = $request['id_task'];

$query = mysqli_query($conn, "UPDATE tasks SET stato = '1' WHERE id_task = '$id_task' AND id_utente = '$id_utente'");

if ($query) {
    $response = array('success' => true, 'message' => 'Task completata con successo.');
    echo json_encode($response);
} else {
    $response = array('success' => false, 'message' => 'Errore durante la completazione del task.');
    echo json_encode($response);
}
