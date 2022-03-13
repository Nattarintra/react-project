import React from "react"
import Container from "@mui/material/Container"
import PageWhiteSpace from "@components/PageWhiteSpace"
import ProductItems from "./ProductItems"
import MainLayout from "@layout/MainLayOut"
import { ProductAPI } from "@context/Context"

const ProductView = () => {
  const { cartItems, handleAddToCart } = ProductAPI()
  return (
    <MainLayout cartItems={cartItems}>
      <PageWhiteSpace>
        <Container>
          <ProductItems onAddToCart={handleAddToCart} cartItems={cartItems} />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}
export default ProductView
