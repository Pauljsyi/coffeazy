import React from "react";
import video from "../assets/videos/Nicole-Coffee-Cinemagraph.mp4";

const Shop = () => {
  return (
    <div>
      <video id="background-video" autoPlay muted loop width="1000px">
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
      </video>
    </div>
  );
};

export default Shop;
