import React from "react"
import Cart from "components/cart/Cart"
import Container from "@mui/material/Container"
import { CartItemsContextAPI } from "context/CartItemsContext"

const CartItems = () => {
  const { cartItems, total } = CartItemsContextAPI()
  // console.log("cart items ", cartItems)
  return (
    <div className="">
      {cartItems.length === 0 ? (
        <Container>
          <div className="emptyCart">Your cart is empty</div>
        </Container>
      ) : (
        cartItems.map(item => {
          //console.log("item id ", item)
          return (
            <div id={item.id} className="" key={item.id}>
              <Cart item={item} />
            </div>
          )
        })
      )}
      {total !== 0 && <div className="cart-total">Total:{Math.round(total)} EUR</div>}
    </div>
  )
}

export default CartItems
