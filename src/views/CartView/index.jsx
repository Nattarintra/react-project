import React from "react"
import PageWhiteSpace from "components/PageWhiteSpace"
import CartItems from "./CartItems"
import MainLayout from "layout/MainLayOut"
import { CartItemsContextAPI } from "context/CartItemsContext"

const CartView = () => {
  const { cartItems } = CartItemsContextAPI()

  return (
    <MainLayout cartItems={cartItems}>
      <PageWhiteSpace>
        <CartItems />
      </PageWhiteSpace>
    </MainLayout>
  )
}

export default CartView
