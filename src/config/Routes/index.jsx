import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route path="home" element={<MainApp.Home />} />
          <Route path="create-movie" element={<MainApp.CreateMovie />} />
          <Route path="detail-movie/:id" element={<MainApp.DetailMovie />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Mau Kemana si Anjing??</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
