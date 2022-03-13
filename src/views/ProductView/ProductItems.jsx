import React from "react"
import ProductCard from "components/product-card/ProductCard"
import PropTypes from "prop-types"
import MainLayout from "layout/MainLayOut"

const ProductItems = ({ onAddToCart, products, loading }) => {
  if (loading) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }
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
