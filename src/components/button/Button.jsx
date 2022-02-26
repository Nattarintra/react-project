import React from "react"

const Button = ({ btnText, onChangeQty }) => {
  //console.log("props from Button compo", handleOnChangeQty)
  return (
    <div className="btn ">
      <button className="btn-primary" onClick={onChangeQty}>
        <span>{btnText}</span>
      </button>
    </div>
  )
}
export default Button
