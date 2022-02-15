import React from "react"

const ProductCard = ({ id, title = "This is product title", imageURL = `/images/default.png`, price = 123, onClick }) => {
  console.log(imageURL)
  return (
    <>
      <div className="card">
        <div className="content-card-wrap">
          <div className="media-card" styles={{ backgroundImage: `url(${imageURL})` }} />
          <div className="content-card">
            <div className="title-card">{title}</div>
            <div className="price-card">{price}</div>
          </div>
        </div>
        <div className="btn">
          <button>add to cart</button>
        </div>
      </div>
    </>
  )
}
export default ProductCard
