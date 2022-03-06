import React from "react"
import Container from "@mui/material/Container"
import { Link } from "react-router-dom"

const Cart = ({ item, cartItems }) => {
  //console.log("my item ", cartItems)
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
              <div className="cart-btn cart-qty">{cartItems.length}</div>

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
