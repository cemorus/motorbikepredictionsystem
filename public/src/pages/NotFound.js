import React from 'react'
import notfound from "../pictures/404.jpeg"
import "./notfound.css"

const NotFound = () => {
  return (
    <div>
        <img src={notfound} alt="404" />
    </div>
  )
}

export default NotFound