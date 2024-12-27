<?php
include 'config.php';
include 'utility.php';
$request = getRequest();
$conn = connessione();

$id_task = $request['id_task'];

$query = mysqli_query($conn, "DELETE FROM tasks WHERE id_task = '$id_task'");

if ($query) {
    echo json_encode(array('success' => true, 'message' => 'Task eliminato con successo.'));
} else {
    echo json_encode(array('success' => false, 'message' => 'Errore durante l\'eliminazione del task.'));
}
