import React from "react"
import Cart from "components/cart/Cart"

const CartItems = ({ cartItems, onAddToCart }) => {
  //console.log(" cart items ", cartItems[0].product.id)
  return (
    <div className="">
      {cartItems.length === 0 ? (
        <div className="emptyCart">Your cart is empty</div>
      ) : (
        cartItems.map(item => {
          return (
            <div id={item.id} className="" key={item.product.id}>
              <Cart item={item} onAddToCart={onAddToCart} cartItems={cartItems} />
            </div>
          )
        })
      )}
    </div>
  )
}

export default CartItems
