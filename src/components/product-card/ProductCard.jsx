import React from "react"
import Button from "components/button/Button"
import PropTypes from "prop-types"
import { CartItemsContextAPI } from "context/CartItemsContext"

const ProductCard = ({ product }) => {
  const { handleAddToCart } = CartItemsContextAPI()

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
          <div className="price-card">
            <p>Price {Math.round(product.price)} EUR</p>
          </div>
        </div>
      </div>

      <Button btnText="add to cart" onClick={() => handleAddToCart(product)} />
    </div>
  )
}
export default ProductCard
ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func
}
