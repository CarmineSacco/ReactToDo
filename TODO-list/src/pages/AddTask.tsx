import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Taskservice } from "../services/TaskService";
const AddTask = () => {
  const { id_utente } = useParams();
  const [formvalid, setFormValid] = useState(true);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [argument, setArgument] = useState("");

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleArgument = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArgument(e.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title || !argument) {
      setFormValid(false);
      setMessage("compila tutti i campi");
      setSuccess(false);
      return;
    }
    const task = { title, argument, id_utente };
    const response = await Taskservice.addTask(task);
    setMessage(response.message);
    setSuccess(response.success);
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h2 className="text-center mb-4">Aggiungi Task</h2>
              {(!formvalid || message) && (
                <div
                  className={
                    success ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              )}
              <form>
                <div className="mb-3">
                  <label htmlFor="titolo" className="form-label">
                    Titolo
                  </label>
                  <input
                    onChange={handleTitle}
                    type="text"
                    className="form-control"
                    id="titolo"
                    placeholder="scegli un titolo"
                  />
                </div>
                <div className="mb-3">
                  <div className="form-group">
                    <label htmlFor="argomento">Argomento</label>
                    <textarea
                      onChange={handleArgument}
                      className="form-control"
                      id="argomento"
                      rows={3}
                    ></textarea>
                  </div>
                </div>

                <div className="d-grid">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-primary btn-block"
                  >
                    Aggiungi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddTask;
