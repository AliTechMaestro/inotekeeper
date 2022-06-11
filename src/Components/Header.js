import React from "react";
import logo from "../images/logo.png";
import "./Style.css";
export const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" height={"60px"} />
        <h1>iNote Keeper</h1>
      </div>
      <hr />
    </>
  );
};
