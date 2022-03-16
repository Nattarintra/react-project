import React from "react"
import Container from "@mui/material/Container"
import PageWhiteSpace from "components/PageWhiteSpace"
import ProductItems from "./ProductItems"
import MainLayout from "layout/MainLayOut"
import { ProductAPI } from "context/Context"
import { CartItemsContextAPI } from "context/CartItemsContext"

const ProductView = () => {
  const { cartItems } = CartItemsContextAPI()
  const { loading, error } = ProductAPI()

  if (loading) {
    return (
      <MainLayout cartItems={cartItems}>
        <PageWhiteSpace>
          <Container>
            <p>Loading...</p>
          </Container>
        </PageWhiteSpace>
      </MainLayout>
    )
  }

  if (error) {
    return (
      <MainLayout cartItems={cartItems}>
        <PageWhiteSpace>
          <Container>
            <p>Error fetching data </p>
          </Container>
        </PageWhiteSpace>
      </MainLayout>
    )
  }

  return (
    <MainLayout cartItems={cartItems}>
      <PageWhiteSpace>
        <Container>
          <ProductItems />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}
export default ProductView
