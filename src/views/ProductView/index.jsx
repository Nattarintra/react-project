import React from "react"
import Container from "@mui/material/Container"
import PageWhiteSpace from "components/PageWhiteSpace"
import ProductItems from "./ProductItems"
import MainLayout from "layout/MainLayOut"
import { ProductAPI } from "context/Context"

const ProductView = () => {
  const { loading, error } = ProductAPI()

  if (loading) {
    return (
      <MainLayout>
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
      <MainLayout>
        <PageWhiteSpace>
          <Container>
            <p>Error fetching data </p>
          </Container>
        </PageWhiteSpace>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <PageWhiteSpace>
        <Container>
          <ProductItems />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}
export default ProductView
