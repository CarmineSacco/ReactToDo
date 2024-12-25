import { Route, Routes } from "react-router-dom";

import App from "./App";
import Navbar from "./components/shared/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />s
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<App />} />
        <Route path="/addTask/:id_utente" element={<AddTask />} />
        <Route path="/editTask/:id_utente" element={<TaskList />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
