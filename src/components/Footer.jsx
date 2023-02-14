import React from "react";
import Logoo from "../img/logoo.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={Logoo} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
