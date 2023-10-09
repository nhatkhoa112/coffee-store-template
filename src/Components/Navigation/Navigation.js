import React from "react";
import logo from "./../../imgs/logo_white-7.png";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import style from "./Navigation.module.css";
import NavigationItem from "./NavigationItem";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const NAVS = [
    "Home",
    "About Us",
    "Products",
    "Blog",
    "Gallery",
    "Contacts",
    "Pages",
  ];
  return (
    <div className={style.navigation}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="store logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span>
              <GiHamburgerMenu style={{ color: "#fff", border: "none" }} />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {NAVS.map((nav, id) => (
                <NavigationItem name={nav} key={id} />
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
