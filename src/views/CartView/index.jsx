import React from "react"
import PageWhiteSpace from "components/PageWhiteSpace"
import CartItems from "./CartItems"
import MainLayout from "layout/MainLayOut"
import { CartItemsContextAPI } from "context/CartItemsContext"

const CartView = () => {
  const { cartItems, total } = CartItemsContextAPI()

  return (
    <MainLayout cartItems={cartItems}>
      <PageWhiteSpace>
        <CartItems />
        <div className="cart-total">Total:{Math.round(total)} EUR</div>
      </PageWhiteSpace>
    </MainLayout>
  )
}

export default CartView
