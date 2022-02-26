import React, { useState } from "react"

import Container from "@mui/material/Container"

import PageWhiteSpace from "@components/PageWhiteSpace"
import ProductItems from "./ProductItems"
import MainLayout from "@layout/MainLayOut"
import data from "@data/products"

const ProductView = () => {
  const products = data
  const [countQtyInCart, setCountQtyInCart] = useState(null)

  const handleChangeQty = () => {
    setCountQtyInCart(countQtyInCart + 1)
  }

  return (
    <MainLayout countQtyInCart={countQtyInCart}>
      <PageWhiteSpace>
        <Container>
          <ProductItems products={products} onChangeQty={handleChangeQty} countQtyInCart={countQtyInCart} />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}
export default ProductView
