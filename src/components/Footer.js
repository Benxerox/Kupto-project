import React from 'react'
import { Link } from 'react-router-dom'
import newsletter from '../images/icon/newsletter.png';
import appstore from '../images/icon/app-store.png';
import googleplay from '../images/icon/google-play.png'
import twitter from '../images/icon/twitter.png';
import facebook from '../images/icon/facebook.png';
import tiktok from '../images/icon/tiktok.png';
import pintrest from '../images/icon/pintrest.png';
import instagram from '../images/icon/instagram.png'

const Footer = () => {
  return (
    <>
    <footer>
      <div className='container-sign'>
        <div className='row'>
          <div className='col-5'>
            <div className='footer-top'>
              <img src={newsletter} width={40} alt='newsletter'/>
              <h2 className='sign-text'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
            <div className='input-group'>
                <input type='text' className='form-foot'
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="basic-addon2"
                />
                <span className='input-group-text' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>

    <footer>
      <div className='footer-info'>
        <div className='info-row'>
          <div className='col-04'>
            <h4 className='text-info-footer'>Contact Us</h4>
            <div className='footer-contact'>
              <address className='address'>P.O Box 9696 Nasser Road, <br/> Light Arcade,  Room no. B14</address>
              <a href='tel:+256 704116349' className='mobile'>+256 704116349</a>
              <a href='mailto:kupto20@gmail.com' className='email'>kupto20@gmail.com</a>
                <div className='social-icons'>
                  <a className='s-icon' href='home'><img src={twitter} width={25} alt='' /></a>
                  <a className='s-icon' href='home'><img src={facebook} width={25} alt=''/></a>
                  <a className='s-icon' href='home'><img src={tiktok} width={25} alt=''/></a>
                  <a className='s-icon' href='home'><img src={instagram} width={25} alt=''/></a>
                  <a className='s-icon' href='home'><img src={pintrest} width={25} alt=''/></a>
                </div>

            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-info-footer'>About</h4>
            <div className='footer-links'>
              <Link to='/About us' className='footer-link-text'>About Us</Link>
              <Link to='/shipping-policy' className='footer-link-text'>Delivery Information</Link>
              <Link to='/terms-and-conditions' className='footer-link-text'>Terms And Conditions</Link>
              <Link to='/privacy-policy' className='footer-link-text'>Privacy Policy</Link>
              <Link to='/Contact' className='footer-link-text'>Contact Us</Link>
              <Link to='/refund-policy' className='footer-link-text'>Refund Policy</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-info-footer'>My Account</h4>
            <div className='footer-links'>
              <Link to='/signup' className='footer-link-text'>Sign in</Link>
              <Link className='footer-link-text'>View Cart</Link>
              <Link to='/whishlist' className='footer-link-text'>My Whishlist</Link>
              <Link className='footer-link-text'>Track My Order</Link>
              <Link className='footer-link-text'>Help</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-info-footer'>Install App</h4>
            <div className='footer-install'>
              <p className='para-install'>From App Store or Google Play</p>
              <div className='install-icons'>
              <Link className='icon-install'><img src={appstore} width={150} alt='' /></Link>
              <Link className='icon-install'><img src={googleplay} width={150} alt='' /></Link>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>

    <footer>
      <div className='container-end'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center'>&copy; {new Date().getFullYear()}; Powered by Kupto</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
