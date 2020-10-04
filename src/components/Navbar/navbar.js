import React from "react";

import { Navbar, NavbarBrand } from "react-bootstrap";

/**
 * Styles
 */
import "./navbar.css";

/**
 * Images
 */
import Logo from "../../assets/logo.png";

export const NavBar = () => {
  return (
    <div className='NavBar-container'>
      <div className='row'>
        <div className='col-12'>
          <Navbar>
            <NavbarBrand href='/' tabIndex='0'>
              <img width='56px' src={Logo} alt='Logo SEREMPRE' />
            </NavbarBrand>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
