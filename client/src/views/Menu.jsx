import React from "react";
import { Image } from "react-bootstrap";
import MenuImg from "../assets/img/menu/cafe-menu.png";

const Menu = () => {
  return (
    <div>
      <Image className="w-50" src={MenuImg} alt="menu" />
    </div>
  );
};

export default Menu;
