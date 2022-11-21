import React from 'react'
import Logo from '../../images/logo2.png'
import "./home.css"
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div>
      <div className="home_header">
        <img className='img' src={Logo} alt="" />
        <h3>Welcome to the Colosseum</h3>
        <div className="sig_log">
          <div className="log_left">
            <Link className='link' to="/Login">Login /</Link>
          </div>
          <div className="sig_right">
            <Link className='link' to="/Sign_Up">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home