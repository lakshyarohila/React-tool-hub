import React from "react";
import { Routes, Route } from "react-router-dom";
import ESignature from "./pages/ESignature";
import Drawing from "./pages/Drawing";

import Todo from "./pages/Todo";
import Stopwatch from "./pages/Stopwatch";
import PasswordGenerator from "./pages/PasswordGenerator";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QrCode from "./pages/QrCode";
import ImageCompressor from "./pages/ImageCompressor";
import TexttoSpeech from "./pages/TexttoSpeech";
import BMI from "./pages/BMI";
import TicTacToe from "./pages/TicTacTo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/e-signature" element={<ESignature />} />
        <Route path="/drawing-canvas" element={<Drawing />} />
        <Route path="/qr-code" element={<QrCode />} />
        <Route path="/image-compressoer" element={<ImageCompressor />} />
        <Route path="/text-speech" element={<TexttoSpeech />} />
        <Route path="/bmi" element={<BMI/>} />
        <Route path="/fungame" element={<TicTacToe/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
