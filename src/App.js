import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import ImageCard from "./ImageCard";
import Navigation from "./Navigation";
import Asteroids from "./Asteroids";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ImageCard />} />
        <Route path="/asteroids" element={<Asteroids />} />
        <Route path="/contact" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
