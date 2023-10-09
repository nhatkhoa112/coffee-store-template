import React from "react";
import { NavDropdown } from "react-bootstrap";
import style from "./Navigation.module.css";

const NavigationItem = ({ name }) => {
  return (
    <NavDropdown title={name} id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
};

export default NavigationItem;
