import React from "react"
import PageWhiteSpace from "components/PageWhiteSpace"
import CartItems from "./CartItems"
import MainLayout from "layout/MainLayOut"
import Container from "@mui/material/Container"

const CartView = () => {
  return (
    <MainLayout>
      <PageWhiteSpace>
        <Container>
          <CartItems />
        </Container>
      </PageWhiteSpace>
    </MainLayout>
  )
}

export default CartView
