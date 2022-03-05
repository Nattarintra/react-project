import React from "react"

import Container from "@mui/material/Container"
import PageWhiteSpace from "@components/PageWhiteSpace"
import ProductItems from "./ProductItems"
import MainLayout from "@layout/MainLayOut"

const ProductView = ({ products, cartItems, onAddToCart }) => {
  return (
    <MainLayout cartItems={cartItems}>
      <PageWhiteSpace>
        <Container>
          <ProductItems products={products} onAddToCart={onAddToCart} cartItems={cartItems} />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}
export default ProductView
