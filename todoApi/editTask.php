<?php
include 'config.php';
include 'utility.php';

$conn = connessione();
$request = getRequest();

$id_task = $request['id_task'];
$argomento = $request['argomento'];
$titolo = $request['titolo'];
$stato = $request['stato'];

$query = mysqli_query($conn, "UPDATE tasks SET argomento = '$argomento', titolo = '$titolo', stato = '$stato' WHERE id_task = '$id_task'");

if ($query) {
    echo json_encode(array('success' => true, 'message' => 'Task aggiornato con successo.'));
} else {
    echo json_encode(array('success' => false, 'message' => 'Errore durante l\'aggiornamento del task.'));
}
