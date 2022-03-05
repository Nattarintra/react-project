import React from "react"
import ProductCard from "@components/product-card/ProductCard"

const ProductItems = ({ products, cartItems, onAddToCart }) => {
  return (
    <div className="grid-wrapper">
      {products.map(product => (
        <div id={product.id} className="grid" key={product.id}>
          <ProductCard title={product.title} image={product.image} prices={product.prices} cartItems={cartItems} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  )
}
export default ProductItems
