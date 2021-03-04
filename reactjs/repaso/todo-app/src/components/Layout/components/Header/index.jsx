import React from "react";
import { NavBar } from "./components";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};

export { Header };