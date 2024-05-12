import React from 'react'
import '../Navbar/Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <h1><Link style={{textDecoration: 'none', color: 'brown'}} to = '/'>lumos-beauty</Link></h1>
      </div>
      <div className="nav-cate">
        <ul className="category">
            <li><Link style={{textDecoration: 'none', color: 'black'}} to = '/kemnen'>Kem nền</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to = '/mahong'>Má hồng</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to = '/son'>Son</Link></li>
        </ul>
      </div>
      <div className="nav-search">
        <input type="text" placeholder='Nhập vào đây' />
        <button>Tìm kiếm</button>
      </div>
      <div className="nav-login">
        <button>Đăng nhập</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
