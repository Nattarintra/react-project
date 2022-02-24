import React, { useState } from "react"

import Container from "@mui/material/Container"

import PageWhiteSpace from "@components/PageWhiteSpace"
import ProductItems from "./ProductItems"
import MainLayout from "@layout/MainLayOut"

const ProductView = () => {
  const [cartItemQty, setCartItemQty] = useState(1)

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
