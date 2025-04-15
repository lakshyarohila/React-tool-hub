import React from "react";
import { Routes, Route } from "react-router-dom";
import ESignature from "./pages/ESignature";
import Drawing from "./pages/Drawing";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Stopwatch from "./pages/Stopwatch";
import PasswordGenerator from "./pages/PasswordGenerator";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/e-signature" element={<ESignature />} />
        <Route path="/drawing-canvas" element={<Drawing />} />
      </Routes>
    </div>
  );
};

export default App;
