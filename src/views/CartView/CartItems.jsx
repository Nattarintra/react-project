import React from "react"
import Cart from "@components/cart/Cart"
import data from "@data/products"

const CartItems = () => {
  const products = data
  return (
    <div className="">
      {products.map(product => (
        <div id={product.id} className="" key={product.id}>
          <Cart title={product.title} image={product.image} prices={product.prices} />
        </div>
      ))}
    </div>
  )
}

export default CartItems
