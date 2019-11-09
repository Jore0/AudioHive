import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <>
    <footer>
      <Link to="https://github.com/Jore0/AudioHive" target="_blank">
        <img src={window.github} />
      </Link>
    </footer>
  </>
);
