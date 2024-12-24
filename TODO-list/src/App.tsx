import { useLocation, useNavigate } from "react-router-dom";
import { AuthService } from "./services/AuthService";
import { useEffect, useState } from "react";
import { IUser } from "./interfaces/auth/IUser";
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState<IUser | null>(null);
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  useEffect(() => {
    if (!AuthService.checkUserLogged()) {
      setUser(null);
      navigate("/login");
    } else {
      const user = AuthService.getUser();
      setUser(user);
    }
  }, [location]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Home</h1>
      </div>
      {user && (
        <div>
          Bentornato/a{" "}
          <b>
            {capitalize(user.nome)} {capitalize(user.cognome)}
          </b>
        </div>
      )}
    </>
  );
}

export default App;
