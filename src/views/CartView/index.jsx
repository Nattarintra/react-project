import React from "react"
import PageWhiteSpace from "@components/PageWhiteSpace"
import CartItems from "./CartItems"
import MainLayout from "@layout/MainLayOut"

const CartView = ({ cartItems, onAddToCart }) => {
  return (
    <MainLayout cartItems={cartItems}>
      <PageWhiteSpace>
        <CartItems cartItems={cartItems} onAddToCart={onAddToCart} />
      </PageWhiteSpace>
    </MainLayout>
  )
}

export default CartView
