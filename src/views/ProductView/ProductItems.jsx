import React from "react"
import ProductCard from "@components/product-card/ProductCard"
import data from "@data/products"

const ProductItems = () => {
  return (
    <div className="grid-wrapper">
      {data.map(product => (
        <div className="grid">
          <ProductCard key={product.id} title={product.title} image={product.image} prices={product.prices} />
        </div>
      ))}
    </div>
  )
}
export default ProductItems
