import React from "react";
import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/burger-logo.png";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="burger logo"></img>
    </div>
  );
};

export default logo;
