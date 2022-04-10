import React from "react"
import Container from "@mui/material/Container"
import { Link } from "react-router-dom"
import { CartItemsContextAPI } from "context/CartItemsContext"

const Cart = ({ item }) => {
  const { handleIncreaseItem, handleDecreaseItem, handleDeleteItem } = CartItemsContextAPI()

  return (
    <div className="cart-wrapper">
      <Container>
        <div className="cart-inner">
          <div className="cart-img">
            <img className="image" src={item.image} alt={item.title} />
          </div>
          <div className="cart-center">
            <div className="cart-title">{item.title}</div>
            <div className="cart-qty-info">
              <button to="" className="cart-btn decrease" disabled={item.qty < 2} onClick={() => handleDecreaseItem(item.id)}>
                -
              </button>

              <div className="cart-btn cart-qty">{item.qty}</div>

              <button to="" className="cart-btn increase" onClick={() => handleIncreaseItem(item.id)}>
                +
              </button>
              <Link to="" className="cart-btn delete" onClick={() => handleDeleteItem(item.id)}>
                x
              </Link>
            </div>
            <div className="cart-btn cart-price">{Math.round(item.price)}</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart
