import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import { Navbar, Contact, Social } from "./components";
import Hero from "./pages/Hero";
import Login from "./pages/LoginPage";
import ErrorPage from "./components/Error404";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className=" relative  z-0 bg-main">
              <div className="bg-hero-pattern overflow-x-hidden">
                <Navbar />
                <Hero />
              </div>
              <main className="app transition-all ease-in">
                <Canvas />
                <Customizer />
              </main>
              <div className="relative z-0">
                <Contact />
              </div>
              <Social />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
