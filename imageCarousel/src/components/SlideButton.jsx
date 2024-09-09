import React from 'react'

const SlideButton = (props) => {
  return (
    <button onClick={props.onClick} aria-label={props.ariaLabel}>{props.children}</button>
  )
}

export default SlideButton