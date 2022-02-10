import React from "react"
import clsx from "clsx"
import { createStyles, makeStyles } from "@mui/styles"

import Button from "@mui/material/Button"
import Container from "@mui/material/Container"

import PageWhiteSpace from "@components/PageWhiteSpace"
import ProductCard from "@components/ProductCard"
import BackdropLoading from "@components/BackdropLoading"

const useStyles = makeStyles(_ =>
  createStyles({
    root: {}
  })
)
const ProductView = ({ className }) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)}>
      <Button variant="contained">Product View</Button>
      <PageWhiteSpace>
        <Container>
          <ProductCard />
          <BackdropLoading />
        </Container>
      </PageWhiteSpace>
    </div>
  )
}
export default ProductView
