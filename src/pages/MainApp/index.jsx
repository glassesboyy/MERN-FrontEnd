import About from "./About";
import CreateMovie from "./CreateMovie";
import DetailMovie from "./DetailMovie";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";

const MainApp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="flex-grow p-8">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

MainApp.Home = Home;
MainApp.CreateMovie = CreateMovie;
MainApp.DetailMovie = DetailMovie;
MainApp.About = About;

export default MainApp;
