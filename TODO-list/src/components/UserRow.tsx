import { IGetUserResponse } from "../interfaces/user/IGetUserResponse";

interface Props {
  user: IGetUserResponse;
}

const UserRow = ({ user }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0.5rem 1rem",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {`${user.nome} ${user.cognome} (${user.username})`}
      </span>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            padding: "0.5rem 1rem",
            fontSize: "0.9rem",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#45a049")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4CAF50")
          }
        >
          Aggiungi Task
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            fontSize: "0.9rem",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#1976D2")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#2196F3")
          }
        >
          Modifica Task
        </button>
      </div>
    </div>
  );
};

export default UserRow;
