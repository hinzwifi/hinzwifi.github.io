import { useState } from "react";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";

import Navbar from "./components/Navbar";
import Spotify from "./components/Spotify";
import Socials from "./components/Socials";
import { Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Introduction />} />
        <Route path="/about" element={<About />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/tech" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
