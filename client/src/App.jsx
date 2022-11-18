import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>HOME</h1>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
