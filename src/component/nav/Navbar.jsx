import React, { useState } from "react";

import Nav, { Brand, Hamburger, Menu, MenuLink } from "./Navbar.styled";
import {GiHamburgerMenu} from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setİsOpen] = useState(false)

  console.log(isOpen)
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>
          {"<Boran/>"} <span>Recipe</span>
        </i>
      </Brand>
      <Hamburger onClick={()=>setİsOpen(!isOpen)} >
        <GiHamburgerMenu />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={()=>setİsOpen(false) } >
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="Logout" onClick={()=> sessionStorage.clear()} >Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
