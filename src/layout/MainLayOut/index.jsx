import React from "react"
import NavBar from "@components/navbar/NavBar"

const MainLayOut = ({ children, countQtyInCart }) => {
  return (
    <div className="">
      <NavBar countQtyInCart={countQtyInCart} />
      {children}
    </div>
  )
}
export default MainLayOut
