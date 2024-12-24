import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Admin, Login, MainApp, Register } from "../../pages";
import GenreList from "../../pages/Admin/Genre";
import MovieList from "../../pages/Admin/Movie";
import CreateMovie from "../../pages/Admin/Movie/createMovie"; // Add this import
import ProductionSeriesList from "../../pages/Admin/ProductionSeries";
import UserList from "../../pages/Admin/User";

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
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Admin />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/create" element={<CreateMovie />} />
          <Route path="genres" element={<GenreList />} />
          <Route path="production-series" element={<ProductionSeriesList />} />
          <Route path="users" element={<UserList />} />
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
