import React from 'react'
import './login.css'
import {access} from './spotify.js'
function Login() {
  return (
    <>
    <div className="login">
    <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
    <a href={access}>LOGIN WITH SPOTIFY</a>
    </div>
    </>
  )
}

export default Login