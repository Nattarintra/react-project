import React from "react"

const Button = ({ btnText, id, onClick }) => {
  const handleClick = () => {
    alert(onClick?.(id))
  }
  return (
    <div className="btn ">
      <button className="btn-primary" onClick={handleClick}>
        <span>{btnText}</span>
      </button>
    </div>
  )
}
export default Button
