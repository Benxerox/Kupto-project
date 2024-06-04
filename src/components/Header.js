import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import account from '../images/icon/account-icon.png';
import whishlist from '../images/icon/whishlist-icon.png';
import cart from '../images/icon/cart-icon.png'
import logo from '../images/logo/Kupto.png';
import cartegory from '../images/icon/category-01.png'




const Header = () => {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(()=>{
    let handler = (e)=>{
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
      
    }
    document.addEventListener('mousedown', handler)

    return()=>{
      document.addEventListener('mousedown',handler)
    }
  });
  
  return (
    <>
    <header className='header-top-strip'>
      <div className='.container-xxl'>
        <div className='row'>
          <div className='col-6'>
          <p className='text-end text-white mb-0'>
              Need Help: <a className='text-white' href="tel:+256 704116349">+256 704116349</a></p>
          </div>
          <div className='col-7'>
           

            <div className='link-strip'>
              <Link>
              <p>Order Tracking</p>
              </Link>
            </div>

            <div className='link-strip'>
              <Link>
              <p>FAQs</p>
              </Link>
            </div>
            
          </div>

        </div>

      </div>
    </header>
    
    <header className='header-upper py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-2'>
           <h1>
            <Link className='logo-1'>
              <img src={logo} width={150} alt=''/>
            </Link>
           </h1>
          </div>
          <div className='col-5'>
            <div className='input-group'>
              <input type='text' className='form-control'
              placeholder="Search Product..."
              aria-label="Search Product..."
              aria-describedby="basic-addon2"
              />
              <span className='input-group-text' id='basic-addon2'>
                <BsSearch />
              </span>
            </div>
          
          </div>
          <div className='col-5'>
            <div className='header-upper-links'>
              <div>
                <Link to='/login' className='display-link'>
                <img src={account} width={25} alt=''/>
                <p>My Account</p>
                </Link>
              </div>
              <div>
                <Link to='/Whishlist' className='display-link'>
                  <img src={whishlist} width={25} alt='' />
                  <p>My Whishlist</p>
                  </Link>
              </div>
              <div>
                <Link to='/cart' className='display-link'>
                  <img src={cart} width={25} alt='' />
                  <div className='d-flex'>
                    <span className='badge'>0</span>
                  </div>
                  
                  </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </header>

    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom'>

              <div>
                <div className='menu-container' ref={menuRef}>
                  <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
      
                    <button className='btn-drop'>
                      <img src={cartegory} width={25} alt='' />
                      SHOP CATEGORIES
                      </button>
                  </div>

                  <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <ul>
                      <DropdownItem text = {'Stationery'}/>
                      <DropdownItem text = {'Stationery'}/>
                      <DropdownItem text = {'Stationery'}/>
                      <DropdownItem text = {'Stationery'}/>
                    </ul>
                  </div>

                </div>
              </div>

              <div className='menu-links'>
                <div className='link'>
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/product'>Our Store</NavLink>
                  <NavLink to='/About us'>About Us</NavLink>
                  <NavLink to='/Contact'>Contact</NavLink>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </header>

    <header className='col-none'>
            <div className='input-group'>
              <input type='text' className='form-control'
              placeholder="Search Product..."
              aria-label="Search Product..."
              aria-describedby="basic-addon2"
              />
              <span className='input-group-text' id='basic-addon2'>
                <BsSearch />
              </span>
            </div>
          
          </header>

    
    </>
  )
}

function DropdownItem (props) {
  return(
    <div className='category-procedure'>
    <li className='dropdownItem'>
      <a className='categories' href='home'>{props.text}</a>
    </li>
    </div>
  )
}

export default Header
