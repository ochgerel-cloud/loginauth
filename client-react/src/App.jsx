import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
