import React from 'react'
import logo from '../images/logo/KUPTO LOGO-2.png';
import { GiCardPickup } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { BsCashStack } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import jumper from '../images/products/promotion-items/jumpers/red-hoody.png';
import Container from '../components/Container';





const Checkout = () => {
  return (
    <>
    <Container class1='checkout-wrapper'>
      <div className='d-flex'>
            <div className='checkout-left-data'>
              <img src={logo} alt='' width={150} />
              
                <nav
                style={{"--bs-breadcrumb-divider": ">"}}
                aria-label="breadcrumb">
                <ol className="breadcrumb d-flex gap-10">
                  <li className="breadcrumb-item"><Link to='/cart' className='dark-font'>Cart</Link></li> &nbsp; /
                  
                  <li className="breadcrumb-item active dark-font" aria-current="page">Information</li>
                  &nbsp; /

                  <li className="breadcrumb-item"><Link to='/cart' className='active'>Shipping</Link></li> &nbsp; /
                  
                  <li className="breadcrumb-item active" aria-current="page">Payment</li>
                </ol>
              </nav>
              <h4 className='title-info mt-20'>Contact Information</h4>
              <p className='user-details mt-10 mb-10'>
                Lubega Benard (benardlubega068@gmail.com)
              </p>
              <h3 className='font-tt'>Choose your Location</h3>
                      <div className='d-flex gap-10 align-items-center mt-10 mb-10'>
                        <div className='form-inputt'>
                          <select className='new-s' name='' id=''>
                            <option>Kampala Region</option>
                            <option>Eastern Region</option>
                            <option>Entebbe Area</option>
                            <option>Western Region</option>
                            <option>Northern Region</option>
                            <option>Rest Of Central Region</option>
                          </select>
                        </div>
                    
                        <div className='form-inputt'>
                          <select className='new-s' name='' id=''>
                            <option>Buziga</option>
                            <option>Banda</option>
                            <option>Bakuli</option>
                            <option>Kibuye</option>
                            <option>Katwe</option>
                            <option>Buwate</option>
                          </select>
                        </div>
                      </div>

                      <div className='form-inputt'>
                            <div>
                              <input 
                              type='text' 
                              name='phone' 
                              className='new-s' 
                              placeholder='Phone number'/>
                            </div>
                        </div>

                      <div className='d-flex gap-10 mt-20'>
                        <div className='icon-deli'>
                        <GiCardPickup className='fs-5' />
                        </div>
                        <div>
                          <h4>Pickup Station</h4>
                          <p className='para-14'>Delivery Fees UGX 1500</p>
                        </div>

                      </div>

                      <div className='d-flex gap-10 mt-20'>
                        <div className='icon-deli'>
                        <TbTruckDelivery className='fs-5' />

                        </div>
                        <div>
                          <h4>Door Delivery</h4>
                          <p className='para-14'>Door to door Delivery within 1-3 business days. <br/>Delivery Fees UGX 5000</p>
                        </div>

                      </div>

                      <div className='d-flex gap-10 mt-20'>
                        <div className='icon-deli'>
                        <GiReturnArrow className='fs-5' />
                        </div>
                        <div>
                          <h4>Return Policy</h4>
                          <p className='para-14'>Free return within 7 days for eligible items.</p>
                        </div>

                      </div>

                      <div className='d-flex gap-10 mt-20'>
                        <div className='icon-deli'>
                        <BsCashStack className='fs-5' />
                        </div>
                        <div>
                          <h4>Cash on Delivery</h4>
                          <p className='para-14'>Customer can pay upon receiving the good(s).</p>
                        </div>

                      </div>

                      <div className='w-100 mb-20'>
                        <div className='d-flex mt-20 align-items-center justify-content-between'>
                          <Link to='/cart' className='me-2'><IoMdArrowRoundBack className='me-2' />
                            Return to Cart</Link>
                          <Link to='/cart' className='button red-button'>Continue to Shipping</Link>
                        </div>
                      </div>

            </div>

            <div className='checkout-right-data'>
              <div className='border-bottom'>
                <div className='d-flex align-items-center justify-content-between mb-10'>
                  <div className='check-image'>
                    <span className='span-cart'>1</span>
                    <img src={jumper} alt='' className='w-100'/>
                  </div>
                  <div className='check-detailss'>
                    <p className='para-14'>High quality cotton Jumper (Hoodie) that can be customized (your own Design)</p>
                  </div>
                  <div className='check-price'>
                    <p className='price-style'><strong>UGX 60,000</strong></p>
                  </div>
                </div>
              </div>

              <div className='border-bottom'>
                <div className='d-flex align-items-center           justify-content-between mb-10 mt-20'>
                    <h3 className='grey-font'>SubTotal</h3>
                    <h3 className='font-sub'>UGX 60,000</h3>
                    
                  </div>
                  <div className='d-flex align-items-center             justify-content-between mb-10 mt-20'>
                    <h3 className='grey-font'>Shipping</h3>
                    <h3 className='font-sub'>UGX 2,000</h3>
                    
                  </div>
              </div>

              <div className='d-flex align-items-center             justify-content-between mb-10 mt-20'>
                    <h3>Total</h3>
                    <h3>UGX 62,000</h3>
                    
                  </div>
              
            </div>
          </div>
    </Container>
     
    </>
  )
}

export default Checkout
