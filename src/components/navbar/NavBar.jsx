import React from "react"

import { Link } from "react-router-dom"

import Container from "@mui/material/Container"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Badge from "@mui/material/Badge"
import { CartItemsContextAPI } from "context/CartItemsContext"

const NavBar = () => {
  const { cartItems } = CartItemsContextAPI()

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
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}
export default NavBar
