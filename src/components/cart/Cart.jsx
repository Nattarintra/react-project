import React from "react"
import Container from "@mui/material/Container"
import { Link } from "react-router-dom"

const Cart = ({ id, title = "This is product title", image = `/images/default.png`, prices = 123, countQtyInCart = 4 }) => {
  return (
    <div className="cart-wrapper">
      <Container>
        <div className="cart-inner">
          <div className="cart-img">
            <img className="image" src={image} alt={title} />
          </div>
          <div className="cart-center">
            <div className="cart-title">{title}</div>
            <div className="cart-qty-info">
              <Link to="" className="cart-btn increase">
                +
              </Link>
              <div className="cart-btn cart-qty">{countQtyInCart}</div>
              <Link to="" className="cart-btn decrease">
                -
              </Link>
              <Link to="" className="cart-btn delete">
                x
              </Link>
            </div>
            <div className="cart-btn cart-price">
              {prices[0].amount} {prices[0].currency}
            </div>
          </div>
        </div>
        <div className="cart-total">Total</div>
      </Container>
    </div>
  )
}

export default Cart
