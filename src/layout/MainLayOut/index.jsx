import React from "react"
import NavBar from "@components/navbar/NavBar"

const MainLayOut = ({ children, cartItems }) => {
  return (
    <div className="">
      <NavBar cartItems={cartItems} />
      {children}
    </div>
  )
}
export default MainLayOut
