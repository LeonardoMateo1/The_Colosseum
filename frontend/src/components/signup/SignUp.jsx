import React from 'react'
import Logo from '../../images/logo2.png'
import "./sign.css"
import {Link} from "react-router-dom"
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineSearch} from "react-icons/ai"


const SignUp = () => {
  return (
    <div>
      <div className="header">
        <img className='img' src={Logo} alt="" />
        <Link className='link' to='/'>The Colosseum</Link>
        <div className="header_right">
          <div className="sig_log">
            <GiHamburgerMenu className='link'/>
          </div>
        </div>
      </div>
      <div className="sign_login_wrapper">
        <div className="sign_login_container">
          <h4>Sign Up</h4>
        </div>
      </div>
    </div>
  )
}

export default SignUp