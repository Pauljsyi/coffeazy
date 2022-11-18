import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Header from "./components/Header";
import Home from "./containers/Home";
import Menu from "./containers/Menu";
import Shop from "./containers/Shop";

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
      </Routes>
    </div>
  );
}

export default App;
