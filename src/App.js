import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Collaboration from "./pages/Collaboration";
import Form from "./pages/Form";
import News from "./pages/News";
import Donation from "./pages/Donation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Collaboration" element={<Collaboration />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/News" element={<News />} />
        <Route path="/Donation" element={<Donation />} />
      </Routes>
    </Router>
  );
}

export default App;
