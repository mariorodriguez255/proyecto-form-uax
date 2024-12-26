import "./App.css";
import React from "react";
import { Home } from "./components/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Start } from "./components/home/start";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/registro" element={<Home />} />
      </Routes>
    </Router>
  );
}