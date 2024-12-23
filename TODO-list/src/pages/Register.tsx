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

  const handleSubmit = () => {
    if (name && lastName && email && password && username) {
      const { success } = AuthService.register({
        nome: name,
        cognome: lastName,
        username: username,
        password: password,
        email: email,
      });
      if (success) {
        navigate("/login");
      }
    }
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <h1>Register</h1>
      </div>

      <form>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            nome
          </label>
          <input
            onChange={handleChangeName}
            type="text"
            className="form-control"
            id="nome"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cognome" className="form-label">
            Cognome
          </label>
          <input
            onChange={handleChangeLastName}
            type="text"
            className="form-control"
            id="cognome"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            onChange={handleChangeUsername}
            type="text"
            className="form-control"
            id="username"
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Register;
