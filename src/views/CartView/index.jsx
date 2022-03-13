import React from "react"
import PageWhiteSpace from "components/PageWhiteSpace"
import CartItems from "./CartItems"
import MainLayout from "layout/MainLayOut"
import { ProductAPI } from "context/Context"

const CartView = () => {
  const { cartItems, handleAddToCart } = ProductAPI()

  return (
    <MainLayout cartItems={cartItems}>
      <PageWhiteSpace>
        <CartItems cartItems={cartItems} onAddToCart={handleAddToCart} />
      </PageWhiteSpace>
    </MainLayout>
  )
}

export default CartView
