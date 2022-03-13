import React from "react"
import Container from "@mui/material/Container"
import PageWhiteSpace from "@components/PageWhiteSpace"
import ProductItems from "./ProductItems"
import MainLayout from "@layout/MainLayOut"
import { ProductAPI } from "@context/Context"

const ProductView = () => {
  const { products, cartItems, handleAddToCart, loading, error } = ProductAPI()

  if (loading) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  if (error) {
    return (
      <MainLayout>
        <p>Error fetching data </p>
      </MainLayout>
    )
  }

  return (
    <MainLayout cartItems={cartItems}>
      <PageWhiteSpace>
        <Container>
          <ProductItems onAddToCart={handleAddToCart} cartItems={cartItems} products={products} />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}
export default ProductView
