import { useLocation, useNavigate } from "react-router-dom";
import { AuthService } from "./services/AuthService";
import { useEffect, useState } from "react";
import { IUser } from "./interfaces/auth/IUser";
import UserList from "./pages/UserList";
import UserTask from "./pages/userTaskPage/UserTask";
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState<IUser | null>(null);
  const [search, setSearch] = useState("");

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    if (!AuthService.checkUserLogged()) {
      setUser(null);
      navigate("/login");
    } else {
      const localuser = AuthService.getUser();
      setUser(localuser);
    }
  }, [location]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Home</h1>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
      >
        <input
          type="text"
          placeholder="Cerca..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {user && (
        <div>
          Bentornato/a
          <b>
            {capitalize(user.nome)} {capitalize(user.cognome)}
          </b>
          {user.permesso === "1" ? (
            <UserList search={search} />
          ) : (
            <UserTask search={search} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
