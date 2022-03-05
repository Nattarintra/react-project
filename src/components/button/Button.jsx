import React from "react"

const Button = ({ btnText, onClick }) => {
  //console.log("props from Button compo", handleOnChangeQty)
  return (
    <div className="btn ">
      <button className="btn-primary" onClick={onClick}>
        <span>{btnText}</span>
      </button>
    </div>
  )
}
export default Button
