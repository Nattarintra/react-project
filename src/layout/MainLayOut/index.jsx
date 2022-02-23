import React from "react"
import NavBar from "@components/navbar/NavBar"

const MainLayOut = ({ children }) => {
  return (
    <div className="">
      <NavBar />
      {children}
    </div>
  )
}
export default MainLayOut
