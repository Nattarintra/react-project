import React from "react"
import Button from "@components/button/Button"
import PropTypes from "prop-types"

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <div className="content-card-wrap">
        <div className="media-card">
          <img className="product-image" src={product.image} alt={product.title} />
        </div>
        <div className="content-card">
          <div className="title-card">
            <p>{product.title}</p>
          </div>
          <div className="price-card">{<p>Price {product.price} EUR</p>}</div>
        </div>
      </div>

      <Button btnText="add to cart" onClick={() => onAddToCart({ product })} />
    </div>
  )
}
export default ProductCard
ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
}
