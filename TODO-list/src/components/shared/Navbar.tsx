import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { AuthService } from "../../services/AuthService";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(() => AuthService.getUser());
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  useEffect(() => {
    if (AuthService.checkUserLogged()) {
      setUser(AuthService.getUser());
    } else {
      setUser(null);
    }
  }, [location]); // controllo user loggato solo alla navigazione

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">TODO list</span>

          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              {!user && (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      register
                    </Link>
                  </li>
                </Fragment>
              )}
              {user && (
                <Fragment>
                  <li className="nav-item" onClick={handleLogout}>
                    <span className="nav-link">Logout</span>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
