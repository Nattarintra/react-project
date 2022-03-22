import React from "react"
import Container from "@mui/material/Container"
import { Link } from "react-router-dom"
import { CartItemsContextAPI } from "context/CartItemsContext"

const Cart = ({ item }) => {
  const { handleIncreaseItem, handleDecreaseItem, handleDeleteItem, total } = CartItemsContextAPI()
  console.log("item id", item.id)
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
              <Link to="" className="cart-btn decrease" onClick={() => handleDecreaseItem(item)}>
                -
              </Link>

              <div className="cart-btn cart-qty">{item.qty}</div>

              <Link to="" className="cart-btn increase" onClick={() => handleIncreaseItem(item)}>
                +
              </Link>
              <Link to="" className="cart-btn delete" onClick={() => handleDeleteItem(item)}>
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
