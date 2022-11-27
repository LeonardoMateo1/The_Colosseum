import React from 'react'
import Logo from '../../images/logo2.png'
import "./home.css"
import {Link} from "react-router-dom"
import {AiOutlineSearch} from "react-icons/ai"


const Home = () => {
  return (
    <div>
      <div className="home_header">
        <img className='img' src={Logo} alt="" />
        <div className="header_right">
          <Link className='link' to=''>Players</Link>
          <Link className='link' to=''>Ranknings</Link>
          <Link className='link' to=''>Tournaments</Link>
          <div className="search_bar">
            <a href="#"><AiOutlineSearch/></a>
            <input type="search" id='search'/>
          </div>
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
    </div>
  )
}

export default Home