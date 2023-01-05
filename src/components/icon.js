import React from 'react'
import "./icon.css"

function icon(props) {
  return (
    <>
    <div className="option">
        {props.icon && <props.icon className="icon"/>}

        <h5 className="title">
            {props.title}
        </h5>
    </div> 
    </>
  )
}

export default icon