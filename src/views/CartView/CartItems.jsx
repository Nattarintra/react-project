import React from "react"
import Cart from "components/cart/Cart"
import { CartItemsContextAPI } from "context/CartItemsContext"

const CartItems = () => {
  const { cartItems } = CartItemsContextAPI()

  return (
    <div className="">
      {cartItems.length === 0 ? (
        <div className="emptyCart">Your cart is empty</div>
      ) : (
        cartItems.map(item => {
          return (
            <div id={item.id} className="" key={item.id}>
              <Cart item={item} />
            </div>
          )
        })
      )}
    </div>
  )
}

export default CartItems
