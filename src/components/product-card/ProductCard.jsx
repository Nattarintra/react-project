import React from "react"
import Button from "@components/button/Button"

const ProductCard = ({ id, title = "This is product title", imageURL = `/images/default.png`, price = 123, onClick }) => {
  console.log(imageURL)
  return (
    <>
      <div className="card">
        <div className="content-card-wrap">
          <div className="media-card" style={{ backgroundImage: `url(${imageURL})`, height: "256px", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
          <div className="content-card">
            <div className="title-card">
              <h4>{title}</h4>
            </div>
            <div className="price-card">
              <p>Price {price} </p>
            </div>
          </div>
        </div>

        <Button btnText="add to cart" />
      </div>
    </>
  )
}
export default ProductCard
