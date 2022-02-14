import React from "react"

import { Link } from "react-router-dom"

import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AccountCircle from "@mui/icons-material/AccountCircle"

const NavBar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <Container>
          <div className="nav-inner">
            <div className="nav-left">
              <p>React E-commerce</p>
            </div>
            <div className="nav-icon-wrapper nav-right">
              <Link to="" className="icon-btn bage">
                <ShoppingCartIcon />
              </Link>

              <Link to="" className="icon-btn accout-circle">
                <AccountCircle />
              </Link>
              <div className="menu ">
                <Link to="">Profile</Link>
                <Link to="">My account</Link>
              </div>
              <Link to="" className="icon-btn menuIcon">
                <MenuIcon />
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}
export default NavBar
