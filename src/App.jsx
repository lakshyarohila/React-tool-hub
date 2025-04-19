import React from "react";
import { Routes, Route } from "react-router-dom";
import ESignature from "./pages/ESignature";
import Drawing from "./pages/Drawing";

import Todo from "./pages/Todo";
import Stopwatch from "./pages/Stopwatch";
import PasswordGenerator from "./pages/PasswordGenerator";
import './App.css'
import LandingPage from "./pages/LandingPage";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QrCode from './pages/QrCode'
const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/e-signature" element={<ESignature />} />
        <Route path="/drawing-canvas" element={<Drawing />} />
        <Route path="/qr-code" element={<QrCode/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
