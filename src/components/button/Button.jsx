import React from "react"

const Button = ({ btnText }) => {
  return (
    <div className="btn ">
      <button className="btn-primary">
        <span>{btnText}</span>
      </button>
    </div>
  )
}
export default Button
