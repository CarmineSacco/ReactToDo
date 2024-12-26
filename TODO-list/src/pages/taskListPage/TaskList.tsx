import { useParams } from "react-router-dom";
import { Taskservice } from "../../services/TaskService";
import { useEffect, useState } from "react";
import { IGetTasksResponse } from "../../interfaces/tasks/IGetTasksResponse";
import "./TaskList.css";

const TaskList = () => {
  const { id_utente } = useParams();
  const [tasks, setTasks] = useState<Array<IGetTasksResponse>>([]);
  const [formvalid, setFormValid] = useState(true);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedTask, setSelectedTask] = useState<IGetTasksResponse | null>(
    null
  );

  const getTasks = async () => {
    const response = await Taskservice.getAllTasksById(id_utente!);
    setTasks(response);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleTaskClick = (task: IGetTasksResponse) => {
    setSelectedTask(task);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    if (selectedTask) {
      setSelectedTask({ ...selectedTask, [e.target.name]: e.target.value });
    }
  };

  const handleSave = async () => {
    if (selectedTask) {
      setTimeout(() => {
        setMessage("");
        setFormValid(true);
      }, 5000); // 5 secondi

      const response = await Taskservice.updateTask(selectedTask);
      setMessage(response.message);
      setSuccess(response.success);
      await getTasks();
    }
  };

  const handleDelete = async () => {
    setTimeout(() => {
      setMessage("");
      setFormValid(true);
    }, 5000); // 5 secondi

    if (selectedTask) {
      const response = await Taskservice.deleteTask(selectedTask.id_task);
      setFormValid(response.success);
      setMessage(response.message);
      setSuccess(response.success);
      if (response.success) {
        setSelectedTask(null);
      }
      await getTasks();
    }
  };

  return (
    <div className="task-container">
      {/* Task List */}
      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id_task}
              onClick={() => handleTaskClick(task)}
              className={
                selectedTask?.id_task === task.id_task
                  ? "task-item selected"
                  : "task-item"
              }
            >
              {task.titolo}
            </li>
          ))}
        </ul>
      </div>

      {/* Task Details */}
      <div className="task-details">
        <h2>Task Details</h2>
        {(!formvalid || message) && (
          <div
            className={success ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        )}
        {selectedTask ? (
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Modifica Task</h2>

            <form>
              <div className="mb-3">
                <label htmlFor="titolo" className="form-label">
                  Titolo
                </label>
                <input
                  type="text"
                  name="titolo"
                  value={selectedTask.titolo}
                  onChange={handleInputChange}
                  className="form-control"
                  id="titolo"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="argomento" className="form-label">
                  Argomento
                </label>
                <textarea
                  name="argomento"
                  value={selectedTask.argomento}
                  onChange={handleInputChange}
                  className="form-control"
                  id="argomento"
                  rows={3}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="stato" className="form-label">
                  Stato
                </label>
                <select
                  name="stato"
                  value={selectedTask.stato}
                  onChange={handleInputChange}
                  className="form-select"
                  id="stato"
                >
                  <option value="0">Incompleto</option>
                  <option value="1">Completo</option>
                </select>
              </div>
              <div className="d-grid">
                <button
                  type="button"
                  onClick={handleSave}
                  className="btn btn-primary btn-block"
                >
                  Salva
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="btn btn-danger btn-block mt-2"
                >
                  Elimina
                </button>
              </div>
            </form>
          </div>
        ) : (
          <p>Seleziona un task per visualizzare i dettagli.</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
