import React from "react"

import Container from "@mui/material/Container"
import PageWhiteSpace from "@components/PageWhiteSpace"
import ProductItems from "./ProductItems"
import MainLayout from "@layout/MainLayOut"

const ProductView = ({ productsData, cartItems, onAddToCart }) => {
  return (
    <MainLayout cartItems={cartItems}>
      <PageWhiteSpace>
        <Container>
          <ProductItems onAddToCart={onAddToCart} cartItems={cartItems} productsData={productsData} />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}
export default ProductView
