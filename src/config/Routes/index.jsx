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
          <Route path="genre/:genreType" element={<MainApp.Home />} />
          <Route path="year/:year" element={<MainApp.Home />} />
          <Route path="about" element={<MainApp.About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-4xl font-bold text-purple-700">404</h1>
              <p className="text-xl">Page Not Found</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
