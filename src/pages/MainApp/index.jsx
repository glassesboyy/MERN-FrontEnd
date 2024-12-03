import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components/templates";

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

export default MainApp;
