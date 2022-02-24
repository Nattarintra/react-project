import React from "react"
import ProductCard from "@components/product-card/ProductCard"
import data from "@data/products"

const ProductItems = ({ cartItemQty }) => {
  return (
    <div className="grid-wrapper">
      {data.map(product => (
        <div id={product.id} className="grid" key={product.id}>
          <ProductCard title={product.title} image={product.image} prices={product.prices} />
        </div>
      ))}
    </div>
  )
}
export default ProductItems
