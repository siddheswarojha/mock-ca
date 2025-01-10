import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import Result from "./Result";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
