import React from "react"

const Button = ({ btnText }) => {
  return (
    <>
      <div className="btn">
        <button>
          <span>{btnText}</span>
        </button>
      </div>
    </>
  )
}
export default Button
