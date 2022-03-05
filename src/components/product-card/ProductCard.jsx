import React from "react"
import Button from "@components/button/Button"

const ProductCard = ({
  id,
  title = "This is product title",
  image = `/images/default.png`,
  prices = [
    { amount: "", currency: "SEK" },
    { amount: "", currency: "EUR" }
  ],
  onAddToCart,

  cartItems
}) => {
  return (
    <div className="card">
      <div className="content-card-wrap">
        <div className="media-card">
          <img className="product-image" src={image} alt={title} />
        </div>
        <div className="content-card">
          <p>{id}</p>
          <div className="title-card">
            <p>{title}</p>
          </div>
          <div className="price-card">
            <p>
              Price {prices[0].amount} {prices[0].currency} | {prices[1].amount} {prices[1].currency}
            </p>
          </div>
        </div>
      </div>

      <Button btnText="add to cart" onClick={() => onAddToCart(id, title, image)} />
    </div>
  )
}
export default ProductCard
