import { useEffect, useState } from "react";
import { AuthService } from "../../services/AuthService";
import { Taskservice } from "../../services/TaskService";
import { IGetTasksResponse } from "../../interfaces/tasks/IGetTasksResponse";
import "../taskListPage/TaskList.css";

interface Props {
  search: string;
}
const UserTask = ({ search }: Props) => {
  const id_utente = AuthService.getUser()?.id_utente;
  const [tasks, setTasks] = useState<Array<IGetTasksResponse>>([]);
  const [filteredTasks, setFilteredTasks] = useState<Array<IGetTasksResponse>>(
    []
  );
  const [success, setSuccess] = useState(false);
  const [selectedTask, setSelectedTask] = useState<IGetTasksResponse | null>(
    null
  );
  const [message, setMessage] = useState<string>("");
  const getTasks = async () => {
    const response = await Taskservice.getAllTasksById(id_utente!.toString());
    setTasks(response);
    setFilteredTasks(response);
  };

  const handleSubmit = async () => {
    setTimeout(() => {
      setMessage("");
    }, 5000); // 5 secondi

    if (selectedTask) {
      const response = await Taskservice.updateTaskStatus(
        id_utente!,
        selectedTask.id_task
      );
      setMessage(response.message);
      setSuccess(response.success);
      if (response.success) {
        setSelectedTask({ ...selectedTask, stato: "1" });
      }
      await getTasks();
    }
  };

  const handleTaskClick = (task: IGetTasksResponse) => {
    setSelectedTask(task);
  };
  const handleSearchChange = () => {
    const filteredTasks = tasks.filter((task) =>
      task.titolo.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTasks(filteredTasks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    handleSearchChange();
  }, [search]);

  return (
    <div className="task-container">
      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {filteredTasks.map((task) => (
            <li
              key={task.id_task}
              onClick={() => handleTaskClick(task)}
              className={`task-item ${task.stato === "1" ? "done" : "todo"} ${
                selectedTask?.id_task === task.id_task ? "selected" : ""
              }`}
            >
              {task.titolo}
            </li>
          ))}
        </ul>
      </div>

      <div className="task-details">
        <h2>Dettaglo Task</h2>
        {message && (
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
                  readOnly
                  type="text"
                  name="titolo"
                  value={selectedTask.titolo}
                  className="form-control"
                  id="titolo"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="argomento" className="form-label">
                  Argomento
                </label>
                <textarea
                  readOnly
                  name="argomento"
                  value={selectedTask.argomento}
                  className="form-control"
                  id="argomento"
                  rows={3}
                ></textarea>
              </div>

              <div className="d-grid">
                {selectedTask.stato !== "1" && (
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-primary btn-block"
                  >
                    Completa task
                  </button>
                )}
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

export default UserTask;
