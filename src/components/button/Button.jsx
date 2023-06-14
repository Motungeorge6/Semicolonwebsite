import React from 'react'

const Button = (props) => {
  return (
      <button className={props.variant === "filled" ? "individuals-btn" : "businesses-btn"} {...props}>{props.children}</button>
  )
}

export default Button
