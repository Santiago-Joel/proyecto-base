import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from '/logo.svg'
const NavbarApp = ({admin}) => {
  return (
    <Navbar className="d-flex justify-content-center bg-dark text-white">
      <Nav className="me-auto">
        <button>
          <img src={logo} alt="" />
        </button>
      </Nav>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/ingresar">Ingresar</a></li>
            {admin?<li><a href="/admin">Admin</a></li>:""}
        </ul>
    </Navbar>
  );
};

export default NavbarApp;
