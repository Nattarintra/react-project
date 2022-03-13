import React from "react"
import ProductCard from "@components/product-card/ProductCard"
import PropTypes from "prop-types"
import { ProductAPI } from "@context/Context"

const ProductItems = ({ onAddToCart, products }) => {
  //const { products } = ProductAPI()
  return (
    <div className="grid-wrapper">
      {products.map(product => (
        <div id={product.id} className="grid" key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  )
}

export default ProductItems

ProductItems.propTypes = {
  product: PropTypes.object
}
