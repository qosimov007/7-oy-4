

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// import { IconName } from "react-icons/ti";
import NavLinks from "./NavLinks";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const lightTheme = {
  body: "#f0f0f0",
  text: "#000",
  navbar: "#fff",
  buttonBg: "#d1d1d1",
  buttonHoverBg: "#ccc",
  cartIcon: "#000",
};

const darkTheme = {
  body: "#121212",
  text: "red",
  navbar: "#333",
  buttonBg: "#555",
  buttonHoverBg: "#777",
  cartIcon: "#fff",
};

const NavbarContainer = styled.div`
  background-color: ${(props) => props.theme.navbar};
  margin-bottom: 10px;
`;

const Button = styled(Link)`
  background-color: ${(props) => props.theme.buttonBg};
  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBg};
  }
  color: ${(props) => props.theme.text};
`;

const CartIcon = styled(MdShoppingCart)`
  width: 1.75rem;
  height: 1.75rem;
  color: ${(props) => props.theme.cartIcon};
  transition: color 0.4s;
`;

function Navbar() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <NavbarContainer className="navbar">
        <div className="max-w-6xl mx-auto navbar">
          <div className="navbar-start">
            <Button to="/" className="btn text-2xl">
              myShop
            </Button>
          </div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal">
              <NavLinks />
            </ul>
          </div>
          <div className="navbar-end ">
            <Link to="/cart">
              <div className="indicator cursor-pointer group">
                <span className="indicator-item badge badge-primary group-hover:badge-secondary">
                  9
                </span>
                <CartIcon className="group-hover:text-primary" />
              </div>
            </Link>
            <button onClick={toggleTheme} className="ml-4  btn">
             Oq Qora
            </button>
          </div>
        </div>
      </NavbarContainer>
    </ThemeProvider>
  );
}

export default Navbar;
