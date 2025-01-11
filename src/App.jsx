import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./MainContainer";
import Notes from "./Projects/NotesApp/Notes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainContainer />} />
        <Route path="/notes-app" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
