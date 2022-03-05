import React from "react"
import Cart from "@components/cart/Cart"

const CartItems = ({ cartItems, onAddToCart }) => {
  console.log(" cart items id ", cartItems.id)
  return (
    <div className="">
      {cartItems.length === 0 ? (
        <div className="emptyCart">Your cart is empty</div>
      ) : (
        cartItems.map(item => {
          return (
            <div id={item.id} className="" key={item.id}>
              <Cart title={item.title} image={item.image} prices={item.prices} cartItems={cartItems} onAddToCart={onAddToCart} />
            </div>
          )
        })
      )}
    </div>
  )
}

export default CartItems
