import { useState, useEffect } from "react";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./views/Register";
import Login from "./views/Login";
import Header from "./components/Header";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Shop from "./views/Shop";
import UploadProduct from "./components/UploadProduct";
import video from "./assets/videos/Nicole-Coffee-Cinemagraph.mp4";

function App() {
  return (
    <div className="App">
      <Header />

      <video id="background-video" autoPlay muted loop width="1000px">
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
      </video>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/upload" element={<UploadProduct />} />
      </Routes>
    </div>
  );
}

export default App;
