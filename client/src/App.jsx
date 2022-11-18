import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Header from "./components/Header";
import Home from "./containers/Home";
import Menu from "./containers/Menu";
import Shop from "./containers/Shop";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
