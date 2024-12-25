import { useState } from "react";

import { Fragment } from "react/jsx-runtime";
import { AuthService } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { log } from "console";

const Login = () => {
  const [formvalid, setFormValid] = useState(true);
  const [usernameEmail, setUsernameNameEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(event.target.checked);
  };

  const handleChangeUsernameEmail = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameNameEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (usernameEmail && password) {
      setFormValid(true);
      const { success, message, nome, cognome, permesso } =
        await AuthService.login({
          usernameEmail,
          password,
        });
      if (success) {
        localStorage.setItem(
          "user",
          JSON.stringify({ nome, cognome, permesso })
        );
        navigate("/home");
      } else {
        setError(message);
      }
    } else {
      setFormValid(false);
      setError("compila tutti i campi");
    }
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h2 className="text-center mb-4">login</h2>
              {(!formvalid || error) && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username o email
                  </label>
                  <input
                    onChange={handleChangeUsernameEmail}
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="scegli un username"
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
                    Accedi
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
export default Login;
