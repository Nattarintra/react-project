import React, { useState } from "react"

import { Link } from "react-router-dom"

import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Badge from "@mui/material/Badge"
import CartView from "@views/CartView"

const NavBar = ({ cartItems }) => {
  console.log(" NavBarQty ", cartItems)

  return (
    <>
      <nav className="nav-wrapper">
        <Container>
          <div className="nav-inner">
            <div className="nav-left">
              <p>
                <Link to="/">React E-commerce</Link>
              </p>
            </div>
            <div className="nav-icon-wrapper nav-right">
              <Badge badgeContent={cartItems.length} color="secondary">
                <Link to="/cart" className="icon-btn bage">
                  <ShoppingCartIcon />
                </Link>
              </Badge>

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
