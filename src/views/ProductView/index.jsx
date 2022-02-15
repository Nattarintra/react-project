import React from "react"
import clsx from "clsx"
import { createStyles, makeStyles } from "@mui/styles"

import Container from "@mui/material/Container"

import PageWhiteSpace from "@components/PageWhiteSpace"
import ProductCard from "@components/product-card/ProductCard"
import NavBar from "@components/navbar/NavBar"

const useStyles = makeStyles(_ =>
  createStyles({
    root: {}
  })
)
const ProductView = ({ className }) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)}>
      <NavBar />
      <PageWhiteSpace>
        <Container>
          <ProductCard />
        </Container>
      </PageWhiteSpace>
    </div>
  )
}
export default ProductView
