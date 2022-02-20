import React from "react"
import Button from "@components/button/Button"

const ProductCard = ({ id, title = "This is product title", imageURL = `/images/default.png`, price = 123, onClick }) => {
  return (
    <div className="card">
      <div className="content-card-wrap">
        <div className="media-card">
          <img className="product-image" src={imageURL} alt="Product product." />
        </div>
        <div className="content-card">
          <div className="title-card">
            <p>{title}</p>
          </div>
          <div className="price-card">
            <p>Price {price} </p>
          </div>
        </div>
      </div>

      <Button btnText="add to cart" />
    </div>
  )
}
export default ProductCard
