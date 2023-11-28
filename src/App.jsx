import { useState } from 'react'
import './App.css'
import { Box } from "@chakra-ui/react";

import Navbar from './Layout/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Speakers from "./Pages/Speakers";
import Headphones from "./Pages/Headphones";
import Earphones from "./Pages/Earphones";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/Headphones" element={<Headphones />} />
          <Route path="/Earphones" element={<Earphones />} />
        </Routes>
      </Box>
    </>
  );
}

export default App
