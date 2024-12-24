import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { AuthService } from "../services/AuthService";

const Register = () => {
  const [username, setUsernameName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formvalid, setFormValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleShowPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(event.target.checked);
  };

  const handleSubmit = async () => {
    if (name && lastName && email && password && username) {
      setFormValid(true);
      const { success } = await AuthService.register({
        nome: name,
        cognome: lastName,
        username: username,
        password: password,
        email: email,
      });
      if (success) {
        navigate("/login");
      }
    } else {
      setFormValid(false);
    }
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h2 className="text-center mb-4">Register</h2>
              {!formvalid && (
                <div className="alert alert-danger" role="alert">
                  Compila tutti i campi corretamente
                </div>
              )}
              <form>
                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">
                    Nome
                  </label>
                  <input
                    onChange={handleChangeName}
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Inserisci il nome"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cognome" className="form-label">
                    cognome
                  </label>
                  <input
                    onChange={handleChangeLastName}
                    type="text"
                    className="form-control"
                    id="cognome"
                    placeholder="inserisci il cognome"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    onChange={handleChangeUsername}
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="scegli un username"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={handleChangeEmail}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="inserisci l'email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={handleChangePassword}
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Inserisci una password password"
                  />
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      onChange={handleShowPassword}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Mostra password
                    </label>
                  </div>
                </div>

                <div className="d-grid">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary btn-block"
                  >
                    Registrati
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

export default Register;
