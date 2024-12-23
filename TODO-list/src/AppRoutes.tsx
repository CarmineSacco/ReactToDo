import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import App from "./App";
import Navbar from "./components/shared/Navbar";
import Register from "./pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<App />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
