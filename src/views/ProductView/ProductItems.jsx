import React from "react"
import ProductCard from "@components/product-card/ProductCard"
//import data from "@data/products"

const ProductItems = ({ products, countQtyInCart, onChangeQty }) => {
  return (
    <div className="grid-wrapper">
      {products.map(product => (
        <div id={product.id} className="grid" key={product.id}>
          <ProductCard title={product.title} image={product.image} prices={product.prices} countQtyInCart={countQtyInCart} onChangeQty={onChangeQty} />
        </div>
      ))}
    </div>
  )
}
export default ProductItems
