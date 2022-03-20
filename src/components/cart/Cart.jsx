import React from "react"
import Container from "@mui/material/Container"
import { Link } from "react-router-dom"

const Cart = ({ item }) => {
  return (
    <div className="cart-wrapper">
      <Container>
        <div className="cart-inner">
          <div className="cart-img">
            <img className="image" src={item.product.image} alt={item.product.title} />
          </div>
          <div className="cart-center">
            <div className="cart-title">{item.product.title}</div>
            <div className="cart-qty-info">
              <Link to="" className="cart-btn decrease">
                -
              </Link>
              {/*
              Todo summary of product qty 
              */}
              <div className="cart-btn cart-qty">{item.product.qty}</div>

              <Link to="" className="cart-btn increase">
                +
              </Link>
              <Link to="" className="cart-btn delete">
                x
              </Link>
            </div>
            <div className="cart-btn cart-price">{<p>{item.product.price} EUR</p>}</div>
          </div>
        </div>
        <div className="cart-total">Total</div>
      </Container>
    </div>
  )
}

export default Cart
